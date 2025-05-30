# React Chrono Storybook Examples

This storybook showcases various configurations and use cases for the [react-chrono](https://github.com/prabhuignoto/react-chrono) timeline component.

## Available Examples

### Basic Timeline Types

#### Horizontal Timelines

- **HorizontalBasic**: Basic horizontal timeline with text-only content
- **HorizontalThemed**: Horizontal timeline with custom theme colors
- **HorizontalImages**: Horizontal timeline with images in each card
- **HorizontalMixed**: Horizontal timeline with mixed content types
- **HorizontalCardPosition**: Horizontal timeline with cards positioned above the timeline

#### Vertical Timelines

- **VerticalBasic**: Basic vertical timeline with cards on the right
- **VerticalThemed**: Vertical timeline with custom theme colors
- **VerticalImages**: Vertical timeline with image media
- **VerticalMixed**: Vertical timeline with mixed content
- **VerticalLayoutFlipped**: Vertical timeline with the layout flipped (cards on the left)
- **VerticalBorderlessCards**: Vertical timeline with borderless cards

#### Vertical Alternating Timelines

- **VerticalAlternatingBasic**: Basic vertical alternating timeline
- **VerticalAlternatingThemed**: Vertical alternating timeline with custom colors
- **VerticalAlternatingImages**: Vertical alternating timeline with images
- **VerticalAlternatingMixed**: Vertical alternating timeline with mixed content
- **VerticalAlternatingFlipped**: Vertical alternating timeline with flipped layout
- **VerticalAlternatingSlideshow**: Vertical alternating timeline with slideshow

### Advanced Features

#### Slideshow and Animation

- **SlideshowTimeline**: Horizontal slideshow with progress indicator
- **SlideshowVertical**: Vertical slideshow with reveal animation

#### Nested Timelines

- **NestedTimelineHorizontal**: Horizontal nested timelines
- **NestedTimelineVertical**: Vertical nested timelines

#### Media Support

- **VideoTimelineExample**: Timeline with embedded video content

#### Interactive Features

- **SearchableTimeline**: Timeline with search functionality
- **KeyboardNavigation**: Timeline optimized for keyboard navigation
- **DisableAutoScroll**: Timeline with auto-scrolling disabled
- **ActiveItemOnLoad**: Timeline that loads with a specific item active

#### Interactive Features

- **SearchableTimeline**: Timeline with search functionality
- **CustomButtonTexts**: Timeline with custom button text labels
- **KeyboardNavigation**: Timeline optimized for keyboard navigation

### Customization Options

#### Theming

- **CustomTheme**: Timeline with comprehensive theme customization
- **CustomDarkTheme**: Timeline with dark mode theme and toggle support

#### Styling and Layout

- **CustomClassNames**: Timeline with custom CSS class names
- **HighlightCardsOnHover**: Timeline with card highlighting on hover
- **CustomCardHeight**: Timeline with custom card height
- **CustomItemWidth**: Timeline with custom item width
- **BorderlessCards**: Timeline with borderless cards for a minimal look
- **TimelinePointShapes**: Timeline with custom timeline point shapes
- **CustomLineWidth**: Timeline with custom timeline track width
- **ToolbarCustomization**: Timeline with custom toolbar position and styling

#### Accessibility Features

- **SemanticHeadings**: Timeline using semantic HTML heading tags
- **CustomAriaLabels**: Timeline with custom ARIA labels
- **HighContrastTheme**: Timeline with high-contrast theme
- **KeyboardFocusedNavigation**: Timeline optimized for keyboard navigation with enhanced focus styling

#### Responsive Behavior

- **ResponsiveTimeline**: Timeline that adapts to screen size
- **CustomBreakpoint**: Timeline with custom responsive breakpoint
- **ScrollableVertical**: Vertical timeline with scrollable content
- **MobileFirstResponsive**: Mobile-first responsive timeline optimized for different devices
- **OrientationResponsive**: Timeline that responds to device orientation changes
- **ContentAdaptive**: Timeline with adaptive content based on screen size
- **ProgressiveEnhancement**: Timeline with progressive enhancement of features

#### Custom Renderers

- **CustomCardRenderer**: Timeline with custom card component renderer
- **CustomTitleRenderer**: Timeline with custom title component renderer
- **CustomPointRenderer**: Timeline with custom timeline point renderer
- **FullyCustomizedTimeline**: Timeline with comprehensive custom renderers

#### Icons and Visual Elements

- **TimelineWithIcons**: Timeline with custom SVG icons in timeline points
- **CustomControlIcons**: Timeline with custom navigation control icons
- **CircleBackgroundIcons**: Timeline with colored icon backgrounds

## Using react-chrono

To use react-chrono in your own project:

```bash
# Using npm
npm install react-chrono

# Using yarn
yarn add react-chrono

# Using pnpm
pnpm add react-chrono
```

## Practical Applications

The react-chrono timeline component is versatile and can be used in various applications:

### History Visualization

- Company history and milestones
- Historical events and timelines
- Personal biographies and life events

### Project Management

- Project progress and milestones
- Release schedules and version history
- Sprint retrospectives and roadmaps

### Education

- Course curriculum sequence
- Learning paths and educational journeys
- Historical event visualization for teaching

### E-commerce and Products

- Product launch history
- Feature release timelines
- Company growth and achievements

### Personal

- Travel itineraries and journey documentation
- Family history and genealogy
- Personal achievements and milestones

## Development

To run this storybook locally:

```bash
# Install dependencies
npm install

# Start the storybook development server
npm run storybook
```

## Building

To build the storybook for deployment:

```bash
npm run build-storybook
```

This will generate static files in the `storybook-static` directory.

Basic usage:

```jsx
import { Chrono } from "react-chrono";

const items = [
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText:
      "On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France.",
  },
  // More items...
];

function App() {
  return (
    <div style={{ width: "800px", height: "600px" }}>
      <Chrono items={items} mode="HORIZONTAL" />
    </div>
  );
}
```

## More Information

For full documentation of all available props and options, visit the [react-chrono GitHub repository](https://github.com/prabhuignoto/react-chrono).

## Maintenance

This storybook showcases react-chrono's capabilities. To update examples when new versions of react-chrono are released:

1. Install the latest version: `npm install react-chrono@latest`
2. Update examples as needed to demonstrate new features
3. Run the storybook: `npm run storybook`
