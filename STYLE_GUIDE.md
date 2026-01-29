# Laur's Paws - Style Guide

## Brand Identity
**Established**: 2016  
**Owner**: Laura Evans  
**Tagline**: "Grooming & Walking Services"

## Color Palette

### Primary Colors (Gemini-Extracted from styling.jpg)
```css
--sunshine-yellow: #FCEE4F;    /* Primary Brand Color - Headers, Footer, CTAs */
--pastel-peach: #F9CBA5;       /* Secondary Color - About sections, secondary buttons */
--puppy-blue: #ADDDE5;         /* Accent Color - Contact boxes, footer, links */
--soft-black: #1A1A1A;         /* Text & Icons - Softer, more modern than pure black */
--clean-white: #FFFFFF;        /* Canvas - Main background, white space */
```

### Tailwind Configuration
```javascript
colors: {
  brand: {
    yellow: '#FCEE4F',    // Sunshine Yellow
    peach: '#F9CBA5',     // Pastel Peach
    blue: '#ADDDE5',      // Puppy Blue
    black: '#1A1A1A',     // Soft Black
    white: '#FFFFFF',     // Clean White
  }
}
```

### Usage Guidelines
- **Sunshine Yellow (#FCEE4F)**: Primary brand color for main header, bold buttons, and attention-grabbing sections
- **Pastel Peach (#F9CBA5)**: Secondary color for backgrounds on "About" sections, secondary buttons, warm service cards
- **Puppy Blue (#ADDDE5)**: Accent color for contact boxes, footer backgrounds, highlighting links, cool service cards
- **Soft Black (#1A1A1A)**: All text and icons - softer than pure black for modern reading experience
- **Clean White (#FFFFFF)**: Main canvas with plenty of white space to prevent color overwhelm

### Color Blocking Philosophy
The brand relies on "Color Blocking" (large squares of flat color). Yellow/Peach/Blue sections should touch each other without borders, replicating the geometric feel of the business card.

### Color Contrast
- Soft Black text on Sunshine Yellow: ✓ WCAG AA compliant
- Soft Black text on Pastel Peach: ✓ WCAG AA compliant
- Soft Black text on Puppy Blue: ✓ WCAG AA compliant
- White text on Soft Black: ✓ WCAG AAA compliant

## Typography

### Font Families

#### Logo & Brand Text
```css
font-family: 'Courier Prime', 'Courier New', monospace;
letter-spacing: 0.15em;
font-weight: 700;
text-transform: uppercase;
```
**Usage**: Main logo "LAUR'S PAWS", "Est. 2016"

#### Headings
```css
font-family: 'Montserrat', 'Inter', sans-serif;
font-weight: 700-800;
text-transform: uppercase;
letter-spacing: 0.08em;
```
**Usage**: Section headings, service titles, navigation

#### Accent Text
```css
font-family: 'Playfair Display', 'Baskerville', serif;
font-weight: 400-600;
font-style: italic (optional);
```
**Usage**: "Laura Evans" name, testimonial quotes, elegant subheadings

#### Body Text
```css
font-family: 'Inter', 'Helvetica Neue', sans-serif;
font-weight: 400-500;
line-height: 1.6;
```
**Usage**: Paragraphs, descriptions, contact information

### Type Scale
```css
--text-xs: 0.75rem;      /* 12px - Fine print */
--text-sm: 0.875rem;     /* 14px - Small labels */
--text-base: 1rem;       /* 16px - Body text */
--text-lg: 1.125rem;     /* 18px - Large body */
--text-xl: 1.25rem;      /* 20px - Small headings */
--text-2xl: 1.5rem;      /* 24px - Section subheadings */
--text-3xl: 1.875rem;    /* 30px - Section headings */
--text-4xl: 2.25rem;     /* 36px - Page headings */
--text-5xl: 3rem;        /* 48px - Hero heading */
--text-6xl: 3.75rem;     /* 60px - Large hero (desktop) */
```

## Spacing System

### Base Unit: 4px (0.25rem)

```css
--spacing-1: 0.25rem;    /* 4px */
--spacing-2: 0.5rem;     /* 8px */
--spacing-3: 0.75rem;    /* 12px */
--spacing-4: 1rem;       /* 16px */
--spacing-5: 1.25rem;    /* 20px */
--spacing-6: 1.5rem;     /* 24px */
--spacing-8: 2rem;       /* 32px */
--spacing-10: 2.5rem;    /* 40px */
--spacing-12: 3rem;      /* 48px */
--spacing-16: 4rem;      /* 64px */
--spacing-20: 5rem;      /* 80px */
--spacing-24: 6rem;      /* 96px */
```

### Section Padding
- **Desktop**: 80px top/bottom, 64px left/right
- **Tablet**: 64px top/bottom, 40px left/right
- **Mobile**: 48px top/bottom, 24px left/right

## Iconography

### Style
- **Line Style**: Minimalist black outlines
- **Weight**: 2px stroke width
- **Size**: 24px, 32px, 48px (based on context)
- **Source**: Lucide React icons

### Service Icons
- **Grooming**: Scissors icon
- **Walking**: Footprints or leash icon
- **Sitting**: Home icon
- **Cat Visits**: Cat icon

### Contact Icons
- **Phone**: Phone icon
- **Email**: Mail icon
- **Location**: MapPin icon
- **Social**: Globe, ThumbsUp icons

## Background Pattern

### Paw & Bone Pattern ("Scatter Pattern")
```css
opacity: 0.10 - 0.15;  /* 10-15% for subtle texture */
fill: #1A1A1A;         /* Soft Black */
pattern-size: 80px x 80px;
elements: paw prints, bones, scissors, leashes (scattered)
```

**Implementation**: Repeatable SVG pattern of pet grooming icons applied to body background, fixed position. Opacity set to 10-15% on white background to add texture without making text hard to read.

## Logo Design

### Primary Logo
- **Text**: "LAUR'S" [space] "PAWS"
- **Center Element**: Paw print with heart + crossed scissors
- **Subtitle**: "Est. 2016" (smaller, serif)
- **Color**: Pure black on light backgrounds, white on dark backgrounds

### Logo Variations
- **Full Logo**: With tagline and establishment date
- **Icon Only**: Paw + scissors mark
- **Text Only**: "LAUR'S PAWS" without graphics

## UI Components

### Buttons

#### Primary CTA
```css
background: #FFE500;
color: #000000;
padding: 16px 32px;
border-radius: 8px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.05em;
transition: all 0.3s ease;

hover: {
  background: #FFD700;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}
```

#### Secondary Button
```css
background: transparent;
color: #000000;
border: 2px solid #000000;
padding: 14px 30px;
border-radius: 8px;

hover: {
  background: #000000;
  color: #FFFFFF;
}
```

### Cards
```css
background: #FFFFFF;
border-radius: 12px;
padding: 32px;
box-shadow: 0 4px 12px rgba(0,0,0,0.08);
transition: transform 0.3s ease;

hover: {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
```

## Animation Guidelines

### Timing Functions
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Durations
- **Quick**: 150ms (hover states, small UI changes)
- **Standard**: 300ms (most transitions)
- **Slow**: 500ms (page sections, large movements)

### Scroll Animations
- **Fade In**: Opacity 0 → 1
- **Slide Up**: translateY(30px) → 0
- **Scale In**: scale(0.95) → 1

## Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

## Business Information Display

### Contact Details
- **Phone/WhatsApp**: 07446 493344
- **Landline**: 01872 240135
- **Email**: laurajevans92@hotmail.co.uk
- **Website**: www.laurs-paws.co.uk
- **Social**: @laurspaws

### Address
```
17 Green Close
Daniel Road
Truro, Cornwall
TR1 2DD
```

### Opening Times Table
| Day       | Hours         |
|-----------|---------------|
| Monday    | 09:00 - 17:00 |
| Tuesday   | 09:00 - 17:00 |
| Wednesday | 09:00 - 17:00 |
| Thursday  | 09:00 - 17:00 |
| Friday    | 09:00 - 17:00 |
| Saturday  | 10:00 - 16:00 |
| Sunday    | Closed        |

## Brand Voice & Tone
- **Professional yet Warm**: Expert care with personal touch
- **Trustworthy**: Established since 2016
- **Approachable**: Friendly, local service
- **Quality-Focused**: High-end grooming and care
