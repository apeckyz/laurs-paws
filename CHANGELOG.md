# Changelog

All notable changes to the Laur's Paws website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## Version History

### [0.2.0] - 2026-01-29 - V2 Deployment

#### Added
- **Booking System**: Interactive booking modal with calendar and time slot selection
  - React Day Picker integration for date selection
  - Dynamic time slot availability based on opening hours
  - Formspree integration for booking form submissions
  - Service selection (Grooming, Walking, Sitting, Cat Visits)
  - Pet information fields (name, type)
  - Custom calendar styling matching brand colors
- **Book Now Button**: Added to OpeningTimes component replacing static text
- **Enhanced Logo Sizes**: 
  - Header logo increased to 2x size (h-24)
  - New hero logo size (h-48) added above main heading
  - Logo now spans full width of text content in hero section

#### Changed
- Header logo size doubled from h-12 to h-24
- Hero section layout updated with larger logo placement above heading
- OpeningTimes component now includes interactive booking button
- Added react-day-picker and date-fns dependencies

#### Technical Details
- New component: `BookingModal.jsx` with full booking flow
- Calendar styling: Custom CSS for react-day-picker
- Form integration: Formspree endpoint for booking submissions
- Time slot logic: Dynamic availability based on day of week
- Disabled Sundays in calendar (closed day)
- Different time slots for Saturday vs weekdays

### [0.1.1] - 2026-01-29

#### Changed
- Updated color palette to Gemini-extracted colors from styling.jpg for more accurate brand representation
- Refined background pattern opacity from 5% to 12% (10-15% range) for better visibility
- Changed color naming from 'orange' to 'peach' to better reflect the actual brand color

### [0.1.1] - 2026-01-29

#### Changed
- **Color Palette Refinement**: Updated to exact Gemini-extracted colors
  - Sunshine Yellow: #FCEE4F (was #FFE500)
  - Pastel Peach: #F9CBA5 (was #FFB380, renamed from orange)
  - Puppy Blue: #ADDDE5 (was #A8D8E8)
  - Soft Black: #1A1A1A (was #000000)
- Background pattern opacity increased to 12% for better texture visibility
- All components updated to use new color names and values

### [0.1.0] - 2026-01-29

#### Added
- Project documentation foundation (ARCHITECTURE.md, STYLE_GUIDE.md, CHANGELOG.md)
- Brand identity guidelines with exact color codes from business card
- Typography system with three font families (Courier Prime, Montserrat, Playfair Display, Inter)
- React + Vite project initialization with complete configuration
- Tailwind CSS configuration with custom brand colors and animations
- Background pattern component with paws, bones, scissors at 5% opacity
- Responsive Header component with mobile menu and sticky behavior
- Footer component with business information and social links
- Logo component with paw print, heart, and scissors design
- Hero section with Z-pattern layout and gradient background
- Services section with four animated service cards (Grooming, Walking, Sitting, Cat Visits)
- Gallery section with interactive Before/After slider component
- Image grid with lightbox functionality
- Contact section with business information and WhatsApp integration
- Opening times table component
- Framer Motion animations for scroll-based interactions
- Mobile-first responsive design across all breakpoints
- Smooth scroll navigation between sections
- Accessibility features (semantic HTML, ARIA labels, keyboard navigation)
- Custom UI components (Button, Card, BeforeAfterSlider, ImageGrid)

#### Technical Details
- React 18.3.1 with hooks and modern patterns
- Vite 5.4.2 for fast development and optimized builds
- Tailwind CSS 3.4.1 with custom design tokens
- Framer Motion 11.0.3 for smooth animations
- Lucide React 0.344.0 for consistent iconography
- Google Fonts integration (Courier Prime, Montserrat, Playfair Display, Inter)
