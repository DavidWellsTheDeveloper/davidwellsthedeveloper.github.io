import { describe, it, expect, beforeEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import ProjectsSection from '../../components/ProjectsSection.vue'

let wrapper: VueWrapper

describe('ProjectsSection Component', () => {
  beforeEach(() => {
    wrapper = mount(ProjectsSection)
  })

  it('renders a labelled region', () => {
    const section = wrapper.find('[data-testid="projects-section"]')
    expect(section.exists()).toBe(true)
    expect(section.attributes('id')).toBe('projects')
    expect(section.attributes('aria-labelledby')).toBe('projects-heading')
  })

  it('renders the heading', () => {
    expect(wrapper.find('[data-testid="projects-title"]').text()).toContain(
      'Projects'
    )
  })

  it('renders three project cards', () => {
    const cards = wrapper.findAll('[data-testid="project-card"]')
    expect(cards.length).toBe(3)
  })

  it('renders all project names', () => {
    const names = wrapper
      .findAll('[data-testid="project-name"]')
      .map(n => n.text())
    expect(names).toEqual(
      expect.arrayContaining([
        'Nonprofit Event Platform',
        'Pantry To Store',
        'Andrews Accounting',
      ])
    )
  })

  it('treats the headless CMS and Pantry To Store as separate projects', () => {
    const pantryCard = wrapper
      .findAll('[data-testid="project-card"]')
      .find(
        c => c.find('[data-testid="project-name"]').text() === 'Pantry To Store'
      )
    const andrewsCard = wrapper
      .findAll('[data-testid="project-card"]')
      .find(
        c =>
          c.find('[data-testid="project-name"]').text() === 'Andrews Accounting'
      )
    expect(pantryCard).toBeDefined()
    expect(andrewsCard).toBeDefined()
    // Pantry To Store must not reference the headless CMS
    expect(
      pantryCard!.find('[data-testid="project-summary"]').text()
    ).not.toContain('headless CMS')
    // The headless CMS belongs to the Andrews Accounting project
    expect(
      andrewsCard!.find('[data-testid="project-summary"]').text()
    ).toContain('headless CMS')
  })

  it('does not render a standalone Headless CMS project card', () => {
    const names = wrapper
      .findAll('[data-testid="project-name"]')
      .map(n => n.text())
    expect(names).not.toContain('Headless CMS')
  })

  it('links live projects to their public sites', () => {
    const links = wrapper.findAll('[data-testid="project-link"]')
    const hrefs = links.map(l => l.attributes('href'))
    expect(hrefs).toContain('https://pantrytostore.com')
    expect(hrefs).toContain('https://andrewsaccountingllc.com')
    expect(hrefs).toContain('https://focowebsites.com')
  })

  it('shows technology stacks for each project', () => {
    const cards = wrapper.findAll('[data-testid="project-card"]')
    const djangoCard = cards.find(c =>
      c.find('[data-testid="project-name"]').text().includes('Nonprofit')
    )
    const chips = djangoCard!.find('[data-testid="project-stack"]').text()
    expect(chips).toContain('Django')
    expect(chips).toContain('Stripe')
  })
})
