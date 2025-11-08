/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    // Test environment
    environment: 'happy-dom',

    // Global test settings
    globals: true,

    // Setup files
    setupFiles: ['./tests/setup.ts'],

    // File patterns
    include: [
      'tests/**/*.{test,spec}.{js,ts}',
      'components/**/*.{test,spec}.{js,ts}',
      'composables/**/*.{test,spec}.{js,ts}',
      'utils/**/*.{test,spec}.{js,ts}',
      'pages/**/*.{test,spec}.{js,ts}',
      'layouts/**/*.{test,spec}.{js,ts}',
    ],
    exclude: ['node_modules', '.nuxt', '.output', 'dist', 'coverage'],

    // Coverage settings
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        '.nuxt/',
        '.output/',
        'dist/',
        'coverage/',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        '**/types.ts',
        'tests/',
        '**/*.test.{js,ts}',
        '**/*.spec.{js,ts}',
      ],
      // Constitutional compliance: Ensure good test coverage
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },

    // Performance settings
    testTimeout: 10000,
    hookTimeout: 10000,

    // Reporter settings
    reporters: process.env.CI ? ['junit'] : ['verbose'],
    outputFile: {
      junit: './test-results/junit.xml',
    },

    // Constitutional principle: Clean, fast tests
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
        maxThreads: 4,
        minThreads: 1,
      },
    },
  },

  // Resolve aliases (same as Nuxt)
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
      '~': resolve(__dirname, '.'),
      '@@': resolve(__dirname, '.'),
      '~~': resolve(__dirname, '.'),
      assets: resolve(__dirname, './assets'),
      public: resolve(__dirname, './public'),
    },
  },

  // Define global constants for tests
  define: {
    'process.env.NODE_ENV': JSON.stringify('test'),
  },
})
