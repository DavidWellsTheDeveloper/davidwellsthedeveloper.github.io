# Cursor Animation

This project features a subtle cursor animation that enhances the user experience without being distracting.

## Current Implementation: Smooth Following Ring

**Component:** `CursorDot.vue`
- Small, semi-transparent ring that follows the cursor with a smooth delay
- Enhanced multi-layer glow effect using your brand colors (teal)
- Dynamic opacity that increases on hover interactions
- Optimized for performance with smooth 60fps animations

## Features

### **Visual Design:**
- **Size**: 16px diameter ring with 1.5px border
- **Colors**: Teal (#0d9488) with varying opacity levels
- **Glow**: Multi-layer box-shadow for depth and visibility
- **Opacity**: 60% default, 80% on hover for subtle feedback

### **Animation Behavior:**
- **Following Speed**: Smooth lag with 0.08 interpolation factor
- **Hover Effect**: Scales to 1.2x and increases opacity
- **Performance**: Uses `requestAnimationFrame` for smooth 60fps
- **Cleanup**: Proper event listener management

### **User Control:**
- Toggle button in navigation drawer to enable/disable
- Default enabled, but users can turn off for accessibility
- Applies `custom-cursor` class to hide default cursor when active

## Technical Implementation

The cursor animation uses:
- **CSS transforms** for hardware acceleration
- **Event throttling** for optimal performance  
- **Smooth interpolation** for natural following motion
- **Multi-layer shadows** for enhanced visual depth

## Customization

Easy to customize:
- **Colors**: Update the `rgba(13, 148, 136, ...)` values
- **Size**: Adjust `width`, `height`, and centering offsets
- **Speed**: Modify the `0.08` interpolation factor
- **Glow**: Adjust box-shadow blur and opacity values
- **Opacity**: Change default and hover opacity levels

## Performance

- Minimal performance impact
- Hardware-accelerated animations
- Proper cleanup prevents memory leaks
- Smooth 60fps animation loop 