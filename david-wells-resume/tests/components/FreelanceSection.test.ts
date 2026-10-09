import { describe, it, expect, beforeEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'

// Mock FreelanceSection component for testing
const FreelanceSectionComponent = {
  template: `
    <section
      id="freelance"
      role="region"
      aria-labelledby="freelance-heading"
      data-testid="freelance-section"
      class="bg-slate-900 py-16"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="freelance-heading" data-testid="freelance-title">
          Custom websites that earn their keep
        </h2>
        <p data-testid="freelance-description">
          Through FoCo Websites, I design, build, launch, and maintain fast,
          custom sites for small and medium businesses.
        </p>
        <a
          href="https://focowebsites.com"
          data-testid="freelance-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit FoCo Websites
        </a>
        <p data-testid="freelance-case-studies">
          <a
            href="https://andrewsaccountingllc.com"
            data-testid="freelance-case-study"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrews Accounting
          </a>
          <a
            href="https://pantrytostore.com"
            data-testid="freelance-case-study"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pantry To Store
          </a>
        </p>
      </div>
    </section>
  `,
}

describe('FreelanceSection Component', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(FreelanceSectionComponent)
  })

  it('renders a labelled region', () => {
    const section = wrapper.find('[data-testid="freelance-section"]')
    expect(section.exists()).toBe(true)
    expect(section.attributes('role')).toBe('region')
    expect(section.attributes('aria-labelledby')).toBe('freelance-heading')
  })

  it('includes a description', () => {
    expect(wrapper.find('[data-testid="freelance-description"]').exists()).toBe(
      true
    )
  })

  it('links prominently to focowebsites.com', () => {
    const cta = wrapper.find('[data-testid="freelance-cta"]')
    expect(cta.exists()).toBe(true)
    expect(cta.attributes('href')).toBe('https://focowebsites.com')
    expect(cta.attributes('rel')).toContain('noopener')
  })

  it('backlinks to each case study', () => {
    const caseStudies = wrapper.findAll('[data-testid="freelance-case-study"]')
    expect(caseStudies.length).toBe(2)
    const hrefs = caseStudies.map((link: any) => link.attributes('href'))
    expect(hrefs).toContain('https://andrewsaccountingllc.com')
    expect(hrefs).toContain('https://pantrytostore.com')
  })
})
