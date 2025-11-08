// Global test setup for Vitest
import { vi } from 'vitest'

// Make vi globally available
global.vi = vi

// Mock Nuxt globals
global.defineNuxtConfig = vi.fn()
global.useHead = vi.fn()
global.useFetch = vi.fn()
global.navigateTo = vi.fn()
global.$fetch = vi.fn()

// Mock console methods in production tests
if (process.env.NODE_ENV === 'test') {
  global.console = {
    ...console,
    // Keep error and warn for debugging
    log: vi.fn(),
    debug: vi.fn(),
    info: vi.fn(),
  }
}

// Constitutional compliance: Ensure tests are clean and fast
beforeEach(() => {
  // Clear all mocks before each test
  vi.clearAllMocks()
})

afterEach(() => {
  // Clean up after each test
  vi.restoreAllMocks()
})
