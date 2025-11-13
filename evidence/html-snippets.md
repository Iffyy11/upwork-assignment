# HTML Snippets and Accessibility Patterns

Key HTML patterns demonstrating accessibility implementation for Upload 1.

## 1. Landmark Template

All pages use semantic HTML5 landmarks:

```html
<body class="page-layout">
  <!-- Skip to main content -->
  <a href="#main" class="skip-link">Skip to main content</a>

  <!-- Header Landmark -->
  <header class="site-header">
    <nav class="site-nav" aria-label="Primary navigation">
      <ul>
        <li><a href="index.html" aria-current="page">Home</a></li>
        <li><a href="views/data.html">Data</a></li>
        <li><a href="views/form.html">Form</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main Content Landmark -->
  <main id="main" class="site-main" tabindex="-1">
    <h1>Page Title</h1>
    <!-- Content -->
  </main>

  <!-- Footer Landmark -->
  <footer class="site-footer">
    <nav class="footer-nav" aria-label="Footer navigation">
      <!-- Footer links -->
    </nav>
  </footer>
</body>
```

**Landmarks used:**
- `<header>` - Site header with navigation
- `<nav>` - Navigation sections (with aria-label for distinction)
- `<main>` - Primary content (tabindex="-1" for skip link)
- `<footer>` - Site footer

---

## 2. Skip Link

Allows keyboard users to bypass navigation:

```html
<!-- HTML -->
<a href="#main" class="skip-link">Skip to main content</a>

<!-- Target -->
<main id="main" class="site-main" tabindex="-1">

<!-- CSS -->
.skip-link {
  position: absolute;
  top: -100%;  /* Hidden by default */
  z-index: var(--z-index-fixed);
}

.skip-link:focus {
  top: 0;  /* Visible when focused */
}
```

**How it works:**
- Hidden off-screen by default
- Appears when user presses Tab
- Clicking moves focus to main content
- `tabindex="-1"` allows programmatic focus

---

## 3. Form Groups with Labels

### Text Input with Helper Text

```html
<div class="form-group">
  <label for="full-name">
    Full Name <abbr title="required">*</abbr>
  </label>
  <input 
    type="text" 
    id="full-name" 
    name="fullName"
    required
    aria-required="true"
    aria-describedby="full-name-helper"
  >
  <span id="full-name-helper" class="form-helper">
    Please enter your first and last name
  </span>
  <span id="full-name-error" class="form-error" role="alert"></span>
</div>
```

### Select Dropdown

```html
<div class="form-group">
  <label for="subject">
    Subject <abbr title="required">*</abbr>
  </label>
  <select id="subject" name="subject" required aria-required="true">
    <option value="">-- Please select --</option>
    <option value="general">General Inquiry</option>
    <option value="accessibility">Accessibility Feedback</option>
  </select>
</div>
```

### Radio Button Group

```html
<fieldset>
  <legend>
    Contact Method <abbr title="required">*</abbr>
  </legend>
  
  <div>
    <input type="radio" id="contact-email" name="contactMethod" value="email" required>
    <label for="contact-email">Email</label>
  </div>
  
  <div>
    <input type="radio" id="contact-phone" name="contactMethod" value="phone">
    <label for="contact-phone">Phone</label>
  </div>
</fieldset>
```

### Checkbox with Links

```html
<input type="checkbox" id="terms" name="terms" required>
<label for="terms">
  I agree to the <a href="#terms">Terms</a> and 
  <a href="#privacy">Privacy Policy</a> <abbr title="required">*</abbr>
</label>
```

### Error State

```html
<!-- Added via JavaScript on validation error -->
<div class="form-group form-group--error">
  <label for="email">Email Address</label>
  <input 
    type="email" 
    id="email"
    aria-invalid="true"
    aria-describedby="email-helper email-error"
  >
  <span id="email-helper" class="form-helper">We'll never share your email</span>
  <span id="email-error" class="form-error" role="alert">
    Please enter a valid email address
  </span>
</div>
```

---

## 4. ARIA Usage Examples

ARIA is used **only where native HTML is insufficient**.

### aria-current (Active Navigation)

```html
<nav class="site-nav" aria-label="Primary navigation">
  <ul>
    <li><a href="index.html" aria-current="page">Home</a></li>
    <li><a href="views/data.html">Data</a></li>
  </ul>
</nav>
```
**Why:** Indicates current page to screen readers.

### aria-label (Navigation Distinction)

```html
<nav aria-label="Primary navigation">
  <!-- Main nav -->
</nav>

<nav aria-label="Footer navigation">
  <!-- Footer nav -->
</nav>
```
**Why:** Distinguishes multiple `<nav>` elements.

### aria-labelledby (Section Labels)

```html
<section aria-labelledby="features-heading">
  <h2 id="features-heading">Key Features</h2>
  <!-- Content -->
</section>
```
**Why:** Provides accessible name for generic containers.

### aria-describedby (Helper Text)

```html
<input 
  type="text"
  id="full-name"
  aria-describedby="full-name-helper full-name-error"
>
<span id="full-name-helper">Enter first and last name</span>
<span id="full-name-error" role="alert"></span>
```
**Why:** Associates helper text with input.

### role="alert" (Error Messages)

```html
<span class="form-error" role="alert">
  Please enter a valid email address
</span>
```
**Why:** Announces errors immediately to screen readers.

### aria-live (Dynamic Content)

```html
<div role="status" aria-live="polite" style="display: none;">
  <p>Success! Your message has been sent.</p>
</div>
```
**Why:** Announces dynamic content changes.

### aria-required (Required Fields)

```html
<input 
  type="text"
  required
  aria-required="true"
>
```
**Why:** Programmatic indication for assistive tech (belt and suspenders with HTML `required`).

### aria-invalid (Validation State)

```html
<input 
  type="email"
  aria-invalid="true"
>
```
**Why:** Indicates validation errors programmatically.

---

## 5. Keyboard-Operable Components

### Focus Management

```css
/* Remove default outline */
:focus {
  outline: none;
}

/* Custom focus for keyboard users */
:focus-visible {
  outline: 2px solid var(--color-focus-outline);
  outline-offset: 2px;
}

/* Form focus styles */
input:focus,
select:focus,
textarea:focus {
  border-color: var(--color-primary-600);
  box-shadow: 0 0 0 3px var(--color-focus-background);
}
```

### Button Patterns

```html
<!-- Primary button -->
<button type="submit" class="button button--primary">
  Send Message
</button>

<!-- Secondary button -->
<button type="reset" class="button button--secondary">
  Clear Form
</button>

<!-- Link styled as button -->
<a href="/page" class="button button--primary">
  View Page
</a>
```

---

## 6. Accessible Tables

```html
<table>
  <caption>WCAG 2.1 Conformance Requirements</caption>
  <thead>
    <tr>
      <th scope="col">Level</th>
      <th scope="col">Description</th>
      <th scope="col">Requirements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>Basic accessibility</td>
      <td>Text alternatives, keyboard access</td>
    </tr>
    <tr>
      <th scope="row">AA</th>
      <td>Ideal for most websites</td>
      <td>4.5:1 contrast, captions, headings</td>
    </tr>
  </tbody>
</table>
```

**Accessibility features:**
- `<caption>` - Table title
- `scope="col"` - Column headers
- `scope="row"` - Row headers

---

## Accessibility Checklist

### HTML Structure
- ✅ One `<h1>` per page
- ✅ Logical heading hierarchy (h1 → h2 → h3)
- ✅ Semantic landmarks on all pages
- ✅ Lists for navigation
- ✅ Skip link on every page

### Forms
- ✅ All inputs have `<label>` with `for` attribute
- ✅ Required fields marked (abbr + aria-required)
- ✅ Helper text associated (aria-describedby)
- ✅ Error messages with role="alert"
- ✅ Fieldsets group related controls

### Keyboard Navigation
- ✅ All interactive elements reachable via Tab
- ✅ Logical tab order
- ✅ Visible focus indicators
- ✅ No keyboard traps

### ARIA
- ✅ Used only where necessary
- ✅ aria-current for active links
- ✅ aria-label for navigation
- ✅ aria-describedby for associations
- ✅ role="alert" for errors

### Color & Contrast
- ✅ Text meets 4.5:1 minimum
- ✅ Focus indicators meet 3:1 minimum
- ✅ No color-only information

---

*Documentation for Advanced Web Development - Upload 1*
