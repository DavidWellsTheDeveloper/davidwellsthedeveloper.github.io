# Development Constitution: Digital Resume Project

## Core Development Principles (NON-NEGOTIABLE)

### I. Code Quality & Architecture
- **ALWAYS** use TypeScript interfaces for type safety
- **ALWAYS** implement proper error handling and SSR compatibility
- **ONLY** use Vue 3 Composition API patterns
- **NEVER** use inline styles - prefer Tailwind utility classes

### II. Clean Design Implementation
- Prioritize minimalist, elegant component solutions
- Use whitespace and visual hierarchy effectively
- Maintain consistent component structure patterns
- Choose simplicity over complexity in all implementations

### III. Performance & User Experience
- Optimize for fast loading (target <3s)
- Ensure mobile-first responsive design patterns
- Implement smooth navigation and interactions
- Test accessibility compliance (WCAG AA)

### IV. Development Workflow
- Run tests after every significant change
- Maintain 100% test coverage for constitutional compliance
- Use semantic commit messages
- Keep components focused and single-responsibility

### V. Deployment Standards
- Generate static files optimized for AWS S3 and GitHub Pages
- Include automated build scripts and validation
- Optimize for cost-effective hosting
- Ensure production-ready performance

## Tech Stack Standards

### Framework: Nuxt.js 3
```typescript
// Preferred configuration patterns
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  nitro: { prerender: { routes: ['/'] } },
  css: ['~/assets/css/main.css']
})
```

### Component Patterns
```vue
<template>
  <section 
    class="component-section" 
    role="region" 
    :aria-labelledby="headingId"
  >
    <!-- Semantic HTML structure -->
  </section>
</template>

<script setup lang="ts">
// TypeScript interfaces for all props
interface Props {
  title: string
  data: VerifiedData
}

const props = defineProps<Props>()
// Reactive data with proper SSR handling
</script>
```

### State Management: Composables
```typescript
// Use composables for shared state
export const useFeatureData = () => {
  const data = ref<FeatureData>()
  
  // Constitutional compliance validation
  const isVerified = computed(() => data.value?.verified === true)
  
  return { data, isVerified }
}
```

## Code Generation Standards

### Component Development
1. **TypeScript First** - All components use strict typing
2. **Accessibility Built-in** - ARIA labels, semantic HTML, keyboard navigation
3. **Responsive by Default** - Mobile-first Tailwind classes
4. **Performance Optimized** - Lazy loading, minimal JavaScript
5. **Test Coverage** - Unit tests for all business logic

### Error Prevention
- **SSR Compatibility** - Safe property access with fallbacks
- **Null Safety** - Optional chaining and computed properties
- **Type Safety** - Strict TypeScript configurations
- **Validation** - Runtime checks for critical data

## Testing Requirements

### Constitutional Compliance Tests
```typescript
describe('Constitutional Compliance', () => {
  test('enforces clean design principles', () => {
    // Verify component follows design standards
  })
  
  test('optimizes for fast loading', () => {
    // Performance benchmarks
  })
  
  test('ensures deployment readiness', () => {
    // Production build validation
  })
})
```

### Coverage Standards
- **100% Constitutional Compliance** - All components pass constitutional tests
- **90%+ Unit Coverage** - Business logic thoroughly tested
- **Integration Tests** - Critical user flows validated
- **Performance Tests** - Loading time benchmarks

## File Organization Standards

```
/components/           # Reusable UI components
/composables/         # Shared reactive logic
/pages/               # Route-based pages
/assets/css/          # Global styles
/tests/               # Test files mirroring structure
/docs/                # Constitutional documents
```

## Development Commands

```bash
# Development workflow
npm run dev          # Development server
npm run test         # Run test suite
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Code quality checks
```

## Quality Gates

### Before Any Commit
1. ✅ All tests passing (133/133)
2. ✅ TypeScript compilation successful
3. ✅ Constitutional compliance verified
4. ✅ Performance benchmarks met

### Before Any Deployment
1. ✅ Production build successful
2. ✅ Static generation working
3. ✅ Accessibility compliance verified
4. ✅ Performance optimization complete

## Suggestions to Avoid

### ❌ Don't Implement
- Complex state management for simple static site
- Heavy animations that impact performance
- Database solutions (keep it static)
- Expensive cloud services

### ✅ Do Implement
- Performance optimizations
- Accessibility improvements
- Clean code patterns
- Mobile-responsive solutions
- Static site optimizations

## Emergency Procedures

### SSR Errors
1. Check for undefined property access
2. Add safe fallbacks with optional chaining
3. Verify composable returns reactive data
4. Test with `npm run build`

### Performance Issues
1. Analyze bundle size with `npm run analyze`
2. Optimize images and assets
3. Implement lazy loading
4. Review Lighthouse scores

### Test Failures
1. Run tests individually to isolate
2. Check constitutional compliance
3. Verify TypeScript types
4. Update test expectations if valid

This constitution focuses on **development practices** rather than content validation, allowing us to maintain high code quality without constantly revisiting verified resume data.