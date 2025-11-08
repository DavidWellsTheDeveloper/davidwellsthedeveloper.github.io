# Timeline Component Contract

## Component Interface

### ExperienceTimeline
```vue
<template>
  <div class="timeline-container" role="region" aria-labelledby="timeline-heading">
    <h2 id="timeline-heading" class="timeline-title">Work Experience</h2>
    
    <div class="timeline">
      <div 
        v-for="(item, index) in timelineItems" 
        :key="item.id"
        class="timeline-item"
        :class="timelineItemClasses(item, index)"
      >
        <div class="timeline-marker">
          <div class="timeline-dot" :class="{ 'timeline-dot--current': item.isCurrent }"></div>
          <div v-if="!isLastItem(index)" class="timeline-line"></div>
        </div>
        
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="timeline-position">{{ item.position }}</h3>
            <div class="timeline-company">{{ item.company }}</div>
            <div class="timeline-dates">
              {{ formatDateRange(item.startDate, item.endDate) }}
            </div>
          </div>
          
          <div class="timeline-body">
            <p class="timeline-description">{{ item.description }}</p>
            
            <ul v-if="item.achievements.length" class="timeline-achievements">
              <li v-for="achievement in item.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
            
            <div v-if="item.technologies.length" class="timeline-technologies">
              <span 
                v-for="tech in item.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
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
interface TimelineProps {
  items: Experience[]
  variant?: 'detailed' | 'compact'
  showTechnologies?: boolean
  maxItems?: number
}

interface TimelineEmits {
  'item-click': (item: Experience) => void
  'expand-toggle': (itemId: string, expanded: boolean) => void
}
```

## Visual Requirements

### Timeline Structure
- Vertical timeline with connecting line
- Circular markers for each position
- Current position highlighted with different color
- Responsive layout (horizontal on mobile if needed)

### Content Display
- Company name and position prominently displayed
- Date ranges clearly formatted
- Description paragraph with achievements list
- Technology tags visually distinct

### Responsive Behavior
- Desktop: Full timeline with all details
- Tablet: Condensed spacing, same structure
- Mobile: Simplified layout, possibly horizontal scroll

## Behavior Requirements

### Interaction
- Optional click-to-expand functionality
- Smooth animations for state changes
- Hover effects on interactive elements

### Accessibility
- Semantic HTML structure (headings hierarchy)
- ARIA labels for timeline landmarks
- Screen reader friendly date formatting
- Keyboard navigation support

### Performance
- Lazy rendering for large timeline
- Optimized animations (transform/opacity only)
- No layout shift during interactions

## Test Scenarios

1. **Timeline Rendering**
   - All experience items displayed chronologically
   - Current position marked distinctly
   - Timeline line connects all items

2. **Content Accuracy**
   - All dates formatted consistently
   - Achievements list properly structured
   - Technology tags display correctly

3. **Responsive Layout**
   - Desktop: Full vertical timeline
   - Mobile: Readable condensed version
   - No horizontal scroll unless intended

4. **Accessibility**
   - Screen reader announces timeline structure
   - Keyboard navigation works
   - Focus indicators visible