#!/bin/bash

# Custom Domain Setup for GitHub Pages + Cloudflare
# FREE HTTPS hosting with your existing domain!

echo "🌐 Setting up FREE HTTPS hosting with your domain"
echo "💰 Total cost: \$0/month (GitHub Pages + Cloudflare free tier)"
echo ""

# Get repository information
REPO_URL=$(git config --get remote.origin.url 2>/dev/null)
if [ -z "$REPO_URL" ]; then
    echo "❌ Error: Not in a git repository or no remote origin configured"
    echo "💡 Make sure you're in the project root directory"
    exit 1
fi

REPO_NAME=$(basename -s .git "$REPO_URL")
# Handle both SSH and HTTPS URLs
if [[ $REPO_URL == *"github.com:"* ]]; then
    # SSH URL format: git@github.com:username/repo.git
    USERNAME=$(echo $REPO_URL | sed 's/.*github.com:\([^/]*\)\/.*/\1/')
elif [[ $REPO_URL == *"github.com"* ]]; then
    # HTTPS URL format: https://github.com/username/repo.git
    USERNAME=$(echo $REPO_URL | sed 's/.*github.com\/\([^/]*\)\/.*/\1/')
else
    echo "❌ Error: Not a GitHub repository"
    exit 1
fi

echo "📋 Repository Information:"
echo "   Repository: $REPO_NAME"
echo "   Username: $USERNAME"
echo "   GitHub Pages base URL: https://$USERNAME.github.io/$REPO_NAME"
echo ""

echo "🚀 Setup Steps (follow in order):"
echo ""

echo "1️⃣ GitHub Repository Configuration"
echo "   🔗 Go to: https://github.com/$USERNAME/$REPO_NAME/settings/variables/actions"
echo "   📝 Add repository variable:"
echo "   • Name: CUSTOM_DOMAIN"
echo "   • Value: yourdomain.com (your actual domain)"
echo ""

echo "2️⃣ Cloudflare Setup (FREE account)"
echo "   🔗 Go to: https://cloudflare.com/sign-up"
echo "   📝 Steps:"
echo "   • Sign up for free account"
echo "   • Add your domain"
echo "   • Note the nameservers Cloudflare provides"
echo ""

echo "3️⃣ Update Domain Nameservers"
echo "   📝 At your domain registrar:"
echo "   • Change nameservers to Cloudflare's nameservers"
echo "   • Wait 5-24 hours for propagation"
echo ""

echo "4️⃣ Cloudflare DNS Configuration"
echo "   📝 In Cloudflare dashboard → DNS → Records:"
echo "   • Add CNAME record:"
echo "     Name: @ (or yourdomain.com)"
echo "     Target: $USERNAME.github.io"
echo "     Proxy status: Proxied (orange cloud) ✅"
echo ""
echo "   • Add CNAME record for www (optional):"
echo "     Name: www"
echo "     Target: yourdomain.com"
echo "     Proxy status: Proxied (orange cloud) ✅"
echo ""

echo "5️⃣ Cloudflare SSL Configuration"
echo "   📝 In Cloudflare dashboard:"
echo "   • SSL/TLS → Overview → Set to 'Full (strict)'"
echo "   • SSL/TLS → Edge Certificates → Always Use HTTPS: ON"
echo "   • Security → Auto HTTPS Rewrites: ON"
echo ""

echo "6️⃣ GitHub Pages Configuration"
echo "   🔗 Go to: https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "   📝 Steps:"
echo "   • Source: 'Deploy from a branch'"
echo "   • Branch: 'main' (or your default branch)"
echo "   • Folder: '/ (root)'"
echo "   • Custom domain: yourdomain.com"
echo "   • Wait for DNS check ✅"
echo "   • Enable 'Enforce HTTPS' ✅"
echo ""

echo "7️⃣ Deploy Your Site"
echo "   📝 Push code to trigger deployment:"
echo "   \$ git add ."
echo "   \$ git commit -m 'Enable custom domain'"
echo "   \$ git push origin main"
echo ""

echo "🎉 What You'll Get:"
echo "   ✅ FREE hosting (\$0/month)"
echo "   ✅ FREE SSL certificate"
echo "   ✅ Global CDN (fast loading worldwide)"
echo "   ✅ DDoS protection"
echo "   ✅ Auto-deployment from Git"
echo "   ✅ 99.9% uptime"
echo ""

echo "⏱️ Timeline:"
echo "   • Cloudflare setup: 10 minutes"
echo "   • DNS propagation: 5-24 hours"
echo "   • GitHub Pages setup: 5 minutes"
echo "   • First deployment: 2-3 minutes"
echo ""

echo "🔍 Testing Your Setup:"
echo "   1. Visit https://yourdomain.com"
echo "   2. Check SSL certificate (🔒 in browser)"
echo "   3. Test from different devices/locations"
echo "   4. Verify site loads under 3 seconds"
echo ""

echo "🆘 Troubleshooting:"
echo "   • DNS changes take up to 24 hours"
echo "   • Clear browser cache if seeing old content"
echo "   • Check GitHub Actions tab for deployment status"
echo "   • Verify Cloudflare proxy is enabled (orange cloud)"
echo ""

echo "📚 Documentation:"
echo "   • Full guide: ./HTTPS-DOMAIN-SETUP.md"
echo "   • GitHub Pages: https://docs.github.com/en/pages"
echo "   • Cloudflare: https://developers.cloudflare.com/"