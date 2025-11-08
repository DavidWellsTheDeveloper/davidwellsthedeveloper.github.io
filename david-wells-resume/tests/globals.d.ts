// Type declarations for test environment
import type { MockInstance } from 'vitest'

declare global {
  // Vitest globals
  const vi: typeof import('vitest').vi
  const describe: typeof import('vitest').describe
  const it: typeof import('vitest').it
  const test: typeof import('vitest').test
  const expect: typeof import('vitest').expect
  const beforeEach: typeof import('vitest').beforeEach
  const afterEach: typeof import('vitest').afterEach
  const beforeAll: typeof import('vitest').beforeAll
  const afterAll: typeof import('vitest').afterAll

  // Nuxt globals for testing
  const defineNuxtConfig: MockInstance
  const useHead: MockInstance
  const useFetch: MockInstance
  const navigateTo: MockInstance
  const $fetch: MockInstance

  // Extend global interface
  namespace globalThis {
    var vi: typeof import('vitest').vi
    var defineNuxtConfig: MockInstance
    var useHead: MockInstance
    var useFetch: MockInstance
    var navigateTo: MockInstance
    var $fetch: MockInstance
  }
}

export {}