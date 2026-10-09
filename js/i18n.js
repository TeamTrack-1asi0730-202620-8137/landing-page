// Language switch (ES / EN)
// Spanish texts live in index.html; this file only holds the English version
// plus the messages that script.js builds at runtime (form validation).
(function () {
  const translations = {
    en: {
      meta: {
        title: 'FleetCare — Preventive maintenance for cargo fleets',
        description:
          "FleetCare connects the driver's daily checklist with the fleet manager's maintenance alerts, so no breakdown catches you by surprise on the road."
      },
      header: {
        homeAria: 'FleetCare - home',
        navAria: 'Main',
        langAria: 'Language',
        menuAria: 'Open menu'
      },
      nav: {
        product: 'Product',
        how: 'How it works',
        plans: 'Plans',
        about: 'About us',
        team: 'Team',
        contact: 'Contact'
      },
      cta: {
        login: 'Sign in',
        demo: 'Request a demo',
        tryDemo: 'Try the demo'
      },
      hero: {
        badge: 'New · Preventive maintenance SaaS',
        title: "Get ahead of your fleet's breakdowns before they happen on the road",
        lead: "FleetCare connects the driver's daily checklist with the fleet manager's maintenance alerts, so no breakdown catches you by surprise.",
        seeHow: 'See how it works',
        statAvailability: 'Availability ↑',
        statCosts: 'Costs ↓',
        statFailures: 'Breakdowns ↓',
        chartAria: 'Preview of the FleetCare dashboard',
        fleetStatus: 'Fleet status',
        good: 'Good',
        warning: 'Warning',
        critical: 'Critical'
      },
      about: {
        eyebrow: '— Get to know us',
        title: 'We are FleetCare',
        lead: 'Team Track was born to get ahead of breakdowns: FleetCare gives small light-cargo transport companies a centralized and reliable record of the wear of every unit in their fleet.',
        fact1: "of Peru's active cargo fleet operates in the penalty bracket",
        fact2: 'traffic accidents in 2023 caused by mechanical failures',
        fact3: 'of logistics SMEs still have only basic digital transformation'
      },
      team: {
        eyebrow: '— Our team',
        title: 'The people behind FleetCare',
        sub: 'We are Software Engineering students at UPC and together we are Team Track.',
        role: 'Software Engineering · UPC',
        bioFernanda:
          'Passionate about learning everything in her field, she sees every challenge as a chance to improve.',
        bioSantiago:
          'Interested in software development and solution design; works with HTML, CSS, SQL Server and MongoDB.',
        bioFernando:
          'Passionate about designing and coding with JavaScript, C++, SQL Server, MongoDB and frameworks like Vue and Angular.',
        bioMatthias:
          'Moves between user research, product design and technical implementation.',
        bioJuan:
          'Driven by building applications and taking on new technical challenges that keep the learning going.'
      },
      features: {
        eyebrow: '— What we offer',
        title: 'Everything your fleet needs',
        checklistTitle: 'Departure checklist',
        checklistText: 'The driver inspects the vehicle in seconds before every route, with no paperwork.',
        mileageTitle: 'Daily mileage',
        mileageText: 'Each unit updates its mileage to calculate the next maintenance.',
        photoTitle: 'Breakdown reports with photos',
        photoText: 'Photo evidence of every incident, ready for the fleet manager.',
        alertsTitle: 'Automatic alerts',
        alertsText: 'A heads-up before the oil change, brakes or any other service is due.',
        dashboardTitle: 'Health dashboard',
        dashboardText: 'A severity traffic light to decide which unit to service first.',
        fuelTitle: 'Fuel efficiency',
        fuelText: 'Consumption per unit to spot unexpected variations.'
      },
      how: {
        title: 'How does FleetCare work?',
        step1Title: 'Register your fleet',
        step1Text: 'Add each unit with its plate, model and initial mileage.',
        step2Title: 'Complete the departure checklist',
        step2Text: 'The driver inspects the vehicle from their phone in seconds.',
        step3Title: 'Get automatic alerts',
        step3Text: 'The platform warns you before a scheduled maintenance is due.',
        step4Title: 'Decide with the dashboard',
        step4Text: 'The fleet manager prioritizes the most urgent unit by severity.',
        actionTitle: 'FleetCare in action',
        actionSub: 'Adoption goal for the first month of the pilot',
        actionMetric: 'of drivers complete the checklist'
      },
      plans: {
        eyebrow: '— Plans',
        title: 'One simple plan, per vehicle',
        sub: 'Monthly subscription per vehicle. The price is quoted according to the size of your fleet — no fine print and no lock-in.',
        monthlyTitle: 'Monthly subscription',
        monthlyDesc: 'A single plan, per active vehicle in your fleet. No hidden costs.',
        priceLabel: 'Price per vehicle',
        priceValue: 'Custom quote based on your fleet',
        monthlyItem1: 'Departure checklist and mileage',
        monthlyItem2: 'Automatic maintenance alerts',
        monthlyItem3: 'Health dashboard per vehicle',
        quote: 'Request a quote',
        founderBadge: 'Founding fleets',
        founderTitle: 'For the first companies',
        founderDesc: 'Free months or a reduced price per vehicle for the first fleets that join the pilot.',
        founderLabel: 'Founder benefit',
        founderValue: 'Free months or reduced rate',
        founderItem1: 'Everything in the monthly plan',
        founderItem2: 'Close support from the team',
        join: 'Join as a founder'
      },
      testimonials: {
        eyebrow: '— Voices that guide the design',
        title: 'What our users want to solve',
        quote1: 'Now I schedule maintenance before it turns into a breakdown on the road.',
        quote2: 'Reporting a breakdown with a photo takes me seconds and proves I warned on time.',
        quote3: 'The severity traffic light tells me at a glance which unit to service first.',
        name: 'First Last',
        role1: 'Fleet manager',
        role2: 'Fleet driver',
        role3: 'Transport company'
      },
      faq: {
        title: 'We answer your questions',
        q1: 'Is FleetCare free?',
        a1: 'We offer a free demo. Paid plans are billed as a monthly subscription based on the number of vehicles in your fleet.',
        q2: 'How do I start using FleetCare?',
        a2: 'Request a demo and our team will help you register your fleet: each unit with its plate, model and initial mileage. Then your drivers can complete the departure checklist from their phones.',
        q3: 'Does it work with limited connectivity on the road?',
        a3: 'The checklist and breakdown report are designed to be completed in a few seconds, so drivers can submit them even with a weak signal before heading out.',
        q4: 'How does FleetCare prioritize alerts?',
        a4: 'Each unit is classified with a severity traffic light — good, warning or critical — based on its mileage, upcoming services and reported breakdowns, so you handle the most urgent one first.',
        q5: 'Is my data safe?',
        a5: "Your fleet's information is only accessible to the authorized users of your account, and we use it solely to calculate your units' maintenance."
      },
      contact: {
        eyebrow: '— Request a demo',
        title: 'Write to us',
        firstname: 'First name',
        lastname: 'Last name',
        email: 'Email',
        company: 'Transport company',
        message: 'Message',
        terms: 'I accept the terms and conditions',
        mail: 'Email',
        hours: 'Hours',
        hoursValue: 'Mon–Fri: 9am–6pm',
        location: 'Location',
        locationValue: 'Lima, Peru'
      },
      ctaBox: {
        title: "Start anticipating your fleet's maintenance",
        text: 'Book a demo with our team. No credit card required.'
      },
      footer: {
        tagline: 'Preventive maintenance and telematics for light-cargo fleets.',
        product: 'Product',
        features: 'Features',
        company: 'Company',
        terms: 'Terms',
        privacy: 'Privacy',
        claims: 'Complaints',
        rights: '© 2026 FleetCare. All rights reserved.',
        credit: 'Developed by Team Track · UPC'
      }
    }
  };

  // Runtime messages (not present in the HTML), in both languages.
  const messages = {
    es: {
      required: 'Este campo es obligatorio.',
      invalidEmail: 'Ingresa un correo válido.',
      messageRequired: 'Escribe tu mensaje.',
      termsRequired: 'Debes aceptar los términos y condiciones.',
      checkFields: 'Revisa los campos marcados en rojo.',
      success: '¡Gracias! Recibimos tu solicitud. Te contactaremos pronto para agendar tu demo.',
      photoAlt: 'Foto de {name}'
    },
    en: {
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
      messageRequired: 'Write your message.',
      termsRequired: 'You must accept the terms and conditions.',
      checkFields: 'Check the fields marked in red.',
      success: "Thank you! We received your request. We'll contact you soon to schedule your demo.",
      photoAlt: 'Photo of {name}'
    }
  };

  const LANG_KEY = 'fleetcare-lang';
  const SUPPORTED = ['es', 'en'];
  let currentLang = 'es';

  function lookup(lang, key) {
    return key.split('.').reduce((obj, part) => (obj ? obj[part] : undefined), translations[lang]);
  }

  function readStoredLang() {
    try {
      return localStorage.getItem(LANG_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      // Storage may be blocked (private mode); the switch still works for this visit.
    }
  }

  // Keep the original Spanish text of every translatable node so we can switch back.
  function rememberDefaults() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (el.dataset.i18nEs === undefined) el.dataset.i18nEs = el.textContent;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      if (el.dataset.i18nAriaEs === undefined) el.dataset.i18nAriaEs = el.getAttribute('aria-label') || '';
    });
    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      if (el.dataset.i18nContentEs === undefined) el.dataset.i18nContentEs = el.getAttribute('content') || '';
    });
  }

  function applyLang(lang) {
    currentLang = SUPPORTED.includes(lang) ? lang : 'es';
    const isEs = currentLang === 'es';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = isEs ? el.dataset.i18nEs : lookup(currentLang, el.dataset.i18n);
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const value = isEs ? el.dataset.i18nAriaEs : lookup(currentLang, el.dataset.i18nAria);
      if (value !== undefined) el.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const value = isEs ? el.dataset.i18nContentEs : lookup(currentLang, el.dataset.i18nContent);
      if (value !== undefined) el.setAttribute('content', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      el.setAttribute('alt', t('photoAlt').replace('{name}', el.dataset.name || ''));
    });

    document.documentElement.lang = currentLang;
    document.querySelectorAll('.lang-option').forEach((btn) => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: currentLang } }));
  }

  function t(key) {
    return messages[currentLang][key] || messages.es[key] || key;
  }

  rememberDefaults();
  applyLang(readStoredLang() || 'es');

  document.querySelectorAll('.lang-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      storeLang(btn.dataset.lang);
      applyLang(btn.dataset.lang);
    });
  });

  window.FleetCareI18n = { t, applyLang, getLang: () => currentLang };
})();
