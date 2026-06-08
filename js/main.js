/**
 * =============================================================================
 * FILE HEADER: js/main.js
 * =============================================================================
 * Purpose:
 *   Main interactive scripting file for the Game Developer Portfolio website.
 *   Handles responsive navigation toggles, smooth scrolling, scroll-spy highlights,
 *   typewriter animation loop in the hero subtitle, auto-copyright year updating,
 *   and dynamically loading hover-video previews on project cards.
 *
 * Responsibilities:
 *   - Auto-initializes the footer copyright year based on current local system time.
 *   - Registers slide toggle handlers for the mobile hamburger navigation menu.
 *   - Implements back-to-top button visibility tracking and smooth click scrolling.
 *   - Handles anchor link offset calculations to prevent navbar overlap during smooth scroll.
 *   - Operates scroll-spy highlighting via IntersectionObserver to toggle '.active' state.
 *   - Manages character typewriter typing/erasing loop for the hero sub-header.
 *   - Injects, loads, and controls muted video loop previews on project thumbnail hover.
 *
 * Dependencies:
 *   - jQuery (v3+) - utilized for slide toggles, click events, and legacy animations.
 *   - IntersectionObserver API (Native modern browser support).
 *   - Bootstrap (JS wrapper modules for Carousel/Grid).
 *
 * Related Files:
 *   - index.html: contains matching DOM selectors (e.g. #footer-year, .project-media, .main-menu).
 *   - css/theme-cyber.css: declares styling for animations (.tw-cursor, .hover-video).
 *   - css/style.css: references base container variables and layouts.
 *
 * Usage:
 *   Loaded as a defer/standard script at the end of index.html. Initializes
 *   immediately on DOM ready event.
 * =============================================================================
 */

$(document).ready(function () {
  console.log('footer js initilized.');

  /**
   * ---------------------------------------------------------------------------
   * FUNCTION: Auto-update Copyright Year
   * ---------------------------------------------------------------------------
   * Description:
   *   Fetches the element '#footer-year' and updates its text content to display
   *   the current calendar year.
   * Why it exists:
   *   Ensures copyright statement in the footer remains updated without manual edits.
   * Inputs:
   *   None (reads system Date).
   * Outputs:
   *   None (directly modifies DOM element content).
   * Side effects:
   *   Modifies `#footer-year` element.
   * User interactions:
   *   None.
   * API interactions:
   *   Uses JavaScript standard Date API.
   * ---------------------------------------------------------------------------
   */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /**
   * ---------------------------------------------------------------------------
   * FUNCTION: Navigation Switch Event Handler (Hamburger Menu)
   * ---------------------------------------------------------------------------
   * Description:
   *   Toggles the visibility of the primary navigation menu on mobile devices.
   * Why it exists:
   *   Controls responsive header layout on viewport widths below 768px.
   * Inputs:
   *   - event: jQuery click event object.
   * Outputs:
   *   None (side-effect driven).
   * Side effects:
   *   Animates height of '.main-menu' via jQuery slideToggle. Prevents default link action.
   * User interactions:
   *   Triggered when clicking the hamburger menu icon ('.nav-switch').
   * API interactions:
   *   None.
   * ---------------------------------------------------------------------------
   */
  $('.nav-switch').on('click', function (event) {
    $('.main-menu').slideToggle(400);
    event.preventDefault();
  });

  /**
   * ---------------------------------------------------------------------------
   * FUNCTION: Accordion Panel Toggle Handler
   * ---------------------------------------------------------------------------
   * Description:
   *   Manages visual active classes for custom expandable panels.
   * Why it exists:
   *   Standard toggler behavior for accordions or collapse items.
   * Inputs:
   *   - e: Click event.
   * Outputs:
   *   None.
   * Side effects:
   *   Alters active class lists on '.panel-link' nodes.
   * User interactions:
   *   Triggered by user clicks on accordion titles ('.panel-link').
   * API interactions:
   *   None.
   * ---------------------------------------------------------------------------
   */
  $('.panel-link').on('click', function (e) {
    $('.panel-link').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
    e.preventDefault();
  });

  /**
   * ---------------------------------------------------------------------------
   * FUNCTION: backToTop
   * ---------------------------------------------------------------------------
   * Description:
   *   Installs a scroll-monitoring system that shows or hides the '.back-to-top'
   *   button, and registers a smooth animation click event to scroll back to top.
   * Why it exists:
   *   Aides user navigation by offering a single-click scroll-to-top option.
   * Inputs:
   *   None.
   * Outputs:
   *   None (sets scroll listner and click handler).
   * Side effects:
   *   - Adds scroll event listener to 'window'.
   *   - Animates body scroll properties on trigger.
   * User interactions:
   *   Clicking the floating '.back-to-top' element.
   * API interactions:
   *   None.
   * ---------------------------------------------------------------------------
   */
  backToTop();
  function backToTop() {
    // Hide initially on page load
    $(".back-to-top").css("display", "none");
    
    // Monitor scroll position to toggle visibility
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $(".back-to-top").fadeIn(300);
      } else {
        $(".back-to-top").fadeOut(300);
      }
    });
    
    // Smooth scroll event to top on click
    $(".back-to-top").click(function () {
      console.log('boom');
      $("html, body").animate({
        scrollTop: 0
      }, 500);
    });
  }

  /**
   * ---------------------------------------------------------------------------
   * FUNCTION: Navigation Anchor Link Smooth Scroll
   * ---------------------------------------------------------------------------
   * Description:
   *   Intercepts page-anchor clicks on menu items and smoothly scrolls to targets.
   * Why it exists:
   *   Improves portfolio navigation feel. Applies a -90px top-offset to prevent
   *   header/navbar clipping.
   * Inputs:
   *   - event: Event click wrapper.
   * Outputs:
   *   None.
   * Side effects:
   *   Animates body scroll index. Closes mobile sidebar overlay if viewport < 768px.
   * User interactions:
   *   Clicking nav links pointing to target sections (e.g. #hero, #projects).
   * API interactions:
   *   None.
   * ---------------------------------------------------------------------------
   */
  $('.main-menu a[href*=\\#]').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: ($(this.hash).offset().top) - 90 }, 800);

    // Auto-collapse header menu after item selection on mobile screens
    if ($(window).width() < 768) {
      $('.nav-switch').trigger('click');
    }
  });

  /**
   * ---------------------------------------------------------------------------
   * FUNCTION: Scroll-Spy: Active Link Observer (IIFE block)
   * ---------------------------------------------------------------------------
   * Description:
   *   Uses a native browser IntersectionObserver to track when section blocks
   *   are visible and toggles the active state of corresponding sidebar links.
   * Why it exists:
   *   Keeps sidebar navigation elements synchronized with reader's viewport location.
   * Inputs:
   *   None.
   * Outputs:
   *   None.
   * Side effects:
   *   Monitors multiple section containers; alters sidebar nav link CSS class lists.
   * User interactions:
   *   Triggered automatically as the user scrolls up or down.
   * API interactions:
   *   Uses browser native IntersectionObserver API.
   * ---------------------------------------------------------------------------
   */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.main-menu a.nav-link-item');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var activeId = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + activeId) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.2, rootMargin: '-60px 0px -40% 0px' });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /**
   * ---------------------------------------------------------------------------
   * FUNCTION: Typewriter Effect (Hero Subtitle Loop)
   * ---------------------------------------------------------------------------
   * Description:
   *   Animates text inside the main hero subtitle using an infinite, character-by-character
   *   typing and erasing loop, coupled with a blinking cyan cursor indicator.
   * Why it exists:
   *   Engaging header animation mimicking a console prompt / retro game UI terminal.
   * Inputs:
   *   None.
   * Outputs:
   *   None (runs continuously).
   * Side effects:
   *   Modifies hero H5 subtitle innerHTML repeatedly via recurring setTimeout calls.
   * User interactions:
   *   None.
   * API interactions:
   *   Uses standard setTimeout loop calls.
   * ---------------------------------------------------------------------------
   */
  (function () {
    var el = document.querySelector('.hero-section h5');
    if (!el) return;
    var fullText = el.textContent.trim();
    el.textContent = '';

    // Create container elements for typing letters and blinking cursor
    var textSpan = document.createElement('span');
    var cursorSpan = document.createElement('span');
    cursorSpan.className = 'tw-cursor';
    cursorSpan.textContent = '|';
    el.appendChild(textSpan);
    el.appendChild(cursorSpan);

    var i = 0, loopDelay = 2500, charSpeed = 55, eraseSpeed = 30;

    // Type character forward
    function typeChar() {
      if (i < fullText.length) {
        textSpan.textContent += fullText.charAt(i++);
        setTimeout(typeChar, charSpeed);
      } else {
        // Pause at completion before initiating erase cycle
        setTimeout(eraseChar, loopDelay);
      }
    }

    // Erase characters backward
    function eraseChar() {
      var t = textSpan.textContent;
      if (t.length > 0) {
        textSpan.textContent = t.slice(0, -1);
        setTimeout(eraseChar, eraseSpeed);
      } else {
        i = 0;
        setTimeout(typeChar, 400); // Small pause at empty state
      }
    }

    // Start typewriter sequence with initial buffer delay
    setTimeout(typeChar, 800);
  })();

  /**
   * ---------------------------------------------------------------------------
   * FUNCTION: Video Hover Preview Creator
   * ---------------------------------------------------------------------------
   * Description:
   *   Scans project card containers. For each card with a hidden Fancybox video popup,
   *   it duplicates the source, builds a local secondary video overlay tag configured for
   *   muted inline looping, and binds play/pause state transitions to mouseenter/mouseleave.
   * Why it exists:
   *   Provides instant, dynamic, interactive game visual previews on project card hover.
   * Inputs:
   *   None (queries DOM upon initialization).
   * Outputs:
   *   None (attaches standard events).
   * Side effects:
   *   - Injects new HTML5 `<video>` nodes into `.project-media` wrappers.
   *   - Binds mouseenter/mouseleave triggers.
   * User interactions:
   *   Hovering pointer over project thumbnails plays preview; moving it off pauses preview.
   * API interactions:
   *   HTMLMediaElement play/pause interfaces.
   * ---------------------------------------------------------------------------
   */
  document.querySelectorAll('.project-media').forEach(function (media) {
    // Identify target video details within card structure
    var hiddenVideo = media.querySelector('video[style*="display:none"]');
    if (!hiddenVideo) return;

    var src = hiddenVideo.querySelector('source');
    if (!src) return;

    // Construct duplicate preview video node
    var preview = document.createElement('video');
    preview.className = 'hover-video';
    preview.muted = true;
    preview.loop = true;
    preview.playsInline = true;
    preview.preload = 'none';

    var s = document.createElement('source');
    s.src = src.src;
    s.type = src.type || 'video/mp4';
    preview.appendChild(s);
    media.appendChild(preview);

    // Bind event controllers
    media.addEventListener('mouseenter', function () {
      preview.load();
      preview.play().catch(function () {});
    });
    media.addEventListener('mouseleave', function () {
      preview.pause();
      preview.currentTime = 0;
    });
  });

});
