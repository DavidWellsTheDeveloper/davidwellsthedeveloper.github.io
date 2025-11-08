export default [
  {
    // Base configuration for all files
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        defineNuxtConfig: 'readonly',
        useHead: 'readonly',
        $fetch: 'readonly',
        navigateTo: 'readonly',
      },
    },
    rules: {
      // Constitutional compliance rules
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'no-var': 'error',

      // Code quality
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      complexity: ['warn', 10],
      'max-depth': ['warn', 4],
      'max-lines-per-function': ['warn', 50],
    },
  },
  {
    // Ignore patterns
    ignores: [
      '.nuxt/',
      '.output/',
      'dist/',
      'node_modules/',
      '*.d.ts',
      'coverage/',
      '.vscode/',
      '.idea/',
    ],
  },
]
