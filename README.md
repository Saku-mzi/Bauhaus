# Bauhaus

A modern, interactive image carousel inspired by Bauhaus design principles. Click through a collection of architectural building images with smooth scrolling animations and a polished user interface.

## Features

- **Interactive Image Carousel**: Click the carousel to navigate through images
- **Smooth Scrolling**: CSS scroll-behavior provides fluid transitions between images
- **Responsive Design**: Adapts to different screen sizes using modern CSS utilities
- **Clean Aesthetics**: Minimalist design with rounded corners and subtle shadow effects
- **Hover Effects**: Subtle scaling animation when hovering over the carousel

## How It Works

### Architecture Overview

**HTML Structure** (`index.html`)

- Simple semantic structure with a header, main container, and image carousel
- Images are displayed in a `.movingThing` flex container that enables horizontal scrolling

**Styling** (`main.css`)

- Full-height viewport using `height: 100dvh`
- Horizontally scrollable container with hidden scrollbars
- Flexbox layout for image positioning and alignment
- `object-fit: cover` ensures images fill the container while maintaining aspect ratio
- Smooth scroll behavior for seamless transitions between images

**JavaScript Functionality** (`main.js`)

- Tracks the currently displayed image index
- Calculates image width and scrolls to the next image on click
- Loops back to the first image after the last image
- Click event listener on the container triggers the carousel navigation

## Usage

1. Open `index.html` in a web browser
2. Click on the carousel container to navigate to the next image
3. Images will smoothly scroll with a transition animation
4. The carousel loops back to the first image after the last one

## File Structure

```
Bauhaus/
├── index.html      # Main HTML structure
├── main.css        # Styling and layout
├── main.js         # Carousel navigation logic
├── README.md       # This file
└── images/         # Directory containing building images
    ├── buildingOne.jpg
    ├── buildingTwo.jpg
    ├── buildingThree.jpg
    ├── buildingFour.jpg
    └── buildingFive.jpg
```

## Technical Details

- **CSS Features Used**: Flexbox, `overflow: hidden`, `scroll-behavior: smooth`, `object-fit: cover`, CSS custom properties for transitions
- **JavaScript Approach**: DOM manipulation with `scrollLeft` property for programmatic scrolling
- **Responsive**: Uses `min(500px, 100%)` for width to work on mobile and desktop

## Browser Compatibility

Works on all modern browsers that support:

- ES6 modules
- CSS Flexbox
- `scrollLeft` property
- CSS viewport units (`100dvh`)

## Future Enhancements

- Keyboard navigation (arrow keys)
- Swipe/touch gestures for mobile
- Automatic carousel with timer
- Navigation dots or indicators
- Slide counter display
