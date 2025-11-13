# Wireframes for Upload 1

This folder contains low-fidelity wireframes for three pages:
1. `home.png` - Landing page
2. `data.png` - Content/data page
3. `form.png` - Form page

## How to Create Wireframes

You can use tools like:
- **Figma** (https://figma.com) - Free, web-based
- **Excalidraw** (https://excalidraw.com) - Free, simple sketching
- **Balsamiq** - Professional wireframing tool
- **Pen and paper** - Scan or photograph your sketches

## Required Elements in Each Wireframe

### Labels Required:
1. **Landmarks** - Clearly mark each semantic region:
   - `<header>` - Site header
   - `<nav>` - Navigation menu
   - `<main>` - Main content
   - `<aside>` - Sidebar (if applicable)
   - `<footer>` - Site footer

2. **Tab Order** - Number interactive elements (1, 2, 3...) showing keyboard navigation sequence:
   - Skip link (usually tab 1)
   - Navigation links
   - Form inputs
   - Buttons
   - Footer links

### Page-Specific Requirements:

#### home.png (Landing Page)
- Header with logo and navigation
- Hero section with call-to-action
- Feature cards or content sections
- Footer with links

#### data.png (Content Page)
- Same header/nav/footer structure
- Main content with headings hierarchy
- Optional sidebar with related links
- List or grid of data/content items

#### form.png (Form Page)
- Same header/nav/footer structure
- Form with multiple input types:
  - Text inputs
  - Textareas
  - Select dropdowns
  - Radio buttons or checkboxes
  - Submit button
- Form validation messages area
- Helper text for inputs

## Export Guidelines

- **Format**: PNG or PDF
- **Resolution**: 1920x1080 or higher for PNG
- **Annotations**: Use text boxes or arrows to label landmarks and tab order
- **File size**: Keep under 5MB per image

## Example Annotation Style

```
┌─────────────────────────────────────┐
│ <header> LANDMARK                   │
│ [Logo]    <nav> [Home] [Data] [Form]│  ← Tab 2, 3, 4
│ ↑ Tab 1 (Skip to main content)     │
├─────────────────────────────────────┤
│ <main> LANDMARK (tabindex="-1")    │
│                                     │
│ <h1>Welcome</h1>                    │
│                                     │
│ <section>                           │
│   [Card 1] [Card 2] [Card 3]       │  ← Tab 5, 6, 7
│ </section>                          │
│                                     │
├─────────────────────────────────────┤
│ <footer> LANDMARK                   │
│ [Privacy] [Terms] [Contact]         │  ← Tab 8, 9, 10
└─────────────────────────────────────┘
```

Once you create your wireframes, place the PNG/PDF files in this folder:
- `home.png` or `home.pdf`
- `data.png` or `data.pdf`
- `form.png` or `form.pdf`
