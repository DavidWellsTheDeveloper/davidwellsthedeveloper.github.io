#!/usr/bin/env bash
# AWS S3 Static Website Deployment
#
# Deploys the Nuxt-generated static site to S3 with optional CloudFront invalidation.
# Run from the david-wells-resume directory (e.g. npm run deploy:aws).
#
# Prerequisites:
#   - AWS CLI v2 configured (aws configure), or credentials in .env.production
#   - .env.production with AWS_S3_BUCKET and AWS_REGION (see .env.example)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Ensure we run from app root (where package.json and .output live)
cd "$(dirname "$SCRIPT_DIR")"

if [ ! -f package.json ]; then
  echo "❌ Run this script from the david-wells-resume package (npm run deploy:aws)."
  exit 1
fi

# Load environment variables (safe for values with spaces — no naive export $(cat …))
if [ -f .env.production ]; then
  set -a
  # shellcheck disable=SC1091
  source .env.production
  set +a
fi

if ! command -v aws >/dev/null 2>&1; then
  echo "❌ AWS CLI not found. Install: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
  exit 1
fi

if [ -z "${AWS_S3_BUCKET:-}" ] || [ -z "${AWS_REGION:-}" ]; then
  echo "❌ AWS_S3_BUCKET and AWS_REGION must be set (e.g. in .env.production)."
  echo "   Copy .env.example → .env.production and set AWS bucket/region."
  exit 1
fi

echo "🚀 Starting AWS S3 deployment..."
echo "📦 Bucket: $AWS_S3_BUCKET"
echo "🌍 Region: $AWS_REGION"

echo "🔨 Building static site..."
export NODE_ENV=production
npm run generate

if [ ! -d ".output/public" ]; then
  echo "❌ Build output missing at .output/public"
  exit 1
fi

BUILD_SIZE=$(du -sh .output/public | cut -f1)
echo "📊 Build size: $BUILD_SIZE"

echo "☁️ Syncing assets (long cache)..."
aws s3 sync .output/public/ "s3://$AWS_S3_BUCKET/" \
  --region "$AWS_REGION" \
  --delete \
  --cache-control "max-age=31536000,public" \
  --exclude "*.html"

echo "☁️ Syncing HTML (short cache)..."
aws s3 sync .output/public/ "s3://$AWS_S3_BUCKET/" \
  --region "$AWS_REGION" \
  --cache-control "max-age=3600,public" \
  --exclude "*" \
  --include "*.html" \
  --content-type "text/html; charset=utf-8"

echo "🌐 Configuring S3 website hosting..."
aws s3 website "s3://$AWS_S3_BUCKET" \
  --region "$AWS_REGION" \
  --index-document index.html \
  --error-document 404.html

if [ -n "${AWS_CLOUDFRONT_DISTRIBUTION_ID:-}" ]; then
  echo "🔄 Invalidating CloudFront cache..."
  aws cloudfront create-invalidation \
    --distribution-id "$AWS_CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*"
fi

WEBSITE_URL="http://${AWS_S3_BUCKET}.s3-website-${AWS_REGION}.amazonaws.com"
if [ -n "${AWS_CLOUDFRONT_DISTRIBUTION_ID:-}" ]; then
  WEBSITE_URL="https://$(aws cloudfront get-distribution --id "$AWS_CLOUDFRONT_DISTRIBUTION_ID" --query 'Distribution.DomainName' --output text)"
fi

echo "✅ Deployment complete!"
echo "🌍 Website URL: $WEBSITE_URL"
echo "💰 Estimated monthly cost: < \$5 (S3 + CloudFront)"

# Optional Lighthouse check — never fails the deploy
if command -v lighthouse >/dev/null 2>&1; then
  echo "🔍 Lighthouse (optional)..."
  set +e
  lighthouse "$WEBSITE_URL" --output json --output-path lighthouse-report.json --quiet --chrome-flags="--headless --no-sandbox" 2>/dev/null
  LH_OK=$?
  set -e
  if [ "$LH_OK" -eq 0 ] && [ -f lighthouse-report.json ]; then
    PERFORMANCE_SCORE=$(node -e "try { const j=require('./lighthouse-report.json'); console.log(Math.round((j.categories.performance.score||0)*100)); } catch(e) { console.log(0); }" 2>/dev/null || echo "0")
    echo "   Performance score (desktop target): ${PERFORMANCE_SCORE}%"
  else
    echo "   (Lighthouse did not complete; deploy still succeeded.)"
  fi
else
  echo "💡 Install lighthouse CLI for optional audits: npm install -g lighthouse"
fi

echo "📋 Deployment summary:"
echo "   📦 Build size: $BUILD_SIZE"
echo "   🌍 URL: $WEBSITE_URL"
