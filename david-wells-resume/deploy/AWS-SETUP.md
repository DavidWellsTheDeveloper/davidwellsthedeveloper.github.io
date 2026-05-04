# AWS setup for `make deploy-aws`

Your deploy script needs a bucket, region, and credentials. Optional: CloudFront
for HTTPS and a custom domain.

## 1. S3 bucket (`david-wells-portfolio`, `us-east-1`)

1. AWS Console → **S3** → **Create bucket**.
2. **Bucket name:** `david-wells-portfolio` (globally unique; change if taken).
3. **Region:** **US East (N. Virginia) us-east-1**.
4. **Block Public Access:** For a public static site served **directly from S3
   website hosting**, turn **off** “Block all public access” and acknowledge.  
   If you only serve traffic through **CloudFront with OAC**, keep the bucket
   private and use CloudFront → Origin Access — follow AWS docs for OAC; the
   deploy script still syncs files to the bucket the same way.
5. Create the bucket.

### Static website hosting

1. Open the bucket → **Properties** → **Static website hosting** → **Edit** →
   **Enable**.
2. **Index document:** `index.html`
3. **Error document:** `404.html` (your Nuxt build produces this.)
4. Save. Note the **Bucket website endpoint** (e.g.
   `http://david-wells-portfolio.s3-website-us-east-1.amazonaws.com`).

### Bucket policy (public reads — website endpoint only)

If visitors hit the **S3 website URL** (not CloudFront yet), attach a policy
allowing `GetObject` on objects:

- **S3** → your bucket → **Permissions** → **Bucket policy** → Edit.

Use a policy like (replace the bucket name if different):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::david-wells-portfolio/*"
    }
  ]
}
```

## 2. IAM role for deployment (recommended — least privilege)

**Roles do not have permanent access keys.** You put **only** the S3 (and
optional CloudFront) actions on the **role**. Something **assumes** that role
and receives **temporary** STS credentials.

For **local** deploys from your laptop, the usual pattern is:

| Piece                       | Purpose                                                                       |
| --------------------------- | ----------------------------------------------------------------------------- |
| **Customer managed policy** | Lists exactly what deploy needs (`s3:PutObject`, etc.).                       |
| **IAM role**                | Attached to that policy; trust policy says **who** may assume it.             |
| **IAM user**                | Has **only** `sts:AssumeRole` for that role + **access keys** stored locally. |
| **CLI profile**             | `role_arn` + `source_profile` so every `aws s3 …` runs **as the role**.       |

### Step 1 — Create the deployment permission policy

1. **IAM** → **Policies** → **Create policy** → **JSON**.
2. Paste the JSON from **section 3** (S3 + website). If you invalidate
   CloudFront from the script, add the CloudFront statement from **section 4**
   to this policy (or attach a second small policy to the role).
3. Name it e.g. **`ResumePortfolioDeployPolicy`** → **Create policy**.

### Step 2 — Create the role

1. **IAM** → **Roles** → **Create role**.
2. **Trusted entity type:** **AWS account** → select **This account** →
   **Next**.
3. Search and attach **`ResumePortfolioDeployPolicy`** (and CloudFront policy if
   you split it).
4. **Role name:** e.g. **`ResumePortfolioDeployRole`** → **Create role**.
5. Open the role and copy its **ARN** (you need it for the operator user’s
   policy in Step 3).

The wizard’s default trust policy usually allows **any principal in this
account** to assume the role (subject to IAM permissions). That is fine until
**Step 4**, where you replace it so **only** the operator user can assume the
role.

### Step 3 — IAM user that may only assume the role

Do this **before** editing the role’s trust policy: you need the **user ARN**
for Step 4, and this step needs the **role ARN** from Step 2.

This user’s keys are the **only** long-lived secrets on disk; they cannot sync
to S3 directly.

1. **IAM** → **Users** → **Create user** (e.g. `portfolio-deploy-operator`).
2. **Create policy** → **JSON** → name **`AssumeResumePortfolioDeployOnly`**:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AssumePortfolioDeployRole",
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "arn:aws:iam::YOUR_ACCOUNT_ID:role/ResumePortfolioDeployRole"
    }
  ]
}
```

3. Attach **only** this policy to **`portfolio-deploy-operator`**.
4. Open the user and copy the **ARN** (for Step 4 `Principal`), or note
   **account ID** + **user name**.
5. User → **Security credentials** → **Create access key** → **Command Line
   Interface (CLI)** → save **Access key ID** and **Secret access key**.

### Step 4 — Trust policy (who may assume this role)

**After** the operator user exists, **restrict** the role so **only** that user
may assume it:

1. Role **`ResumePortfolioDeployRole`** → **Trust relationships** → **Edit trust
   policy**.
2. Replace with (use the operator **user ARN** from Step 3):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::YOUR_ACCOUNT_ID:user/YOUR_OPERATOR_USERNAME"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

**Finding `YOUR_ACCOUNT_ID`:** top-right of the console → account dropdown, or
IAM dashboard URL.

_(CI/CD: GitHub Actions typically uses **OIDC** with `Principal` = `Federated` —
different JSON — see AWS “Creating OpenID Connect identity providers”.)_

### Step 5 — AWS CLI profiles

**`~/.aws/credentials`** — credentials for **`portfolio-deploy-operator` only**:

```ini
[portfolio-operator]
aws_access_key_id = AKIA...
aws_secret_access_key = ...
```

**`~/.aws/config`** — profile that assumes the role (adjust ARNs):

```ini
[profile portfolio-deploy]
role_arn = arn:aws:iam::YOUR_ACCOUNT_ID:role/ResumePortfolioDeployRole
source_profile = portfolio-operator
region = us-east-1
```

Sanity check:

```bash
AWS_PROFILE=portfolio-deploy aws sts get-caller-identity
```

You want **`Arn`** to contain **`assumed-role/ResumePortfolioDeployRole/`**.

Then either:

```bash
export AWS_PROFILE=portfolio-deploy
make deploy-aws
```

Or add to **`david-wells-resume/.env.production`** (loaded by
`deploy/aws-s3.sh`):

```bash
AWS_REGION=us-east-1
AWS_S3_BUCKET=david-wells-portfolio
AWS_PROFILE=portfolio-deploy
```

Do **not** put **`AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`** in
`.env.production` when using role assumption — keep keys in
**`~/.aws/credentials`**.

---

## Alternative: IAM user with S3 policy attached directly (no role)

Attach the policy in **section 3** to a single user and put that user’s keys in
`.env.production` or `aws configure`. Simpler, but that user holds both login
power and S3 power in one principal.

## 3. IAM policy JSON — S3 deploy + website configuration

Attach this policy to **`ResumePortfolioDeployRole`** (recommended) or to a
dedicated deploy user. Adjust the bucket name if yours differs.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DeploySyncObjects",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::david-wells-portfolio",
        "arn:aws:s3:::david-wells-portfolio/*"
      ]
    },
    {
      "Sid": "WebsiteConfig",
      "Effect": "Allow",
      "Action": ["s3:PutBucketWebsite", "s3:GetBucketWebsite"],
      "Resource": "arn:aws:s3:::david-wells-portfolio"
    }
  ]
}
```

## 4. CloudFront (optional — HTTPS / custom domain)

If `www.davidwellsthedeveloper.com` or similar should point at this bucket:

1. **CloudFront** → **Create distribution**.
2. **Origin:** S3 **website endpoint** or REST + OAC per current AWS guidance.
3. **Default root object:** `index.html` (and custom error responses for SPA if
   needed).
4. Copy the **Distribution ID** (`E…`) into `.env.production`:

```bash
AWS_CLOUDFRONT_DISTRIBUTION_ID=E...
```

Add this to the **same customer managed policy attached to the role** (minimal):

```json
{
  "Sid": "InvalidateAndReadDistribution",
  "Effect": "Allow",
  "Action": ["cloudfront:CreateInvalidation", "cloudfront:GetDistribution"],
  "Resource": "*"
}
```

5. **Route 53** (or DNS): alias to CloudFront; ACM cert in **us-east-1** for
   CloudFront.

## 5. Local `.env.production`

```bash
cp david-wells-resume/.env.production.example david-wells-resume/.env.production
```

Set `AWS_REGION`, `AWS_S3_BUCKET`, and either:

- **`AWS_PROFILE=portfolio-deploy`** (role pattern), or
- **`AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`** (direct user with S3 policy
  — not recommended vs role).

Then:

```bash
make deploy-aws
```

`.env.production` is gitignored; do not commit secrets.
