// Basic test to verify Vitest setup
import { describe, it, expect } from 'vitest'
import {
  mountComponent,
  mockResumeData,
  validateConstitutionalCompliance,
} from './utils/test-helpers'

describe('Test Setup Verification', () => {
  it('should have Vitest working correctly', () => {
    expect(true).toBe(true)
  })

  it('should validate constitutional compliance', () => {
    const isCompliant = validateConstitutionalCompliance(mockResumeData)
    expect(isCompliant).toBe(true)
  })

  it('should have mock resume data with verified flags', () => {
    expect(mockResumeData.profile.verified).toBe(true)
    expect(mockResumeData.experience[0].verified).toBe(true)
    expect(mockResumeData.skills.technical[0].verified).toBe(true)
  })

  it('should fail constitutional compliance for unverified data', () => {
    const badData = {
      skills: {
        technical: [{ name: 'JavaScript', level: 'Expert', verified: false }],
      },
      experience: [],
    }

    const isCompliant = validateConstitutionalCompliance(badData)
    expect(isCompliant).toBe(false)
  })
})

describe('Performance Requirements', () => {
  it('should complete basic operations within performance targets', () => {
    const start = performance.now()

    // Simulate some work
    const data = JSON.parse(JSON.stringify(mockResumeData))
    const isValid = validateConstitutionalCompliance(data)

    const end = performance.now()
    const duration = end - start

    // Constitutional requirement: Fast operations
    expect(duration).toBeLessThan(100) // Should complete in under 100ms
    expect(isValid).toBe(true)
  })
})
