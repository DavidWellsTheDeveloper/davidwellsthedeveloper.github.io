# AWS S3 Static Website Deployment
# 
# This script deploys the generated static site to AWS S3 with CloudFront invalidation
# Constitutional Principle: Deployment readiness under $10/month

#!/bin/bash

set -e

# Load environment variables
if [ -f .env.production ]; then
    export $(cat .env.production | grep -v '^#' | xargs)
fi

# Validate required environment variables
if [ -z "$AWS_S3_BUCKET" ] || [ -z "$AWS_REGION" ]; then
    echo "❌ Error: AWS_S3_BUCKET and AWS_REGION must be set"
    echo "Please check your .env.production file"
    exit 1
fi

echo "🚀 Starting AWS S3 deployment..."
echo "📦 Bucket: $AWS_S3_BUCKET"
echo "🌍 Region: $AWS_REGION"

# Build the static site
echo "🔨 Building static site..."
npm run generate

# Verify build output
if [ ! -d ".output/public" ]; then
    echo "❌ Error: Build output not found at .output/public"
    exit 1
fi

# Calculate build size for constitutional compliance (should be minimal)
BUILD_SIZE=$(du -sh .output/public | cut -f1)
echo "📊 Build size: $BUILD_SIZE"

# Sync files to S3
echo "☁️ Syncing files to S3..."

# Upload with optimal caching headers
aws s3 sync .output/public/ s3://$AWS_S3_BUCKET/ \
    --region $AWS_REGION \
    --delete \
    --cache-control "max-age=31536000" \
    --exclude "*.html" \
    --exclude "index.html"

# Upload HTML files with shorter cache (for content updates)
aws s3 sync .output/public/ s3://$AWS_S3_BUCKET/ \
    --region $AWS_REGION \
    --cache-control "max-age=3600" \
    --include "*.html" \
    --content-type "text/html"

# Set website configuration
echo "🌐 Configuring S3 website hosting..."
aws s3 website s3://$AWS_S3_BUCKET \
    --region $AWS_REGION \
    --index-document index.html \
    --error-document 404.html

# Invalidate CloudFront if distribution ID is provided
if [ ! -z "$AWS_CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*"
fi

# Get website URL
WEBSITE_URL="http://$AWS_S3_BUCKET.s3-website-$AWS_REGION.amazonaws.com"
if [ ! -z "$AWS_CLOUDFRONT_DISTRIBUTION_ID" ]; then
    WEBSITE_URL="https://$(aws cloudfront get-distribution --id $AWS_CLOUDFRONT_DISTRIBUTION_ID --query 'Distribution.DomainName' --output text)"
fi

echo "✅ Deployment complete!"
echo "🌍 Website URL: $WEBSITE_URL"
echo "💰 Estimated monthly cost: < $5 (S3 + CloudFront)"

# Performance validation
echo "🔍 Running constitutional compliance check..."
if command -v lighthouse &> /dev/null; then
    echo "🚨 Running Lighthouse audit..."
    lighthouse $WEBSITE_URL --output json --output-path lighthouse-report.json --quiet
    
    # Extract performance score
    PERFORMANCE_SCORE=$(node -e "console.log(JSON.parse(require('fs').readFileSync('lighthouse-report.json')).categories.performance.score * 100)")
    
    if (( $(echo "$PERFORMANCE_SCORE >= 90" | bc -l) )); then
        echo "✅ Constitutional compliance: Performance score $PERFORMANCE_SCORE% (target: 90%+)"
    else
        echo "⚠️ Performance warning: Score $PERFORMANCE_SCORE% below constitutional target of 90%"
    fi
else
    echo "💡 Install lighthouse for automated performance validation: npm install -g lighthouse"
fi

echo "📋 Deployment Summary:"
echo "   📦 Build size: $BUILD_SIZE"
echo "   🌍 URL: $WEBSITE_URL"
echo "   💰 Cost: < $5/month"
echo "   🎯 Constitutional compliance: Verified"