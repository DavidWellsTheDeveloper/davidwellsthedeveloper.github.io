# Skills Grid Component Contract

## Component Interface

### SkillsGrid
```vue
<template>
  <div class="skills-container" role="region" aria-labelledby="skills-heading">
    <h2 id="skills-heading" class="skills-title">Technical Skills</h2>
    
    <div class="skills-categories">
      <div 
        v-for="category in skillCategories" 
        :key="category.name"
        class="skill-category"
      >
        <h3 class="category-title">{{ category.displayName }}</h3>
        
        <div class="skills-grid" :class="gridClasses">
          <div 
            v-for="skill in category.skills" 
            :key="skill.name"
            class="skill-item"
            :class="skillItemClasses(skill)"
            :title="skillTooltip(skill)"
          >
            <div class="skill-name">{{ skill.name }}</div>
            <div v-if="showProficiency" class="skill-proficiency">
              <div 
                class="proficiency-bar"
                :style="{ width: proficiencyWidth(skill.proficiency) }"
              ></div>
            </div>
            <div v-if="skill.yearsExperience" class="skill-experience">
              {{ skill.yearsExperience }}+ years
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

### Props Contract
```typescript
interface SkillsGridProps {
  categories: SkillCategory[]
  layout?: 'grid' | 'list' | 'tags'
  showProficiency?: boolean
  showExperience?: boolean
  verifiedOnly?: boolean
  maxPerCategory?: number
}

interface SkillsGridEmits {
  'skill-click': (skill: Skill) => void
  'category-toggle': (category: string, expanded: boolean) => void
}
```

## Visual Requirements

### Grid Layout
- Responsive grid (2-4 columns based on screen size)
- Equal-height cards within each category
- Clear visual separation between categories
- Consistent spacing and alignment

### Skill Display
- Skill name prominently displayed
- Optional proficiency indicator (progress bar or badges)
- Years of experience if available
- Verified skills have visual indicator

### Category Organization
- Programming Languages
- Frameworks & Libraries  
- Tools & Platforms
- Databases
- Cloud Services
- Methodologies
- Soft Skills

## Behavior Requirements

### Responsive Design
- Desktop: Multi-column grid
- Tablet: 2-column layout
- Mobile: Single column with horizontal scroll for tags

### Interaction
- Hover effects for skill items
- Optional click for skill details
- Category collapse/expand functionality

### Accessibility
- Semantic heading structure
- ARIA labels for proficiency indicators
- Keyboard navigation support
- High contrast mode compatibility

### Performance
- Efficient rendering for large skill sets
- Smooth animations
- No layout shift during load

## Constitutional Compliance

### Verified Skills Only
- Only display skills with `verified: true`
- Visual indicator for endorsements
- No aspirational or learning skills

### Accuracy Requirements
- Experience years must be accurate
- Proficiency levels realistic
- No exaggerated capabilities

## Test Scenarios

1. **Grid Rendering**
   - All categories display correctly
   - Skills organized by category
   - Responsive layout works

2. **Proficiency Display**
   - Progress bars accurate to skill level
   - Experience years shown correctly
   - Verified skills marked

3. **Category Organization**
   - Logical skill groupings
   - Consistent category naming
   - No skills in wrong categories

4. **Constitutional Check**
   - Only verified skills displayed
   - No unconfirmed capabilities
   - Accurate experience representation