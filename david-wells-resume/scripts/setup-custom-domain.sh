#!/bin/bash

# GitHub Pages + Cloudflare Setup Helper
# The cheapest way to get HTTPS + custom domain (FREE hosting!)

echo "🌐 GitHub Pages + Cloudflare Setup Helper"
echo "💰 Total hosting cost: \$0/month + domain registration"
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: This must be run in a git repository"
    exit 1
fi

# Get repository information
REPO_URL=$(git config --get remote.origin.url)
REPO_NAME=$(basename -s .git $REPO_URL)
USERNAME=$(basename $(dirname $REPO_URL) | sed 's/.*://')

echo "📋 Repository Information:"
echo "   Repository: $REPO_NAME"
echo "   Username: $USERNAME"
echo "   GitHub Pages URL: https://$USERNAME.github.io/$REPO_NAME"
echo ""

echo "🚀 Setup Steps:"
echo ""

echo "1️⃣ Domain Registration (Required - Only Cost)"
echo "   💡 Cheapest options:"
echo "   • Namecheap: ~\$8-12/year"
echo "   • Cloudflare Registrar: ~\$8-10/year"
echo "   • Google Domains: ~\$12/year"
echo ""

echo "2️⃣ Cloudflare Setup (FREE)"
echo "   🔗 Go to: https://cloudflare.com/sign-up"
echo "   📝 Steps:"
echo "   • Sign up for free account"
echo "   • Add your domain"
echo "   • Copy the nameservers Cloudflare provides"
echo "   • Update nameservers at your domain registrar"
echo "   • Wait for DNS propagation (5-10 minutes)"
echo ""

echo "3️⃣ Cloudflare DNS Configuration"
echo "   📝 Add CNAME record:"
echo "   • Name: @ (root domain) or www"
echo "   • Target: $USERNAME.github.io"
echo "   • Proxy status: Proxied (orange cloud icon)"
echo ""

echo "4️⃣ GitHub Pages Configuration"
echo "   🔗 Go to: https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "   📝 Steps:"
echo "   • Source: Deploy from a branch → main"
echo "   • Custom domain: your-domain.com"
echo "   • Wait for DNS check to pass"
echo "   • Enable 'Enforce HTTPS'"
echo ""

echo "5️⃣ Cloudflare SSL Configuration"
echo "   📝 In Cloudflare dashboard:"
echo "   • SSL/TLS → Overview → Set to 'Full (strict)'"
echo "   • SSL/TLS → Edge Certificates → Always Use HTTPS: ON"
echo "   • Security → Auto HTTPS Rewrites: ON"
echo ""

echo "✅ Final Result:"
echo "   🌍 Your resume will be available at: https://your-domain.com"
echo "   💰 Monthly cost: \$0 (only domain registration annually)"
echo "   🚀 Auto-deploys when you push to main branch"
echo "   🔒 Free SSL certificate"
echo "   ⚡ Global CDN for fast loading"
echo "   🛡️ DDoS protection"
echo ""

echo "🔧 Test Your Setup:"
echo "   1. Push code to main branch"
echo "   2. Wait 2-3 minutes for GitHub Actions"
echo "   3. Visit your domain"
echo "   4. Check HTTPS works"
echo "   5. Test from different locations"
echo ""

echo "💡 Troubleshooting:"
echo "   • DNS propagation can take up to 24 hours"
echo "   • GitHub Pages DNS check may take 10-15 minutes"
echo "   • Clear browser cache if you see old content"
echo "   • Check GitHub Actions tab for deployment status"
echo ""

echo "📞 Need help? Check these resources:"
echo "   • GitHub Pages docs: https://docs.github.com/en/pages"
echo "   • Cloudflare docs: https://developers.cloudflare.com/"
echo "   • Domain setup guide: ./HTTPS-DOMAIN-SETUP.md"