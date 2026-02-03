import Card from './components/Card';

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-blue-900 dark:border-blue-400 p-6 rounded-xl shadow-2xl backdrop-blur-sm bg-white/30 dark:bg-black/30">
          Learn to Integrate Tailwind
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <Card
            title="Premium Product"
            description="Discover our amazing product with cutting-edge features and exceptional quality."
            buyNow="Buy Now"
            details="Details"
          />
          <Card
            title="Premium Product"
            description="Discover our amazing product with cutting-edge features and exceptional quality."
            buyNow="Buy Now"
            details="Details"
          />
        </div>

      </div>
    </>
  );
}

export default App;

/*
CSS CONCEPTS EXPLAINED:

1. BACKDROP-BLUR (backdrop-blur-sm):
   - Applies a blur effect to the background behind the element
   - Creates a frosted glass effect
   - Used on the h1 title with bg-white/30 (30% opacity white background)

2. GROUP & GROUP-HOVER:
   - 'group' class marks a parent element
   - 'group-hover:' prefix applies styles to children when parent is hovered
   - Example: When hovering the image container (group), the image scales (group-hover:scale-110)
   - Also triggers the overlay to appear (group-hover:opacity-100)

3. INSET (inset-0):
   - Shorthand for: top-0, right-0, bottom-0, left-0
   - Positions an absolutely positioned element to cover its parent completely
   - Used on the overlay div to cover the entire image

4. OBJECT-COVER:
   - CSS property that controls how an image fits within its container
   - Maintains the image's aspect ratio while filling the entire container
   - Crops the image if necessary to avoid distortion
   - Alternative values:
     * object-contain: Fits entire image within container (may leave empty space)
     * object-fill: Stretches image to fill container (may distort)
     * object-none: Displays image at original size
     * object-scale-down: Uses smallest of 'none' or 'contain'
   - Used in our card to ensure the image fills the h-64 height without stretching

5. CARD COMPONENT CSS BREAKDOWN:

   a) Card Container (max-w-sm w-full border-4 bg-white...):
      - max-w-sm: Maximum width of 24rem (384px)
      - w-full: Takes full width up to max-w-sm
      - border-4: 4px border thickness
      - rounded-2xl: Large border radius (1rem)
      - shadow-2xl: Extra large shadow for depth
      - hover:scale-105: Scales to 105% on hover
      - overflow-hidden: Clips content that exceeds boundaries (important for image zoom effect)

   b) Image Container (relative overflow-hidden group):
      - relative: Establishes positioning context for absolute children
      - overflow-hidden: Hides the scaled image overflow
      - group: Enables group-hover functionality for children

   c) Image (w-full h-64 object-cover...):
      - h-64: Fixed height of 16rem (256px)
      - object-cover: Maintains aspect ratio while filling container (prevents distortion)
      - transition-transform duration-500: Smooth 500ms animation
      - group-hover:scale-110: Zooms to 110% when parent is hovered

   d) Overlay (absolute inset-0 bg-gradient-to-t...):
      - absolute: Positioned relative to the 'relative' parent
      - inset-0: Covers entire parent (top/right/bottom/left: 0)
      - bg-gradient-to-t: Gradient from bottom to top
      - from-black/60: Starts with 60% opacity black
      - to-transparent: Fades to transparent at top
      - opacity-0: Hidden by default
      - group-hover:opacity-100: Appears on parent hover

   e) Card Content (p-6 space-y-4):
      - p-6: Padding of 1.5rem on all sides
      - space-y-4: Adds 1rem vertical spacing between child elements

   f) Buttons Container (flex gap-3 pt-4):
      - flex: Flexbox layout
      - gap-3: 0.75rem spacing between buttons
      - pt-4: Top padding of 1rem

   g) Primary Button (flex-1 bg-gradient-to-r...):
      - flex-1: Takes available space (grows to fill)
      - bg-gradient-to-r: Horizontal gradient
      - hover:-translate-y-0.5: Moves up 0.125rem on hover
      - active:scale-95: Shrinks to 95% when clicked

   h) Secondary Button (border-2 border-blue-500...):
      - border-2: 2px border
      - hover:bg-blue-50: Light blue background on hover
      - dark:hover:bg-blue-900/20: 20% opacity blue in dark mode

6. TRANSITION & ANIMATION:
   - transition-all: Animates all property changes
   - duration-300/500: Animation duration in milliseconds
   - transform: Enables scale and translate animations
*/