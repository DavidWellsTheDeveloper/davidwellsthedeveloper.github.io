# GitHub Copilot Instructions: Digital Resume Project

## Project Context
Building a professional digital resume website for Dave Wells using Vue.js/Nuxt.js. The site prioritizes authentic content representation, clean design, and optimal user experience.

## Quick Reference Documents

### 📋 For Development Practices
See: [Development Constitution](./development-constitution.md)
- Code quality standards
- Component patterns
- Performance requirements
- Testing standards

### 📋 For Content Verification
See: [Resume Data Validation](./resume-data-validation.md)
- ✅ **All resume data is VERIFIED and LOCKED**
- Personal info, work experience, education complete
- Technical skills matrix verified
- **No further content validation needed**

## Current Project Status

### ✅ COMPLETE
- **Resume Data**: All verified and implemented
- **Core Components**: All constitutional requirements met  
- **Test Suite**: 133/133 tests passing
- **SSR Compatibility**: Error-free loading
- **Constitutional Compliance**: Fully implemented

### 🎯 FOCUS AREAS
- Performance optimization
- Deployment automation  
- User experience enhancements
- Production readiness features

## Development Workflow

### For New Features
1. Follow [Development Constitution](./development-constitution.md) standards
2. Implement with TypeScript and Vue 3 Composition API
3. Add comprehensive tests
4. Verify constitutional compliance
5. Ensure production readiness

### For Content Changes
1. Check [Resume Data Validation](./resume-data-validation.md) first
2. **If data is VERIFIED**: Proceed with implementation
3. **If data needs verification**: Consult with Dave first
4. Update validation document after changes

## Key Principles (Summary)

1. **Authentic Representation** - Only use verified data from validation document
2. **Clean Design** - Minimalist, elegant solutions with proper spacing
3. **User-Centric** - Fast loading, responsive, accessible
4. **Content-First** - Logical organization, easy updates
5. **Deployment Ready** - Static generation, cost-effective hosting

## Tech Stack (Current)
- **Framework**: Nuxt.js 3.19.2
- **Styling**: Tailwind CSS with custom gradients
- **Testing**: Vitest with 133 constitutional compliance tests
- **TypeScript**: Strict typing throughout
- **Deployment**: Static generation for AWS S3/GitHub Pages

## Emergency Quick Fixes

### SSR Errors
```typescript
// Always use safe property access
const data = computed(() => composable?.value || fallback)
```

### Constitutional Compliance
```bash
npm run test  # Must show 133/133 passing
```

### Performance Check
```bash
npm run build  # Must complete without errors
```

## Current Server
- **Running**: http://localhost:3001/
- **Status**: Production-ready with all features
- **Next**: Focus on optimization and deployment features

Remember: **Resume data is complete and verified** - focus on development quality and new features rather than content validation.

## Tech Stack Preferences

### Framework: Nuxt.js
```typescript
// Preferred patterns
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  // Static generation for deployment
  nitro: { prerender: { routes: ['/'] } }
})
```

### Styling: Tailwind CSS
```vue
<!-- Preferred component structure -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <!-- Clean, responsive layouts -->
  </div>
</template>
```

### State Management: Composables
```typescript
// Use composables for shared state
export const useResume = () => {
  const profile = ref<Profile>()
  // Constitutional compliance built-in
  return { profile }
}
```

## Code Generation Guidelines

### Component Development
1. **Always** use Vue 3 Composition API
2. **Include** TypeScript interfaces for props
3. **Implement** proper accessibility (ARIA, semantic HTML)
4. **Add** responsive design classes
5. **Consider** performance implications

### Example Component Template:
```vue
<template>
  <section 
    class="component-section" 
    role="region" 
    :aria-labelledby="headingId"
  >
    <h2 :id="headingId" class="section-heading">
      {{ title }}
    </h2>
    <!-- Content -->
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  // Other props with types
}

const props = defineProps<Props>()
const headingId = `heading-${props.title.toLowerCase().replace(/\s+/g, '-')}`
</script>

<style scoped>
/* Component-specific styles if needed */
</style>
```

### Content Handling
```typescript
// When working with resume content
interface Experience {
  // Always include verification flag
  verified: boolean
  company: string
  position: string
  // Other properties
}

// Validate content before display
const displayExperience = computed(() => 
  experience.value.filter(exp => exp.verified)
)
```

## Suggestions to Avoid

### ❌ Don't Suggest
- Adding skills without Dave's confirmation
- Complex state management (Vuex/Pinia) for simple site
- Heavy animations that impact performance
- Database solutions (keep it static)
- Expensive AWS services

### ✅ Do Suggest
- Performance optimizations
- Accessibility improvements
- Clean code patterns
- Mobile-responsive solutions
- Static site optimizations

## Testing Patterns

### Unit Tests (Vitest)
```typescript
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

describe('Component', () => {
  it('renders authenticated content only', () => {
    // Test constitutional compliance
  })
})
```

### E2E Tests (Playwright)
```typescript
test('resume displays verified skills only', async ({ page }) => {
  // Test actual user experience
})
```

## File Naming Conventions
- Components: PascalCase (`ExperienceTimeline.vue`)
- Pages: kebab-case (`work-experience.vue`)
- Composables: camelCase (`useResumeData.ts`)
- Content: kebab-case (`work-experience.json`)

## Performance Priorities
1. Static generation over client-side rendering
2. Image optimization (WebP, responsive images)
3. CSS purging and minification
4. Lazy loading for non-critical content
5. Minimal JavaScript bundle size

## Accessibility Requirements
- Semantic HTML structure
- ARIA landmarks and labels
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG AA)

Remember: When in doubt about adding content or skills, always ask Dave for verification first. The constitution's authentic representation principle is non-negotiable.