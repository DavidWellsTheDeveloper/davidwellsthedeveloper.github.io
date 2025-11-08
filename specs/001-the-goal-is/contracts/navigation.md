# Navigation Contract

## Component Interface

### NavigationMenu
```vue
<template>
  <nav :class="navClasses" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <RouterLink to="/" class="nav-logo" aria-label="Home">
        {{ profile.name }}
      </RouterLink>
      
      <ul class="nav-menu" :class="{ 'nav-menu--open': isMenuOpen }">
        <li v-for="item in menuItems" :key="item.path">
          <RouterLink 
            :to="item.path" 
            :class="navItemClasses"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
      
      <button 
        class="nav-toggle"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger"></span>
      </button>
    </div>
  </nav>
</template>
```

### Props Contract
```typescript
interface NavigationProps {
  variant?: 'primary' | 'minimal'
  fixed?: boolean
  transparentOnTop?: boolean
}

interface NavigationEmits {
  'menu-toggle': (isOpen: boolean) => void
  'navigation-change': (path: string) => void
}
```

## Behavior Requirements

### Desktop Navigation
- Horizontal menu bar with text links
- Active page indicator (visual highlight)
- Smooth hover transitions
- Logo/name links to homepage

### Mobile Navigation  
- Hamburger menu icon (≤ 768px width)
- Full-screen overlay menu when open
- Touch-friendly target sizes (44px minimum)
- Swipe-to-close functionality

### Accessibility
- ARIA landmarks and labels
- Keyboard navigation support
- Focus indicators
- Screen reader announcements

### Performance
- No layout shift during load
- Instant navigation (client-side routing)
- Lazy-loaded mobile menu styles

## Test Scenarios

1. **Desktop Menu Display**
   - All menu items visible horizontally
   - Active page highlighted
   - Logo clickable to home

2. **Mobile Menu Toggle**
   - Hamburger menu appears ≤768px
   - Menu opens/closes on tap
   - Overlay closes on outside tap

3. **Keyboard Navigation**
   - Tab through all menu items
   - Enter/Space activates links
   - Escape closes mobile menu

4. **Screen Reader Support**
   - Navigation landmarks announced
   - Menu state changes announced
   - Link purposes clear