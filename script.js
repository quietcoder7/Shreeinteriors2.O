/**
 * Shree Interiors - Interactive Script
 * Domain: shreeinteriors.in
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
      } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
      }
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
      });
    });
  }

  // 3. Interactive Budget Estimator
  const homeTypeButtons = document.querySelectorAll('#homeTypeOptions .option-btn');
  const packageButtons = document.querySelectorAll('#packageTierOptions .option-btn');
  const estimatedPriceEl = document.getElementById('estimatedPrice');

  let baseCost = 240000; // default 1BHK
  let multiplier = 1.0;  // default Essential

  function calculateEstimate() {
    const minVal = Math.round((baseCost * multiplier) / 100000 * 10) / 10;
    const maxVal = Math.round((baseCost * multiplier * 1.3) / 100000 * 10) / 10;
    if (estimatedPriceEl) {
      estimatedPriceEl.textContent = `₹${minVal} Lakhs - ₹${maxVal} Lakhs*`;
    }
  }

  homeTypeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      homeTypeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      baseCost = parseFloat(btn.getAttribute('data-cost'));
      calculateEstimate();
    });
  });

  packageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      packageButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      multiplier = parseFloat(btn.getAttribute('data-multiplier'));
      calculateEstimate();
    });
  });

  // 4. Portfolio Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. FAQ Accordion Logic
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = question.classList.contains('active');

      // Close other open questions
      faqQuestions.forEach(q => {
        q.classList.remove('active');
        if (q.nextElementSibling) {
          q.nextElementSibling.style.maxHeight = null;
        }
      });

      if (!isOpen) {
        question.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 6. Modal Pop-up Handlers
  const modal = document.getElementById('consultationModal');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtn = document.getElementById('closeModalBtn');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.add('active');
    });
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Close on overlay background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // 7. Form Submission & Toast Notifications
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Handle Hero Form
  const heroForm = document.getElementById('heroLeadForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('heroName').value;
      showToast(`Thank you, ${name}! Your design consultation has been requested.`);
      heroForm.reset();
    });
  }

  // Handle Modal Form
  const modalForm = document.getElementById('modalLeadForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalName').value;
      if (modal) modal.classList.remove('active');
      showToast(`Thank you, ${name}! We'll contact you within 2 hours.`);
      modalForm.reset();
    });
  }
});