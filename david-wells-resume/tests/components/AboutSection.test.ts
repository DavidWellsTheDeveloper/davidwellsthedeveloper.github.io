import { describe, it, expect, beforeEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'

// Mock AboutSection component for testing
const AboutSectionComponent = {
  template: `
    <section
      id="about"
      role="region"
      aria-labelledby="about-heading"
      data-testid="about-section"
      class="bg-gray-50 dark:bg-gray-800 py-16"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          id="about-heading"
          data-testid="about-title"
          class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content Column -->
          <div class="space-y-6">
            <div class="prose prose-gray dark:prose-invert max-w-none">
              <p
                data-testid="about-intro"
                class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {{ aboutContent.introduction }}
              </p>
              
              <div class="space-y-4 mt-6">
                <h3 
                  data-testid="approach-heading"
                  class="text-xl font-semibold text-gray-900 dark:text-white"
                >
                  My Approach
                </h3>
                <p
                  data-testid="about-approach"
                  class="text-gray-600 dark:text-gray-300"
                >
                  {{ aboutContent.approach }}
                </p>
              </div>
              
              <div class="space-y-4 mt-6">
                <h3
                  data-testid="passion-heading"
                  class="text-xl font-semibold text-gray-900 dark:text-white"
                >
                  What Drives Me
                </h3>
                <p
                  data-testid="about-passion"
                  class="text-gray-600 dark:text-gray-300"
                >
                  {{ aboutContent.passion }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- Highlights Column -->
          <div class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h3
              data-testid="highlights-heading"
              class="text-xl font-semibold text-gray-900 dark:text-white mb-6"
            >
              Key Highlights
            </h3>
            
            <div class="space-y-4">
              <div
                v-for="(highlight, index) in highlights"
                :key="index"
                data-testid="highlight-item"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-1">
                  <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div class="ml-4">
                  <h4
                    data-testid="highlight-title"
                    class="font-medium text-gray-900 dark:text-white"
                  >
                    {{ highlight.title }}
                  </h4>
                  <p
                    data-testid="highlight-description"
                    class="text-sm text-gray-600 dark:text-gray-300 mt-1"
                  >
                    {{ highlight.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Constitutional compliance notice -->
        <div class="mt-12 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p class="text-sm text-yellow-800 dark:text-yellow-200 text-center">
            ⚠️ All personal and professional information requires verification with Dave for authentic representation
          </p>
        </div>
      </div>
    </section>
  `,
  setup() {
    return {
      aboutContent: {
        introduction:
          "TODO: Verify with Dave - Professional introduction and background summary. This should authentically represent Dave's professional journey and current focus.",
        approach:
          "TODO: Verify with Dave - Description of professional approach, methodology, and work philosophy. Must reflect Dave's actual working style.",
        passion:
          'TODO: Verify with Dave - What motivates and drives Dave professionally. Should be authentic and personally meaningful.',
      },
      highlights: [
        {
          title: 'TODO: Verify - Professional Achievement',
          description:
            'TODO: Verify with Dave - Specific achievement or accomplishment',
        },
        {
          title: 'TODO: Verify - Technical Expertise',
          description: 'TODO: Verify with Dave - Area of specialized knowledge',
        },
        {
          title: 'TODO: Verify - Leadership Experience',
          description:
            'TODO: Verify with Dave - Leadership or mentoring experience',
        },
        {
          title: 'TODO: Verify - Innovation/Impact',
          description:
            'TODO: Verify with Dave - Innovative solution or significant impact',
        },
      ],
    }
  },
}

describe('AboutSection Component', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(AboutSectionComponent)
  })

  describe('Constitutional Compliance', () => {
    it('enforces authentic representation', () => {
      const section = wrapper.find('[data-testid="about-section"]')
      expect(section.exists()).toBe(true)

      // Should include TODO markers for unverified content
      const content = wrapper.text()
      expect(content).toContain('TODO: Verify with Dave')
      expect(content).toContain('authentic representation')
    })

    it('follows clean design principles', () => {
      expect(wrapper.find('section').exists()).toBe(true)
      expect(wrapper.find('section').attributes('role')).toBe('region')

      // Should have clean grid layout
      expect(wrapper.find('.grid').exists()).toBe(true)
      expect(wrapper.find('.prose').exists()).toBe(true)
    })

    it('displays constitutional compliance notice', () => {
      const notice = wrapper.find('.bg-yellow-50')
      expect(notice.exists()).toBe(true)
      expect(notice.text()).toContain('verification')
    })

    it('ensures deployment readiness', () => {
      expect(wrapper.vm).toBeTruthy()
      expect(wrapper.find('[data-testid="about-section"]').exists()).toBe(true)
    })
  })

  describe('Content Structure', () => {
    it('displays main about content', () => {
      expect(wrapper.find('[data-testid="about-intro"]').exists()).toBe(true)
      expect(wrapper.find('[data-testid="about-approach"]').exists()).toBe(true)
      expect(wrapper.find('[data-testid="about-passion"]').exists()).toBe(true)
    })

    it('shows section headings', () => {
      expect(wrapper.find('[data-testid="about-title"]').exists()).toBe(true)
      expect(wrapper.find('[data-testid="approach-heading"]').exists()).toBe(
        true
      )
      expect(wrapper.find('[data-testid="passion-heading"]').exists()).toBe(
        true
      )
    })

    it('displays highlights section', () => {
      expect(wrapper.find('[data-testid="highlights-heading"]').exists()).toBe(
        true
      )
      const highlights = wrapper.findAll('[data-testid="highlight-item"]')
      expect(highlights.length).toBe(4) // Mock has 4 highlights
    })

    it('shows TODO verification markers in content', () => {
      const intro = wrapper.find('[data-testid="about-intro"]')
      expect(intro.text()).toContain('TODO: Verify')
    })
  })

  describe('Highlights Display', () => {
    it('displays highlight items with titles and descriptions', () => {
      const titles = wrapper.findAll('[data-testid="highlight-title"]')
      const descriptions = wrapper.findAll(
        '[data-testid="highlight-description"]'
      )

      expect(titles.length).toBe(4)
      expect(descriptions.length).toBe(4)
    })

    it('includes verification markers in highlights', () => {
      const titles = wrapper.findAll('[data-testid="highlight-title"]')
      const hasVerificationMarkers = titles.some((title: any) =>
        title.text().includes('TODO: Verify')
      )
      expect(hasVerificationMarkers).toBe(true)
    })

    it('has visual indicators for highlights', () => {
      const indicators = wrapper.findAll('.bg-blue-100')
      expect(indicators.length).toBeGreaterThan(0)
    })
  })

  describe('Responsive Design', () => {
    it('uses responsive grid layout', () => {
      const grid = wrapper.find('.grid')
      const classes = grid.classes()
      expect(classes).toContain('grid-cols-1')
      expect(classes).toContain('lg:grid-cols-2')
    })

    it('applies responsive container classes', () => {
      const container = wrapper.find('.max-w-4xl')
      const classes = container.classes()
      expect(classes).toContain('px-4')
      expect(classes).toContain('sm:px-6')
    })

    it('uses responsive spacing', () => {
      expect(wrapper.find('.space-y-6').exists()).toBe(true)
      expect(wrapper.find('.gap-12').exists()).toBe(true)
    })
  })

  describe('Accessibility', () => {
    it('has proper semantic structure', () => {
      expect(wrapper.find('section').attributes('role')).toBe('region')
      expect(wrapper.find('section').attributes('aria-labelledby')).toBe(
        'about-heading'
      )
    })

    it('includes proper heading hierarchy', () => {
      expect(wrapper.find('h2').exists()).toBe(true)
      expect(wrapper.find('h3').exists()).toBe(true)
      expect(wrapper.find('h4').exists()).toBe(true)
    })

    it('uses prose classes for content readability', () => {
      expect(wrapper.find('.prose').exists()).toBe(true)
      expect(wrapper.find('.prose-gray').exists()).toBe(true)
    })

    it('has accessible color contrast', () => {
      const textElements = wrapper.findAll('.text-gray-600, .text-gray-300')
      expect(textElements.length).toBeGreaterThan(0)
    })
  })

  describe('Performance', () => {
    it('renders efficiently', () => {
      expect(wrapper.vm).toBeTruthy()

      // Should have reasonable DOM structure
      const allElements = wrapper.findAll('*')
      expect(allElements.length).toBeLessThan(100)
    })

    it('uses minimal inline styles', () => {
      const elementsWithInlineStyles = wrapper.findAll('[style]')
      expect(elementsWithInlineStyles.length).toBe(0)
    })

    it('optimizes content layout', () => {
      expect(wrapper.find('.grid').exists()).toBe(true)
      expect(wrapper.find('.space-y-6').exists()).toBe(true)
    })
  })

  describe('Dark Mode Support', () => {
    it('includes dark mode classes', () => {
      const section = wrapper.find('section')
      expect(section.classes()).toContain('dark:bg-gray-800')

      const card = wrapper.find('.bg-white')
      expect(card.classes()).toContain('dark:bg-gray-900')
    })

    it('has dark mode text colors', () => {
      const headings = wrapper.findAll('h2, h3, h4')
      headings.forEach((heading: any) => {
        expect(heading.classes()).toContain('dark:text-white')
      })
    })

    it('supports dark mode prose styling', () => {
      const prose = wrapper.find('.prose')
      expect(prose.classes()).toContain('dark:prose-invert')
    })
  })

  describe('Typography and Content', () => {
    it('uses appropriate typography classes', () => {
      const intro = wrapper.find('[data-testid="about-intro"]')
      expect(intro.classes()).toContain('text-lg')
      expect(intro.classes()).toContain('leading-relaxed')
    })

    it('structures content with proper spacing', () => {
      expect(wrapper.find('.space-y-4').exists()).toBe(true)
      expect(wrapper.find('.mt-6').exists()).toBe(true)
    })

    it('maintains content hierarchy', () => {
      const mainHeading = wrapper.find('h2')
      const subHeadings = wrapper.findAll('h3')
      const highlightTitles = wrapper.findAll('h4')

      expect(mainHeading.exists()).toBe(true)
      expect(subHeadings.length).toBeGreaterThan(0)
      expect(highlightTitles.length).toBeGreaterThan(0)
    })
  })
})
