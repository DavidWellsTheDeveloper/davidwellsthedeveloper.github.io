# Cheapest HTTPS + Custom Domain Setup Guide
# Total Cost: $0/month hosting + ~$10-15/year domain registration

## Option 1: GitHub Pages + Cloudflare (FREE)

### Step 1: GitHub Pages Setup (Already configured!)
Your GitHub workflow is already set up in `.github/workflows/deploy.yml`

### Step 2: Domain Registration
- **Cheapest registrars:**
  - Namecheap: ~$8-12/year
  - Google Domains: ~$12/year  
  - Cloudflare Registrar: ~$8-10/year (at cost pricing)

### Step 3: Cloudflare Setup (FREE)
1. Sign up at cloudflare.com (free account)
2. Add your domain to Cloudflare
3. Update nameservers at your registrar to Cloudflare's
4. In Cloudflare DNS, add CNAME record:
   ```
   Name: @ (or www)
   Target: yourusername.github.io
   Proxy status: Proxied (orange cloud)
   ```

### Step 4: GitHub Pages Custom Domain
1. Go to your repo settings → Pages
2. Add your custom domain (e.g., davidwells.dev)
3. Enable "Enforce HTTPS" (will work after Cloudflare setup)

### Step 5: Cloudflare SSL Setup
1. SSL/TLS → Overview → Set to "Full (strict)"
2. Edge Certificates → Always Use HTTPS: ON
3. Security → Auto HTTPS Rewrites: ON

**Result: FREE HTTPS hosting with custom domain!**

---

## Option 2: AWS with Cost Optimization

If you prefer AWS, here's the cheapest AWS setup:

### Required AWS Services:
```bash
# Environment variables for cheapest AWS setup
AWS_REGION=us-east-1  # Cheapest region
AWS_S3_BUCKET=yourname-resume-static
AWS_CLOUDFRONT_DISTRIBUTION_ID=E1234567890123
ROUTE53_HOSTED_ZONE_ID=Z1234567890123
DOMAIN_NAME=yourname.com
```

### Monthly Costs Breakdown:
- **S3 Storage**: $0.50 (static files)
- **CloudFront**: $1.00 (global CDN)
- **Route 53**: $0.50 (DNS hosting)
- **ACM Certificate**: FREE (SSL)
- **Total**: ~$2/month + domain registration

### AWS Setup Commands:
```bash
# 1. Create S3 bucket
aws s3 mb s3://yourname-resume-static --region us-east-1

# 2. Create CloudFront distribution (via AWS Console - easier)
# 3. Request ACM certificate for your domain
# 4. Create Route 53 hosted zone
# 5. Update domain nameservers to Route 53
```

---

## Recommendation: Go with GitHub Pages + Cloudflare

**Why this is the best choice:**
1. **$0/month hosting** (constitutional principle: cost-effective)
2. **Enterprise-grade performance** (Cloudflare's global CDN)
3. **Simple setup** (no AWS complexity)
4. **Automatic deployments** (already configured)
5. **DDoS protection** (Cloudflare security)
6. **Analytics included** (Cloudflare analytics)

**Constitutional Compliance:**
- ✅ **Authentic Representation**: Professional domain
- ✅ **Clean Design**: Simple, minimal setup
- ✅ **Fast Loading**: Global CDN, optimized caching
- ✅ **Deployment Ready**: Automated, zero cost

**Setup Time: ~30 minutes**

Would you like me to create the detailed setup instructions for the GitHub Pages + Cloudflare approach?