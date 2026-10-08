export default defineAppConfig({
  // Site configuration
  site: {
    name: 'David Wells - Senior Software Engineer & Scrum Master',
    description: 'Portfolio of David Wells, a Senior Software Engineer and Scrum Master with 9 years of experience in scalable application development, data platforms, and team leadership.',
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
      defaultVariants: {}
    },
    // Add custom container max width
    container: {
      base: 'mx-auto',
      padding: 'px-4 sm:px-6 lg:px-8',
      constrained: 'max-w-7xl'
    }
  }
})
