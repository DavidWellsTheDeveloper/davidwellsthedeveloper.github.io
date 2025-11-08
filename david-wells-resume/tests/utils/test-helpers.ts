// Test utilities for the resume project
import { mount, VueWrapper } from '@vue/test-utils'
import type { ComponentMountingOptions } from '@vue/test-utils'

/**
 * Enhanced mount function with resume-specific defaults
 */
export function mountComponent<T>(
  component: T,
  options: ComponentMountingOptions<T> = {}
): VueWrapper {
  const defaultOptions: ComponentMountingOptions<T> = {
    global: {
      stubs: {
        // Stub Nuxt components that aren't available in test environment
        NuxtLink: {
          template: '<a href="#"><slot /></a>',
          props: ['to'],
        },
        ClientOnly: {
          template: '<div><slot /></div>',
        },
      },
      mocks: {
        // Mock Nuxt composables
        $fetch: vi.fn(),
        navigateTo: vi.fn(),
        useHead: vi.fn(),
      },
    },
    ...options,
  }

  return mount(component, defaultOptions)
}

/**
 * Mock resume data for testing
 */
export const mockResumeData = {
  profile: {
    name: 'Test User',
    title: 'Test Developer',
    email: 'test@example.com',
    phone: '555-0123',
    location: 'Test City, TC',
    summary: 'This is a test summary for unit testing purposes.',
    verified: true,
  },
  experience: [
    {
      id: 'test-1',
      company: 'Test Company',
      position: 'Test Position',
      startDate: '2020-01',
      endDate: '2023-12',
      current: false,
      location: 'Test Location',
      description: 'Test job description',
      achievements: ['Test achievement 1', 'Test achievement 2'],
      technologies: ['JavaScript', 'Vue.js', 'TypeScript'],
      verified: true,
    },
  ],
  skills: {
    technical: [
      { name: 'JavaScript', level: 'Expert', verified: true },
      { name: 'Vue.js', level: 'Expert', verified: true },
      { name: 'TypeScript', level: 'Advanced', verified: true },
    ],
    tools: [
      { name: 'Git', level: 'Expert', verified: true },
      { name: 'VS Code', level: 'Expert', verified: true },
    ],
  },
}

/**
 * Constitutional compliance checker for resume data
 * Ensures all data follows authentic representation principle
 */
export function validateConstitutionalCompliance(data: any): boolean {
  // Check for verified flag on all skills and experience
  const hasVerifiedSkills =
    data.skills?.technical?.every((skill: any) => skill.verified === true) ??
    true

  const hasVerifiedExperience =
    data.experience?.every((exp: any) => exp.verified === true) ?? true

  return hasVerifiedSkills && hasVerifiedExperience
}

/**
 * Helper to wait for async operations in tests
 */
export async function waitForAsync(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 0))
}

/**
 * Helper to simulate user interactions
 */
export const userEvent = {
  async click(element: Element): Promise<void> {
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await waitForAsync()
  },

  async type(element: HTMLInputElement, text: string): Promise<void> {
    element.focus()
    element.value = text
    element.dispatchEvent(new Event('input', { bubbles: true }))
    await waitForAsync()
  },
}

/**
 * Performance testing helper
 */
export function measurePerformance<T>(name: string, fn: () => T): T {
  const start = performance.now()
  const result = fn()
  const end = performance.now()
  console.log(`${name} took ${end - start} milliseconds`)
  return result
}

/**
 * Mock fetch responses for testing
 */
export function mockFetch(responses: Record<string, any>) {
  global.fetch = vi.fn().mockImplementation((url: string) => {
    const response = responses[url]
    if (response) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(response),
        text: () => Promise.resolve(JSON.stringify(response)),
      })
    }
    return Promise.reject(new Error(`No mock response for ${url}`))
  })
}
