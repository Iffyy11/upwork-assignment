/**
 * Accessibility JavaScript
 * Minimal enhancements for keyboard navigation and focus management
 */

(function() {
  'use strict';

  // Skip Link Functionality
  function initSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.getElementById('main');

    if (skipLink && mainContent) {
      skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // Active Navigation Link
  // Sets aria-current="page" on current page link
  function initActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.site-nav a');
    
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      
      if (currentPath === linkPath || 
          (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // External Link Indicators
  function initExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
      if (!link.hasAttribute('aria-label')) {
        const text = link.textContent.trim();
        link.setAttribute('aria-label', `${text} (opens in new window)`);
      }
    });
  }

  // Focus Visible Polyfill
  // Adds .focus-visible class for better keyboard focus control
  function initFocusVisible() {
    let hadKeyboardEvent = false;

    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) return;
      hadKeyboardEvent = true;
    }

    function onPointerDown() {
      hadKeyboardEvent = false;
    }

    function onFocus(e) {
      if (hadKeyboardEvent) {
        e.target.classList.add('focus-visible');
      }
    }

    function onBlur(e) {
      e.target.classList.remove('focus-visible');
    }

    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('focus', onFocus, true);
    document.addEventListener('blur', onBlur, true);
  }

  // Initialize all accessibility features
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    initSkipLink();
    initActiveNavigation();
    initExternalLinks();
    initFocusVisible();

    console.log('Accessibility enhancements initialized');
  }

  // Start
  init();

})();
