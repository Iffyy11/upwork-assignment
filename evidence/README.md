# Evidence Pack - Upload 1

This folder contains all accessibility evidence and documentation for Week 9.

## Contents

### 1. HTML Documentation
- **html-snippets.md** - Key HTML patterns and ARIA usage examples

### 2. Color Contrast Evidence
- **contrast-notes.md** - Color token validation against WCAG AA standards

### 3. Lighthouse Reports (To Be Added)
- **lighthouse-accessibility.html** - Full Lighthouse HTML report
- **lighthouse-screenshot.png** - Screenshot showing score ≥95

### 4. Instructions
- **lighthouse-instructions.md** - How to generate Lighthouse report

---

## Quick Testing Checklist

Before final submission, verify:

### HTML & Semantics
- [ ] One `<h1>` per page
- [ ] Logical heading hierarchy
- [ ] Proper landmarks (header, nav, main, footer)
- [ ] Lists for navigation
- [ ] Skip link on every page

### Keyboard Navigation
- [ ] Skip link visible on Tab press
- [ ] All interactive elements reachable via Tab
- [ ] Logical tab order
- [ ] Enter/Space activates elements
- [ ] No keyboard traps
- [ ] Visible focus indicators

### Forms (form.html)
- [ ] All inputs have labels
- [ ] Required fields marked
- [ ] Helper text associated
- [ ] Error messages with role="alert"
- [ ] Fieldsets group related controls

### ARIA Usage
- [ ] Used only where necessary
- [ ] aria-current on active links
- [ ] aria-label on navigation
- [ ] aria-describedby for helpers
- [ ] All ARIA documented in html-snippets.md

### Color & Contrast
- [ ] Text meets 4.5:1 contrast
- [ ] Large text meets 3:1
- [ ] Focus indicators meet 3:1
- [ ] No color-only information
- [ ] Contrast validated (see contrast-notes.md)

### Responsive Design
- [ ] Works at 480px (mobile)
- [ ] Works at 768px (tablet)
- [ ] Works at 1024px (desktop)
- [ ] No horizontal scroll

### Testing
- [ ] Lighthouse score ≥ 95
- [ ] No CSS/JS errors in console
- [ ] HTML validates
- [ ] CSS validates
- [ ] Tested with keyboard navigation

---

## How to Run Tests

```bash
# Start the server
npm run dev
# OR
docker-compose up

# Run linters
npm run lint

# Test in browser
# Visit http://localhost:8080
# Press F12 → Lighthouse tab → Run accessibility audit
```

---

## Next Steps

1. ✅ Run Lighthouse test (save HTML report + screenshot)
2. ✅ Test keyboard navigation on all pages
3. ✅ Take contrast checker screenshots (optional but recommended)
4. ✅ Create wireframes (if not done yet)
5. ✅ Review all documentation
6. ✅ Submit Upload 1

---

*Evidence documentation for Advanced Web Development - Week 9*
