# Laur's Paws - Professional Pet Services Website

A modern, responsive website for Laur's Paws pet grooming and care services in Truro, Cornwall.

## Features

- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Brand Identity**: Custom color palette and typography matching business card styling
- **Interactive Gallery**: Before/After slider and image grid showcase
- **Smooth Animations**: Framer Motion powered transitions and scroll effects
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML
- **Performance**: Optimized images and code splitting

## Tech Stack

- **React 18**: Modern component-based UI
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Lucide React**: Beautiful icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Move your images to the root directory (they're already there based on the workspace structure)

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
laurs-paws/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, BackgroundPattern
│   │   ├── sections/        # Hero, Services, Gallery, Contact
│   │   ├── ui/              # Button, Card, BeforeAfterSlider, ImageGrid
│   │   └── common/          # Logo, SectionHeading
│   ├── styles/              # Global CSS and Tailwind
│   ├── utils/               # Constants and helpers
│   ├── assets/              # SVG patterns
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── public/                  # Static assets (images)
└── Documentation files      # ARCHITECTURE.md, STYLE_GUIDE.md, CHANGELOG.md
```

## Brand Colors

- **Primary Yellow**: #FFE500
- **Pastel Orange**: #FFB380
- **Pastel Blue**: #A8D8E8
- **Pure Black**: #000000
- **Pure White**: #FFFFFF

## Contact Information

- **Phone/WhatsApp**: 07446 493344
- **Landline**: 01872 240135
- **Email**: laurajevans92@hotmail.co.uk
- **Address**: 17 Green Close, Daniel Road, Truro, TR1 2DD

## Deployment

This project is configured for deployment to Coolify using Docker.

### Quick Deploy to Coolify

1. Connect your Coolify instance to this GitHub repository
2. Select "Docker" as the build pack
3. Set port to `80`
4. Deploy!

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

### Files for Deployment

- `Dockerfile` - Multi-stage Docker build configuration
- `nginx.conf` - Nginx server configuration for production
- `.dockerignore` - Optimizes Docker build by excluding unnecessary files

## License

© 2026 Laur's Paws. All rights reserved.
