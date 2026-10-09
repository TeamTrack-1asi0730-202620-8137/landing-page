// Mobile menu toggle
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const t = window.FleetCareI18n.t;

menuToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

header.querySelectorAll('.main-nav a, .header-actions a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
    });

    item.classList.toggle('open', !isOpen);
    question.setAttribute('aria-expanded', String(!isOpen));
  });
});

// Demo request form validation + simulated submit
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
let feedbackKey = null;

function setError(field, message) {
  const wrapper = field.closest('.form-field');
  const errorEl = wrapper ? wrapper.querySelector('.field-error') : null;
  if (wrapper) wrapper.classList.toggle('has-error', Boolean(message));
  if (errorEl) errorEl.textContent = message || '';
}

function setFeedback(key, type) {
  feedbackKey = key;
  feedback.textContent = key ? t(key) : '';
  feedback.className = key ? `form-feedback ${type}` : 'form-feedback';
}

function validateForm() {
  let isValid = true;

  const { firstname, lastname, email, company, message, terms } = form;

  [firstname, lastname, company].forEach((field) => {
    if (!field.value.trim()) {
      setError(field, t('required'));
      isValid = false;
    } else {
      setError(field, '');
    }
  });

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    setError(email, t('required'));
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    setError(email, t('invalidEmail'));
    isValid = false;
  } else {
    setError(email, '');
  }

  if (!message.value.trim()) {
    setError(message, t('messageRequired'));
    isValid = false;
  } else {
    setError(message, '');
  }

  if (!terms.checked) {
    setFeedback('termsRequired', 'error');
    isValid = false;
  }

  return isValid;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!validateForm()) {
    if (form.terms.checked) setFeedback('checkFields', 'error');
    return;
  }

  setFeedback('success', 'success');
  form.reset();
});

// Re-translate visible validation messages when the language changes
document.addEventListener('languagechange', () => {
  if (form.querySelector('.form-field.has-error')) validateForm();
  if (feedbackKey) feedback.textContent = t(feedbackKey);
});
