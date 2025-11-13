# Advanced Web Development - Upload 1

Week 9 deliverable: Accessible static site with semantic HTML, mobile-first responsive layout, and comprehensive keyboard navigation.

## How to Run the Project

### Option 1: npm (Easiest)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:8080
```

### Option 2: Docker

```bash
# Build and run
docker-compose up --build

# Visit http://localhost:8080
```

## Project Structure

```
├── wireframes/          # Low-fidelity wireframes (PNG/PDF)
├── public/              # Static site files
│   ├── index.html       # Home page
│   ├── views/           # Additional pages
│   │   ├── data.html
│   │   └── form.html
│   ├── css/             # Stylesheets
│   │   ├── tokens.css   # Design tokens
│   │   └── base.css     # Base styles
│   ├── js/              # JavaScript
│   │   └── a11y.js      # Accessibility enhancements
│   └── img/             # Images
└── evidence/            # Accessibility documentation
    ├── lighthouse-accessibility.html
    ├── lighthouse-screenshot.png
    ├── html-snippets.md
    └── contrast-notes.md
```

## Accessibility Features

- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ Skip link to main content
- ✅ Semantic HTML5 landmarks
- ✅ WCAG 2.1 AA color contrast (4.5:1 minimum)
- ✅ Proper form labels and ARIA
- ✅ Responsive design (mobile-first)
- ✅ Focus indicators

## Testing

```bash
# Run linters
npm run lint

# HTML validation
npm run lint:html

# CSS validation
npm run lint:css
```

## Target: Lighthouse Accessibility Score ≥ 95

Run Lighthouse in Chrome DevTools to verify accessibility compliance.
