/**
 * HOPESWAY REDESIGN — MAIN JAVASCRIPT
 * Features:
 * 1. 2-Option Picker Tab Switcher (NDIS Support vs Aged Care) with keyboard a11y.
 * 2. Scroll-Triggered Staggered Fade-Up for 6 Service Cards (IntersectionObserver).
 * 3. Accessible 3-Item Testimonial Carousel (Auto-advance 5s, hover pause, touch swipe, controls).
 * 4. Quick Enquiry Modal with focus management and ESC trap.
 * 5. Mobile Navigation Drawer Toggle.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     0. Hero Hub Interactive Preview Switcher
     ------------------------------------------------------------------------ */
  window.switchHubPreview = function(type) {
    const btnNdis = document.getElementById('hub-btn-ndis');
    const btnAged = document.getElementById('hub-btn-aged');
    const titleEl = document.getElementById('hub-preview-title');
    const badgeEl = document.getElementById('hub-preview-badge');
    const descEl = document.getElementById('hub-preview-desc');
    const chipsEl = document.getElementById('hub-preview-chips');

    if (!btnNdis || !btnAged || !titleEl || !descEl) return;

    if (type === 'ndis') {
      btnNdis.classList.add('active');
      btnAged.classList.remove('active');
      titleEl.textContent = 'Living with a disability?';
      badgeEl.textContent = 'SIL & Coordination';
      descEl.textContent = 'We help untangle your NDIS plan and match you with caring, dependable workers who support your everyday choices.';
      chipsEl.innerHTML = `
        <span class="visual-chip" style="font-size: 0.75rem; padding: 4px 8px;">🏠 Supported Living</span>
        <span class="visual-chip" style="font-size: 0.75rem; padding: 4px 8px;">📋 Plan Coordination</span>
        <span class="visual-chip" style="font-size: 0.75rem; padding: 4px 8px;">🌴 Respite Breaks</span>
      `;
    } else {
      btnAged.classList.add('active');
      btnNdis.classList.remove('active');
      titleEl.textContent = 'Caring for aging parents?';
      badgeEl.textContent = 'Home Care & CHSP';
      descEl.textContent = 'Gentle morning showers, medication prompts, cooking, and rides so your loved ones stay safely in their beloved home.';
      chipsEl.innerHTML = `
        <span class="visual-chip" style="font-size: 0.75rem; padding: 4px 8px;">☕ In-Home Visits</span>
        <span class="visual-chip" style="font-size: 0.75rem; padding: 4px 8px;">🚗 Safe Rides</span>
        <span class="visual-chip" style="font-size: 0.75rem; padding: 4px 8px;">❤️ Gentle Personal Care</span>
      `;
    }
  };

  /* ------------------------------------------------------------------------
     1. Header Scroll Shadow
     ------------------------------------------------------------------------ */
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     2. Mobile Navigation Toggle
     ------------------------------------------------------------------------ */
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileDrawer.classList.toggle('is-open', !isExpanded);
    });

    // Close mobile drawer when clicking a link inside it
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.classList.remove('is-open');
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. 2-Option Picker (NDIS Support vs Aged Care)
     ------------------------------------------------------------------------ */
  const pickerTabs = document.querySelectorAll('.picker-tab-btn');
  const pickerPanels = document.querySelectorAll('.picker-tab-panel');

  if (pickerTabs.length > 0 && pickerPanels.length > 0) {
    pickerTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetPanelId = tab.getAttribute('aria-controls');

        // Update Tab States
        pickerTabs.forEach(t => {
          const isTarget = t === tab;
          t.setAttribute('aria-selected', String(isTarget));
          t.setAttribute('tabindex', isTarget ? '0' : '-1');
        });

        // Update Panel States
        pickerPanels.forEach(panel => {
          if (panel.id === targetPanelId) {
            panel.classList.add('active');
            panel.removeAttribute('hidden');
          } else {
            panel.classList.remove('active');
            panel.setAttribute('hidden', '');
          }
        });
      });

      // Keyboard arrow navigation between tabs
      tab.addEventListener('keydown', (e) => {
        let index = Array.from(pickerTabs).indexOf(tab);
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          const nextTab = pickerTabs[(index + 1) % pickerTabs.length];
          nextTab.focus();
          nextTab.click();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prevTab = pickerTabs[(index - 1 + pickerTabs.length) % pickerTabs.length];
          prevTab.focus();
          prevTab.click();
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. Scroll-Triggered Staggered Fade-Up for Service Cards (300ms, 80ms stagger)
     ------------------------------------------------------------------------ */
  const serviceCards = document.querySelectorAll('.service-card');

  if (serviceCards.length > 0) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      // Immediate visibility without animation
      serviceCards.forEach(card => card.classList.add('is-visible'));
    } else {
      const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            const delay = index * 80; // 80ms stagger as specified in design rules
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      serviceCards.forEach((card, i) => {
        card.setAttribute('data-index', String(i));
        cardObserver.observe(card);
      });
    }
  }

  /* ------------------------------------------------------------------------
     5. 3-Item Testimonial Carousel (Auto-advance 5s, pause on hover)
     ------------------------------------------------------------------------ */
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dots = document.querySelectorAll('.carousel-dot');
  const carouselRegion = document.querySelector('.carousel-container');

  if (carouselTrack && slides.length > 0) {
    let currentIndex = 0;
    let autoAdvanceTimer = null;
    const slideInterval = 5000; // 5 seconds
    const totalSlides = slides.length;

    function goToSlide(index) {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      const offsetPercent = -(currentIndex * 100);
      carouselTrack.style.transform = `translateX(${offsetPercent}%)`;

      // Update dot states
      dots.forEach((dot, idx) => {
        const isActive = idx === currentIndex;
        dot.setAttribute('aria-selected', String(isActive));
        dot.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      // Update slides aria-hidden
      slides.forEach((slide, idx) => {
        slide.setAttribute('aria-hidden', String(idx !== currentIndex));
      });
    }

    function startAutoAdvance() {
      if (prefersReducedMotion) return;
      stopAutoAdvance();
      autoAdvanceTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, slideInterval);
    }

    function stopAutoAdvance() {
      if (autoAdvanceTimer) {
        clearInterval(autoAdvanceTimer);
        autoAdvanceTimer = null;
      }
    }

    // Previous & Next Button events
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        stopAutoAdvance();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        stopAutoAdvance();
      });
    }

    // Dot indicators
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const targetIndex = parseInt(dot.getAttribute('data-slide-to') || '0', 10);
        goToSlide(targetIndex);
        stopAutoAdvance();
      });
    });

    // Pause on mouse hover and keyboard focus
    if (carouselRegion) {
      carouselRegion.addEventListener('mouseenter', stopAutoAdvance);
      carouselRegion.addEventListener('mouseleave', startAutoAdvance);
      carouselRegion.addEventListener('focusin', stopAutoAdvance);
      carouselRegion.addEventListener('focusout', startAutoAdvance);

      // Mobile Touch Swipe Handling
      let touchStartX = 0;
      let touchEndX = 0;

      carouselRegion.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoAdvance();
      }, { passive: true });

      carouselRegion.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diffX = touchStartX - touchEndX;
        if (Math.abs(diffX) > 45) {
          if (diffX > 0) {
            goToSlide(currentIndex + 1); // Swiped Left
          } else {
            goToSlide(currentIndex - 1); // Swiped Right
          }
        }
        startAutoAdvance();
      }, { passive: true });
    }

    // Initialize slide states
    goToSlide(0);
    startAutoAdvance();
  }

  /* ------------------------------------------------------------------------
     6. Quick Enquiry Modal (Accessible Focus Trap & Barista Confirmation)
     ------------------------------------------------------------------------ */
  const modalOverlay = document.getElementById('enquiryModal');
  const modalOpenBtns = document.querySelectorAll('[data-open-enquiry-modal]');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const enquiryForm = document.getElementById('quickEnquiryForm');
  let previouslyFocusedElement = null;

  function openModal(preselectedService = '') {
    if (!modalOverlay) return;
    previouslyFocusedElement = document.activeElement;
    
    if (preselectedService && enquiryForm) {
      const serviceSelect = enquiryForm.querySelector('#serviceInterest');
      if (serviceSelect) {
        serviceSelect.value = preselectedService;
      }
    }

    modalOverlay.classList.add('is-active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first interactive element in modal
    setTimeout(() => {
      const firstInput = modalOverlay.querySelector('input, select, button');
      if (firstInput) firstInput.focus();
    }, 100);
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
      previouslyFocusedElement.focus();
    }
  }

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service-name') || '';
      openModal(service);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    // Keyboard ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
        closeModal();
      }
    });
  }

  // Form submission handling (Barista tone response)
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = enquiryForm.querySelector('#fullName');
      const senderName = nameInput ? nameInput.value.trim() : 'there';
      
      const modalBody = modalOverlay.querySelector('.modal-content');
      if (modalBody) {
        modalBody.innerHTML = `
          <div style="text-align: center; padding: 24px 8px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: #EAF4F1; color: #2E6B5E; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 style="font-size: 1.5rem; margin-bottom: 8px; color: #1C2B2B;">Thanks a bunch, ${senderName}!</h3>
            <p style="font-size: 1.05rem; color: #4A5568; line-height: 1.6; max-width: 440px; margin: 0 auto 24px auto;">
              We've got your note safe and sound. One of our friendly Pimpama team members will give you a warm buzz or reply within 15 minutes during normal business hours. Take care until then!
            </p>
            <button type="button" class="btn-secondary" id="closeSuccessBtn" style="margin: 0 auto;">Done, thanks!</button>
          </div>
        `;

        const closeSuccessBtn = document.getElementById('closeSuccessBtn');
        if (closeSuccessBtn) {
          closeSuccessBtn.addEventListener('click', closeModal);
          closeSuccessBtn.focus();
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     7. Services Page: Scroll-Triggered Fade-In & Sticky Nav ScrollSpy
     ------------------------------------------------------------------------ */
  const serviceDetailSections = document.querySelectorAll('.service-detail-section');
  const sideNavLinks = document.querySelectorAll('.side-nav-link');

  if (serviceDetailSections.length > 0) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      serviceDetailSections.forEach(sec => sec.classList.add('is-visible'));
    } else {
      // 1. Entrance Fade-in Observer
      const detailObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      serviceDetailSections.forEach(sec => detailObserver.observe(sec));
    }

    // 2. ScrollSpy for Sticky Side Nav
    if (sideNavLinks.length > 0 && 'IntersectionObserver' in window) {
      const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            sideNavLinks.forEach(link => {
              const href = link.getAttribute('href').replace('#', '');
              if (href === currentId) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, {
        threshold: 0.25,
        rootMargin: '-80px 0px -40% 0px'
      });

      serviceDetailSections.forEach(sec => spyObserver.observe(sec));
    }
  }
});
