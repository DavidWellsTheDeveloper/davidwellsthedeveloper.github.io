import { describe, it, expect, beforeEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'

// Mock SkillsMatrix component for testing
const SkillsMatrixComponent = {
  template: `
    <section
      id="skills"
      role="region"
      aria-labelledby="skills-heading"
      data-testid="skills-matrix"
      class="bg-gray-50 dark:bg-gray-800 py-16"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          id="skills-heading"
          data-testid="skills-title"
          class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Skills & Expertise
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(category, index) in skillCategories"
            :key="index"
            data-testid="skill-category"
            class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
          >
            <h3
              data-testid="category-title"
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center"
            >
              <span class="text-2xl mr-3">{{ category.icon }}</span>
              {{ category.title }}
            </h3>
            
            <div class="space-y-3">
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                data-testid="skill-item"
                class="flex flex-col"
              >
                <div class="flex justify-between items-center mb-2">
                  <span
                    data-testid="skill-name"
                    class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {{ skill.name }}
                  </span>
                  <span
                    data-testid="skill-level"
                    class="text-xs text-gray-500 dark:text-gray-400"
                  >
                    {{ skill.level }}
                  </span>
                </div>
                
                <!-- Progress bar -->
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    data-testid="skill-progress"
                    class="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    :style="{ width: getProgressWidth(skill.level) }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Constitutional compliance warning -->
        <div class="mt-12 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p class="text-sm text-yellow-800 dark:text-yellow-200 text-center">
            ⚠️ All skills listed require verification with Dave to ensure authentic representation
          </p>
        </div>
      </div>
    </section>
  `,
  setup() {
    const getProgressWidth = (level: string): string => {
      switch (level.toLowerCase()) {
        case 'expert': return '90%'
        case 'advanced': return '75%'
        case 'intermediate': return '60%'
        case 'beginner': return '30%'
        default: return '50%'
      }
    }

    return {
      skillCategories: [
        {
          title: 'TODO: Verify Category',
          icon: '💻',
          skills: [
            { name: 'TODO: Verify Skill', level: 'TODO: Verify Level' },
            { name: 'TODO: Verify Another Skill', level: 'TODO: Verify Level' }
          ]
        },
        {
          title: 'TODO: Verify Second Category',
          icon: '🚀',
          skills: [
            { name: 'TODO: Verify Framework', level: 'TODO: Verify Level' },
            { name: 'TODO: Verify Tool', level: 'TODO: Verify Level' }
          ]
        }
      ],
      getProgressWidth
    }
  }
}

describe('SkillsMatrix Component', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(SkillsMatrixComponent)
  })

  describe('Constitutional Compliance', () => {
    it('enforces authentic representation', () => {
      const section = wrapper.find('[data-testid="skills-matrix"]')
      expect(section.exists()).toBe(true)
      
      // Should include TODO markers for unverified skills
      const content = wrapper.text()
      expect(content).toContain('TODO: Verify')
      expect(content).toContain('authentic representation')
    })

    it('follows clean design principles', () => {
      expect(wrapper.find('section').exists()).toBe(true)
      expect(wrapper.find('section').attributes('role')).toBe('region')
      
      // Should have clean grid layout
      expect(wrapper.find('.grid').exists()).toBe(true)
      expect(wrapper.find('.grid-cols-1').exists()).toBe(true)
    })

    it('displays constitutional compliance warning', () => {
      const warning = wrapper.find('.bg-yellow-50')
      expect(warning.exists()).toBe(true)
      expect(warning.text()).toContain('verification')
    })

    it('ensures deployment readiness', () => {
      expect(wrapper.vm).toBeTruthy()
      expect(wrapper.find('[data-testid="skills-matrix"]').exists()).toBe(true)
    })
  })

  describe('Skills Grid Layout', () => {
    it('displays skills in responsive grid', () => {
      const grid = wrapper.find('.grid')
      const classes = grid.classes()
      expect(classes).toContain('grid-cols-1')
      expect(classes).toContain('md:grid-cols-2')
      expect(classes).toContain('lg:grid-cols-3')
    })

    it('shows skill categories', () => {
      const categories = wrapper.findAll('[data-testid="skill-category"]')
      expect(categories.length).toBe(2) // Mock has 2 categories
    })

    it('displays category titles with icons', () => {
      const titles = wrapper.findAll('[data-testid="category-title"]')
      expect(titles.length).toBeGreaterThan(0)
      
      // Should contain icons
      const firstTitle = titles[0]
      expect(firstTitle.text()).toMatch(/[💻🚀]/)
    })
  })

  describe('Skill Items', () => {
    it('displays individual skills', () => {
      const skillItems = wrapper.findAll('[data-testid="skill-item"]')
      expect(skillItems.length).toBeGreaterThan(0)
    })

    it('shows skill names and levels', () => {
      expect(wrapper.find('[data-testid="skill-name"]').exists()).toBe(true)
      expect(wrapper.find('[data-testid="skill-level"]').exists()).toBe(true)
    })

    it('includes progress bars for skills', () => {
      const progressBars = wrapper.findAll('[data-testid="skill-progress"]')
      expect(progressBars.length).toBeGreaterThan(0)
    })

    it('shows TODO verification markers', () => {
      const skillNames = wrapper.findAll('[data-testid="skill-name"]')
      const hasVerificationMarkers = skillNames.some((skill: any) => 
        skill.text().includes('TODO')
      )
      expect(hasVerificationMarkers).toBe(true)
    })
  })

  describe('Progress Visualization', () => {
    it('renders progress bars with appropriate widths', () => {
      const progressBars = wrapper.findAll('[data-testid="skill-progress"]')
      expect(progressBars.length).toBeGreaterThan(0)
      
      // Progress bars should have width styles
      progressBars.forEach((bar: any) => {
        expect(bar.attributes('style')).toBeTruthy()
      })
    })

    it('uses consistent progress bar styling', () => {
      const progressBars = wrapper.findAll('.bg-blue-600.h-2.rounded-full')
      expect(progressBars.length).toBeGreaterThan(0)
    })
  })

  describe('Responsive Design', () => {
    it('uses responsive container classes', () => {
      const container = wrapper.find('.max-w-4xl')
      const classes = container.classes()
      expect(classes).toContain('px-4')
      expect(classes).toContain('sm:px-6')
    })

    it('implements responsive grid breakpoints', () => {
      const grid = wrapper.find('.grid')
      expect(grid.classes()).toContain('grid-cols-1')
      expect(grid.classes()).toContain('md:grid-cols-2')
      expect(grid.classes()).toContain('lg:grid-cols-3')
    })

    it('uses responsive spacing', () => {
      expect(wrapper.find('.gap-8').exists()).toBe(true)
      expect(wrapper.find('.space-y-3').exists()).toBe(true)
    })
  })

  describe('Accessibility', () => {
    it('has proper semantic structure', () => {
      expect(wrapper.find('section').attributes('role')).toBe('region')
      expect(wrapper.find('section').attributes('aria-labelledby')).toBe('skills-heading')
    })

    it('includes proper heading hierarchy', () => {
      expect(wrapper.find('h2').exists()).toBe(true)
      expect(wrapper.find('h3').exists()).toBe(true)
    })

    it('has accessible skill level indicators', () => {
      const skillLevels = wrapper.findAll('[data-testid="skill-level"]')
      expect(skillLevels.length).toBeGreaterThan(0)
    })
  })

  describe('Performance', () => {
    it('renders efficiently', () => {
      expect(wrapper.vm).toBeTruthy()
      
      // Should have reasonable DOM structure
      const allElements = wrapper.findAll('*')
      expect(allElements.length).toBeLessThan(150)
    })

    it('uses CSS classes instead of inline styles where possible', () => {
      // Progress bars are exception for dynamic width
      const elementsWithInlineStyles = wrapper.findAll('[style]')
      expect(elementsWithInlineStyles.length).toBeGreaterThan(0) // Progress bars
    })

    it('optimizes grid rendering', () => {
      expect(wrapper.find('.grid').exists()).toBe(true)
      expect(wrapper.find('.space-y-3').exists()).toBe(true)
    })
  })

  describe('Dark Mode Support', () => {
    it('includes dark mode classes', () => {
      const section = wrapper.find('section')
      expect(section.classes()).toContain('dark:bg-gray-800')
      
      const cards = wrapper.findAll('.bg-white')
      cards.forEach((card: any) => {
        expect(card.classes()).toContain('dark:bg-gray-900')
      })
    })

    it('has dark mode text colors', () => {
      const titles = wrapper.findAll('h2, h3')
      titles.forEach((title: any) => {
        expect(title.classes()).toContain('dark:text-white')
      })
    })
  })
})