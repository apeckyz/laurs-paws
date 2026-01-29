# Laur's Paws - Architecture Documentation

## Project Overview
High-end, responsive pet services website for "Laur's Paws" - a professional pet grooming and care service established in 2016.

## Tech Stack

### Core Technologies
- **React 18+**: Component-based UI framework
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for smooth transitions and interactions

### Additional Dependencies
- **React Day Picker**: Calendar component for booking system
- **date-fns**: Date manipulation and formatting
- **React Compare Image**: For before/after slider functionality
- **Formspree**: Form submission service for booking requests

## Folder Structure

```
laurs-paws/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── laur-with-dog.jpg
│   │   │   ├── laur-with-dog2.jpg
│   │   │   ├── laur-with-dog3.jpg
│   │   │   └── laur-with-dog5.jpg
│   │   ├── gallery/
│   │   │   ├── before-groom1.jpg
│   │   │   ├── before-groom2.jpg
│   │   │   ├── before-groom3.jpg
│   │   │   ├── after-groom1.jpg
│   │   │   ├── after-groom2.jpg
│   │   │   ├── after-groom3.jpg
│   │   │   ├── before-and-after-groom1.jpg
│   │   │   ├── 2groomed-brothers.jpg
│   │   │   ├── 2groomed-brotherstogether.jpg
│   │   │   ├── closeup-dog.jpg
│   │   │   └── dog-playing.jpg
│   │   └── brand/
│   │       └── styling.jpg
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── patterns/
│   │       └── paw-pattern.svg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── BackgroundPattern.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── OpeningTimes.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── BeforeAfterSlider.jsx
│   │   │   └── ImageGrid.jsx
│   │   └── common/
│   │       ├── Logo.jsx
│   │       └── SectionHeading.jsx
│   ├── styles/
│   │   ├── index.css
│   │   └── animations.css
│   ├── utils/
│   │   └── constants.js
│   ├── App.jsx
│   └── main.jsx
├── ARCHITECTURE.md
├── STYLE_GUIDE.md
├── CHANGELOG.md
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Component Hierarchy

```
App
├── BackgroundPattern (fixed, z-0)
├── Header (sticky)
├── Main
│   ├── Hero
│   │   ├── Logo
│   │   ├── Heading
│   │   ├── Image
│   │   └── Button (CTA)
│   ├── Services
│   │   ├── SectionHeading
│   │   └── Card[] (4 services)
│   ├── Gallery
│   │   ├── SectionHeading
│   │   ├── BeforeAfterSlider
│   │   ├── ImageGrid
│   │   └── BookingModal
│   ├── Contact
│   │   ├── SectionHeading
│   │   ├── ContactInfo
│   │   └── OpeningTimes
│   │       └── BookingModal (conditional)
└── Footer
```

## Design Patterns

### Layout Strategy
- **Z-Pattern Hero**: Eye naturally flows from top-left logo → top-right CTA → diagonal to bottom-left content → bottom-right secondary CTA
- **Single Page Application**: Smooth scroll navigation between sections
- **Mobile-First Responsive**: Breakpoints at 640px, 768px, 1024px, 1280px

### State Management
- **Local Component State**: React useState for UI interactions
- **No Global State**: Simple site doesn't require Redux/Context

### Performance Optimization
- **Lazy Loading**: Images load on scroll using Intersection Observer
- **Code Splitting**: Dynamic imports for gallery components
- **Optimized Images**: WebP format with fallbacks

## Accessibility Standards
- **WCAG 2.1 AA Compliance**
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for all images
- Sufficient color contrast ratios

## Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment
- **Platform**: Netlify or Vercel
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: None required for initial launch
