export default defineAppConfig({
  // Site configuration
  site: {
    name: 'My Nuxt UI Website',
    description: 'A static website built with Nuxt UI',
  },
  
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'teal',
      secondary: 'cyan',
      success: 'emerald',
      info: 'sky',
      neutral: 'zinc',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    },
    // Add custom container max width
    container: {
      base: 'mx-auto',
      padding: 'px-4 sm:px-6 lg:px-8',
      constrained: 'max-w-7xl'
    }
  }
})
