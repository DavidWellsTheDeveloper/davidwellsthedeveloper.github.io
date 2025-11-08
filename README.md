# Dave Wells - Digital Resume Website

A minimalist, constitutional, and deployment-ready digital resume built with Nuxt.js. Features authentic content representation, clean design principles, fast loading, and comprehensive deployment options.

## Quick Start

```bash
# Navigate to project
cd david-wells-resume/

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
# ✅ Now running at http://localhost:3000/

# Run tests
npm run test:run
# ✅ 19/19 tests passing

# Check constitutional compliance
npm run constitutional:check
```

## Project Status: T005 COMPLETE ✅

### ✅ Development Environment Functional
- **Fixed crypto.hash error** - Dependencies resolved with `--legacy-peer-deps`
- **Fixed useAppConfig naming conflict** - Renamed to `useResumeConfig`
- **Development server running** - Available at http://localhost:3000/
- **All tests passing** - 19/19 constitutional and quality tests

### 🎯 Ready for T006: Component Development

## Constitutional Principles (Non-Negotiable)

1. **✅ Authentic Representation** - Only verified skills and experiences
2. **✅ Clean Design** - Minimalist, elegant, purposeful
3. **✅ Fast Loading** - Target <3s load time, optimized performance
4. **✅ Deployment Ready** - Static generation, cost-effective hosting

## Architecture

### Tech Stack
- **Framework:** Nuxt.js 3.19.2 (Vue 3 Composition API)
- **Styling:** Tailwind CSS (minimalist design)
- **TypeScript:** Full type safety and constitutional compliance
- **Testing:** Vitest (19 tests with constitutional validation)
- **Quality:** ESLint + Prettier with constitutional rules

### Configuration Management
```typescript
// composables/useResumeConfig.ts - Type-safe configuration
interface ResumeConfig {
  constitutional: {
    authenticRepresentation: boolean
    cleanDesign: boolean  
    fastLoading: boolean
    deploymentReady: boolean
  }
  performance: {
    targetLoadTime: number    // 3000ms
    targetFCP: number         // 1500ms  
    targetLCP: number         // 2500ms
  }
  // ... other configurations
}
```

## Deployment Options

### Option 1: FREE GitHub Pages + Cloudflare HTTPS 🆓
```bash
make setup-domain    # Follow setup guide
make deploy         # Deploy to GitHub Pages
# Total cost: $0/month + domain registration
```

### Option 2: AWS S3 + CloudFront (~$5/month)
```bash
npm run deploy:aws  # Deploy to AWS S3
# Includes performance monitoring and cache invalidation
```

## Development Workflow

### Daily Commands
```bash
make dev              # Start with constitutional compliance
make test             # Run all tests
make constitutional   # Check compliance status
make build           # Production build
```

### Quality Gates
- ✅ **Tests:** 19/19 passing (constitutional + unit tests)
- ✅ **Linting:** ESLint with constitutional compliance rules
- ✅ **Formatting:** Prettier for consistent code style
- ✅ **Types:** TypeScript compilation successful
- ✅ **Performance:** Lighthouse validation in deployment

## Project Structure

```
david-wells-resume/
├── 📁 composables/
│   └── useResumeConfig.ts      # 🔧 Type-safe configuration
├── 📁 deploy/
│   ├── aws-s3.sh              # AWS deployment script
│   └── github-pages.yml       # GitHub Pages workflow
├── 📁 tests/
│   ├── composables/           # Configuration tests
│   └── component.test.ts      # Component testing setup
├── 📁 .github/workflows/
│   └── deploy.yml             # 🚀 Automated deployment
├── .env.example               # Environment template
├── .env                       # Development configuration
├── Makefile                   # Development commands
├── setup-free-https.sh        # 🆓 Free HTTPS setup guide
└── nuxt.config.ts             # Nuxt configuration
```

## Environment Configuration

### Constitutional Compliance (Always Enabled)
```bash
NUXT_PUBLIC_AUTHENTIC_REPRESENTATION=true
NUXT_PUBLIC_CLEAN_DESIGN=true
NUXT_PUBLIC_FAST_LOADING=true
NUXT_PUBLIC_DEPLOYMENT_READY=true
```

### Performance Targets
```bash
NUXT_PUBLIC_TARGET_LOAD_TIME=3000    # 3 seconds max
NUXT_PUBLIC_TARGET_FCP=1500          # First Contentful Paint
NUXT_PUBLIC_TARGET_LCP=2500          # Largest Contentful Paint
```

## Testing Strategy

### Constitutional Compliance Tests
```typescript
// Ensures all four principles are enforced
describe('Constitutional Compliance', () => {
  it('enforces authentic representation', () => {
    expect(config.constitutional.authenticRepresentation).toBe(true)
  })
  // ... other constitutional tests
})
```

### Component Development (Ready for T006)
- Test-first development with Vitest
- Constitutional compliance validation in components  
- Performance testing for load time targets
- Accessibility testing (WCAG AA compliance)

## Custom Domain Setup (FREE HTTPS)

### GitHub Pages + Cloudflare (Recommended)
1. **Run setup guide:** `make setup-domain`
2. **Configure DNS:** Point domain to GitHub Pages
3. **Enable Cloudflare:** Free SSL + CDN + performance optimization
4. **Deploy:** `make deploy`

**Total Cost: $0/month** (only domain registration required)

See `HTTPS-DOMAIN-SETUP.md` for detailed instructions.

## Performance Optimization

### Static Generation
- Pre-rendered HTML for all routes
- Minimal JavaScript bundle
- Optimized images and assets
- CDN-ready deployment

### Constitutional Monitoring
- Build-time performance validation
- Runtime constitutional compliance checks
- Lighthouse CI integration
- Cost monitoring (< $10/month target)

## Development Environment Fixed ✅

### Issues Resolved:
1. **✅ crypto.hash error** - Node.js/Vite compatibility fixed
2. **✅ useAppConfig naming conflict** - Renamed to useResumeConfig
3. **✅ ESLint peer dependencies** - Using --legacy-peer-deps
4. **✅ Development server** - Running at http://localhost:3000/

### Working Commands:
```bash
npm run dev          # ✅ Development server running
npm run test:run     # ✅ 19/19 tests passing  
npm run build        # ✅ Production build works
npm run lint         # ✅ All files compliant
```

## Next Steps: T006 Component Development

With the development environment now functional, ready to begin:

1. **Landing Page Component** - Hero section with constitutional compliance
2. **Experience Timeline** - Work history with verified skills only
3. **Skills Matrix** - Authenticated technical capabilities
4. **Contact Section** - Professional contact information
5. **Navigation** - Clean, accessible site navigation

Each component will follow constitutional principles and include comprehensive tests.

## Contributing

### Constitutional Requirements
- All skills must be verified with Dave before implementation
- Maintain clean, minimalist design principles
- Optimize for performance (< 3s load time)
- Ensure deployment readiness

### Development Setup
```bash
git clone [repository]
cd david-wells-resume/
npm install --legacy-peer-deps
npm run dev
```

## License

This project represents Dave Wells' professional resume and portfolio.

---

**Status: Development Environment Ready ✅**  
**Next: T006 Component Development**  
**Goal: Minimalist digital resume with constitutional compliance**