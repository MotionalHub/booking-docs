# Style Partials Documentation

This directory contains modular CSS files that make up the complete styling system for the Discord Booking Bot documentation.

## File Structure

### Core Files
- **`_variables.css`** - CSS custom properties, color schemes, spacing scales, shadows, transitions, and theme variables
- **`_base.css`** - Global resets, base typography, accessibility features, scrollbar styling, and print styles

### Component Styles
- **`_buttons.css`** - Button variants, hover effects, loading states, and interactive elements
- **`_badges.css`** - Badge components with role-based colors, sizes, and hover effects
- **`_cards.css`** - Card layouts, hover animations, and Starlight card enhancements
- **`_callouts.css`** - Alert/notification components with different severity levels
- **`_tables.css`** - Responsive table designs, mobile adaptations, and scroll indicators
- **`_feature-grid.css`** - Feature card grids, layouts, and responsive behavior

### Utility Files
- **`_utilities.css`** - Layout helpers, spacing utilities, text classes, color utilities, and responsive classes
- **`_animations.css`** - Keyframe definitions, animation utility classes, hover effects, and reduced motion support

## Usage

All partials are imported via the main `custom.css` file using CSS `@import` statements. This modular approach provides:

### Benefits
✅ **Better Organization** - Related styles grouped together  
✅ **Easier Maintenance** - Edit specific components without affecting others  
✅ **Improved Readability** - Smaller, focused files  
✅ **Team Collaboration** - Multiple developers can work on different components  
✅ **Selective Loading** - Easy to disable/enable specific features  

### Best Practices
- Keep component-specific styles in their respective files
- Use `_variables.css` for all shared values
- Add new utility classes to `_utilities.css`
- Document any new CSS custom properties
- Test dark mode compatibility for all components

## Adding New Styles

1. **For new components**: Create a new `_component-name.css` file
2. **For utilities**: Add to `_utilities.css`
3. **For animations**: Add to `_animations.css`
4. **For variables**: Add to `_variables.css`
5. **Update main CSS**: Add `@import` to `custom.css`

## File Size Optimization

The modular structure allows for easy optimization:
- Remove unused partials to reduce bundle size
- Tree-shake unused utility classes
- Optimize critical path by reordering imports
- Bundle related components together for production
