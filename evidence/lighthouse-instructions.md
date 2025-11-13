# Lighthouse Accessibility Report Instructions

## How to Generate Lighthouse Report

### Step 1: Run Lighthouse in Chrome

1. **Ensure your site is running:**
   ```bash
   npm run dev
   # OR
   docker-compose up
   ```
   Visit: http://localhost:8080

2. **Open Chrome DevTools:**
   - Press `F12` or right-click → "Inspect"
   - Navigate to the **"Lighthouse"** tab

3. **Configure the audit:**
   - ✅ Check **"Accessibility"** category
   - Select **"Desktop"** or **"Mobile"**
   - Click **"Analyze page load"**

4. **Wait for results** (10-30 seconds)

5. **Save the report:**
   - Click the **"Save report"** button (top right)
   - Choose **"HTML"** format
   - Save as `lighthouse-accessibility.html` in this `evidence/` folder

### Step 2: Capture Screenshot

1. After report generation, take a screenshot showing:
   - Overall accessibility score (large number, target ≥95)
   - Individual audit results
   - Any warnings or passed items
   
2. Save as `lighthouse-screenshot.png` in this folder

---

## Alternative: Lighthouse CLI

```bash
# Install Lighthouse globally
npm install -g lighthouse

# Generate report
lighthouse http://localhost:8080/index.html \
  --only-categories=accessibility \
  --output html \
  --output-path=./evidence/lighthouse-accessibility.html

# Test all pages
lighthouse http://localhost:8080/views/data.html \
  --only-categories=accessibility \
  --output html \
  --output-path=./evidence/lighthouse-data.html

lighthouse http://localhost:8080/views/form.html \
  --only-categories=accessibility \
  --output html \
  --output-path=./evidence/lighthouse-form.html
```

---

## Target Score

**Accessibility Score:** ≥ 95/100  
**Goal:** 100/100

---

## Expected Passes

✓ All page elements are keyboard accessible  
✓ Color contrast meets WCAG AA (4.5:1)  
✓ Form elements have associated labels  
✓ Valid HTML structure  
✓ Logical heading hierarchy  
✓ Skip links present  
✓ ARIA attributes valid  
✓ No focus traps  

---

## Common "Not Applicable" Items

These may show as N/A:
- Video/audio elements (none used)
- Object elements (none used)
- Specific ARIA roles not needed

---

## If Score < 100

Document any issues here:

### Example Format:
**Issue:** [Brief description]  
**Severity:** Low / Medium / High  
**Current State:** [What's happening]  
**Impact:** [Who is affected]  
**Fix Plan:** [How to resolve]  
**Timeline:** Upload 2 / Week 10  

---

*Replace this file with actual HTML report after testing.*
