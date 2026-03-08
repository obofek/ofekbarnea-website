/* ===== ACCESSIBILITY WIDGET ===== */
(function () {
  'use strict';

  var STORAGE_KEY = 'a11y_settings';
  var MIN_SCALE = 100;
  var MAX_SCALE = 150;
  var STEP = 10;

  /* -- State -- */
  var defaults = {
    fontSize: 100,
    highContrast: false,
    grayscale: false,
    linksHighlight: false,
    readableSpacing: false,
    stopAnimations: false
  };

  function loadSettings() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) { /* ignore */ }
    return null;
  }

  function saveSettings(s) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) { /* ignore */ }
  }

  var state = loadSettings() || JSON.parse(JSON.stringify(defaults));

  /* -- Build DOM -- */
  function createWidget() {
    // Toggle button
    var toggle = document.createElement('button');
    toggle.className = 'a11y-toggle';
    toggle.setAttribute('aria-label', 'תפריט נגישות');
    toggle.innerHTML = '<i class="fa-solid fa-universal-access"></i>';

    // Panel
    var panel = document.createElement('div');
    panel.className = 'a11y-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'הגדרות נגישות');

    panel.innerHTML =
      '<div class="a11y-panel-header">' +
        '<h3 class="a11y-panel-title">נגישות</h3>' +
        '<button class="a11y-reset-btn" data-action="reset">איפוס</button>' +
      '</div>' +
      '<div class="a11y-font-row">' +
        '<span class="a11y-font-label">גודל טקסט</span>' +
        '<div class="a11y-font-controls">' +
          '<button class="a11y-font-btn" data-action="font-down" aria-label="הקטנת טקסט">-</button>' +
          '<span class="a11y-font-value" id="a11y-font-val">100%</span>' +
          '<button class="a11y-font-btn" data-action="font-up" aria-label="הגדלת טקסט">+</button>' +
        '</div>' +
      '</div>' +
      '<div class="a11y-options">' +
        '<div class="a11y-option" data-feature="highContrast">' +
          '<span class="a11y-option-icon"><i class="fa-solid fa-circle-half-stroke"></i></span>' +
          '<span>ניגודיות גבוהה</span>' +
        '</div>' +
        '<div class="a11y-option" data-feature="grayscale">' +
          '<span class="a11y-option-icon"><i class="fa-solid fa-droplet-slash"></i></span>' +
          '<span>גווני אפור</span>' +
        '</div>' +
        '<div class="a11y-option" data-feature="linksHighlight">' +
          '<span class="a11y-option-icon"><i class="fa-solid fa-link"></i></span>' +
          '<span>הדגשת קישורים</span>' +
        '</div>' +
        '<div class="a11y-option" data-feature="readableSpacing">' +
          '<span class="a11y-option-icon"><i class="fa-solid fa-text-width"></i></span>' +
          '<span>ריווח קריא</span>' +
        '</div>' +
        '<div class="a11y-option" data-feature="stopAnimations">' +
          '<span class="a11y-option-icon"><i class="fa-solid fa-pause"></i></span>' +
          '<span>עצירת אנימציות</span>' +
        '</div>' +
      '</div>';

    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    return { toggle: toggle, panel: panel };
  }

  /* -- Apply State to DOM -- */
  function applyState() {
    var html = document.documentElement;

    // Font size
    html.style.fontSize = state.fontSize + '%';
    var valEl = document.getElementById('a11y-font-val');
    if (valEl) valEl.textContent = state.fontSize + '%';

    // Toggle classes
    html.classList.toggle('a11y-high-contrast', !!state.highContrast);
    html.classList.toggle('a11y-grayscale', !!state.grayscale);
    html.classList.toggle('a11y-links-highlight', !!state.linksHighlight);
    html.classList.toggle('a11y-readable-spacing', !!state.readableSpacing);
    html.classList.toggle('a11y-stop-animations', !!state.stopAnimations);

    // Update active states on option buttons
    var options = document.querySelectorAll('.a11y-option[data-feature]');
    for (var i = 0; i < options.length; i++) {
      var feature = options[i].getAttribute('data-feature');
      options[i].classList.toggle('active', !!state[feature]);
    }

    saveSettings(state);
  }

  /* -- Events -- */
  function bindEvents(els) {
    var toggle = els.toggle;
    var panel = els.panel;

    // Open / close panel
    toggle.addEventListener('click', function () {
      panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', panel.classList.contains('open'));
    });

    // Close panel on outside click
    document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && !toggle.contains(e.target)) {
        panel.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) {
        panel.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Panel actions (event delegation)
    panel.addEventListener('click', function (e) {
      var target = e.target.closest('[data-action], [data-feature]');
      if (!target) return;

      var action = target.getAttribute('data-action');
      var feature = target.getAttribute('data-feature');

      if (action === 'font-up') {
        if (state.fontSize < MAX_SCALE) state.fontSize += STEP;
      } else if (action === 'font-down') {
        if (state.fontSize > MIN_SCALE) state.fontSize -= STEP;
      } else if (action === 'reset') {
        state = JSON.parse(JSON.stringify(defaults));
      } else if (feature) {
        state[feature] = !state[feature];
      }

      applyState();
    });
  }

  /* -- Init -- */
  function init() {
    var els = createWidget();
    applyState();
    bindEvents(els);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
