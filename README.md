# Lumina - Interactive Image Gallery

Lumina is a responsive, client-side web application built with HTML, CSS, and vanilla JavaScript. It features dynamic grid and masonry layouts, live search indexing, category filtering, style filters, and a lightbox viewer with keyboard and touch navigation.

## Features

- High-Contrast Theme: Designed with a dark black, green, orange, and white color palette, including a dark/light mode toggle.
- Dual Layout Modes: Switch between standard uniform grid view and masonry column view.
- Instant Search & Filter: Filter photographs in real time by titles, locations, descriptions, or tags.
- Category Filtering: Filter photos by category (Nature, Architecture, Abstract, Wildlife, Portraits) with live item count badges.
- Visual Style FX: Apply CSS visual filters directly to images (Original, Black & White, Sepia, Warm Glow, Cyberpunk, Vibrant).
- Favorites System: Save favorite photographs persistently using browser localStorage.
- Interactive Lightbox:
  - Fullscreen view with fast image rendering.
  - Controls: Next/Previous buttons, scrollable thumbnail strip, keyboard controls (Left/Right arrows, Escape, Spacebar), and mobile touch swipe gestures.
  - Autoplay Slideshow: Automatic photo slideshow with a linear progress bar.
  - Zoom & Inspection: Zoom in and out up to 300%.
  - EXIF Metadata Panel: View camera model, lens, exposure, ISO, dimensions, location, and tag chips.
  - Photo Download: Direct image download link.

## Tech Stack

- HTML5: Semantic structure and accessible modal controls.
- CSS3: Custom CSS properties, CSS Grid, Masonry column layout, backdrop blur, and media queries.
- JavaScript (ES6+): Client-side state management, search logic, keyboard navigation, and touch event handling.
- Dependencies: None (Vanilla JS implementation).

## Usage

1. Download or clone this repository.
2. Open index.html directly in any web browser.

No build step or local server is required.

## File Structure

```text
image-gallery/
├── index.html       
├── styles.css       
├── app.js           
├── README.md        
└── images/          
    ├── nature_mountain.jpg
    ├── nature_forest.jpg
    ├── architecture_skyscraper.jpg
    ├── architecture_bridge.jpg
    ├── abstract_neon.jpg
    └── abstract_fluid.jpg
```

## License

MIT License.
