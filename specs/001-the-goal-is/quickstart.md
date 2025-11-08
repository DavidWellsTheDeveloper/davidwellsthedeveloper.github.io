# Quick Start Guide: Digital Resume Development

## Prerequisites

### Required Software
- **Node.js**: v18+ (LTS recommended)
- **npm/yarn**: Latest version
- **Git**: For version control
- **VS Code**: Recommended editor with Vue extensions

### Recommended Extensions
- Vetur or Volar (Vue Language Features)
- ESLint
- Prettier
- Tailwind CSS IntelliSense

## Project Setup

### 1. Initialize Nuxt Project
```bash
# Create new Nuxt project
npx nuxi@latest init david-wells-resume
cd david-wells-resume

# Install dependencies
npm install

# Install additional packages
npm install @nuxtjs/tailwindcss @nuxt/content @nuxtjs/google-fonts
```

### 2. Configure Nuxt
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Fira Code': [400, 500]
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  app: {
    head: {
      title: 'Dave Wells - Digital Resume',
      meta: [
        { name: 'description', content: 'Professional digital resume and portfolio' }
      ]
    }
  }
})
```

### 3. Project Structure
```
david-wells-resume/
├── assets/
│   ├── css/
│   │   └── main.css
│   └── images/
├── components/
│   ├── Navigation.vue
│   ├── Timeline.vue
│   ├── SkillsGrid.vue
│   └── common/
├── content/
│   ├── profile.json
│   ├── experience/
│   ├── skills/
│   └── personal.json
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── experience.vue
│   └── skills.vue
├── static/
│   └── images/
└── nuxt.config.ts
```

## Development Workflow

### 1. Start Development Server
```bash
npm run dev
```
Access at `http://localhost:3000`

### 2. Content Management
- Edit JSON files in `/content` directory
- Use Nuxt Content for markdown pages
- Images go in `/static/images`

### 3. Component Development
```vue
<!-- Example component structure -->
<template>
  <div class="component-name">
    <!-- Template content -->
  </div>
</template>

<script setup lang="ts">
// Composition API setup
import { ref, computed } from 'vue'

// Props and logic
</script>

<style scoped>
/* Component-specific styles */
</style>
```

### 4. Testing
```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Type checking
npm run typecheck
```

## Deployment

### GitHub Pages
```bash
# Build for production
npm run generate

# Deploy to GitHub Pages
npm run deploy:github
```

### AWS S3 + CloudFront
```bash
# Build for production
npm run generate

# Deploy to AWS
npm run deploy:aws
```

## Development Guidelines

### Constitutional Compliance
1. **Verify all skills** before adding to content files
2. **Maintain factual accuracy** in all experience descriptions
3. **Follow clean design** principles in component development
4. **Ensure mobile responsiveness** for all components
5. **Optimize performance** for <3s load times

### Code Standards
- Use TypeScript for type safety
- Follow Vue 3 Composition API patterns
- Implement proper accessibility (ARIA labels, semantic HTML)
- Use Tailwind CSS for consistent styling
- Write descriptive commit messages

### Content Management
- Store content in JSON format for accuracy
- Use meaningful file names and organization
- Optimize images before adding
- Validate all URLs and links

## Troubleshooting

### Common Issues
1. **Build failures**: Check Node.js version compatibility
2. **Styling issues**: Verify Tailwind CSS configuration
3. **Routing problems**: Check file naming in `/pages`
4. **Performance**: Use Lighthouse to identify bottlenecks

### Getting Help
- Nuxt documentation: https://nuxt.com/docs
- Vue documentation: https://vuejs.org/guide/
- Tailwind CSS: https://tailwindcss.com/docs
- Project constitution: `.specify/memory/constitution.md`