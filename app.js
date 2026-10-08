/* Zoxid Mini market — interactions & i18n */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------------- i18n ---------------- */
  var STRINGS = {
    uz: null, // captured from the DOM (source of truth)
    ru: {
      skip: 'Перейти к основному содержанию',
      brandSub: 'Минимаркет',
      navAbout: 'О нас',
      navServices: 'Услуги',
      navReviews: 'Отзывы',
      navLocation: 'Адрес',
      navContact: 'Контакты',
      call: 'Позвонить',
      heroEyebrow: 'Гиждуван, Узбекистан',
      heroTitle1: 'Zoxid Mini market',
      heroTitle2: 'удобные ежедневные покупки',
      heroLead: 'Найдите всё нужное рядом с домом. Простота, удобство и дружелюбный сервис — в одном месте.',
      ctaCall: 'Позвонить',
      ctaRoute: 'Построить маршрут',
      ratingMeta: '1 отзыв · Google Maps',
      aboutKicker: 'О нас',
      aboutTitle: 'Местное удобство каждый день',
      aboutP1: 'Zoxid Mini market — магазин в городе Гиждуван. Мы делаем ежедневные покупки для местных жителей простыми и удобными.',
      aboutP2: 'Дружелюбное отношение, понятный порядок и команда, готовая помочь — ждём вас здесь. Если есть вопрос, просто позвоните нам.',
      floatTitle: 'Gijduvan Gijn',
      floatSub: 'адрес в Google Maps',
      feat1: 'Удобный адрес и маршрут',
      feat2: 'Дружелюбный сервис',
      feat3: 'Всё для каждого дня в одном месте',
      srvKicker: 'Услуги',
      srvTitle: 'Что вы найдёте',
      srvLead: 'Основные отделы для ежедневных покупок — под одной крышей.',
      srv1t: 'Продукты питания',
      srv1d: 'Основные товары для домашнего стола.',
      srv2t: 'Фрукты и овощи',
      srv2d: 'Свежий выбор каждый день.',
      srv3t: 'Молочные и мясные продукты',
      srv3d: 'Ассортимент в холодильнике.',
      srv4t: 'Хлеб и сладости',
      srv4d: 'Всё нужное для чайного стола.',
      srv5t: 'Напитки',
      srv5d: 'Вода, соки и другие напитки.',
      srv6t: 'Товары для дома',
      srv6d: 'Хозяйственные и гигиенические товары.',
      revKicker: 'Отзывы',
      revTitle: 'Мнение клиентов важно для нас',
      revLead: 'Ваши оценки и отзывы помогают нам становиться лучше. Оставить отзыв можно в Google Maps.',
      revCta: 'Смотреть в Google Maps',
      rcCount: '1 отзыв',
      revQuote: 'Zoxid Mini market — магазин с оценкой 5.0 в Google Maps.',
      rcSource: 'Источник: листинг Google Maps',
      locKicker: 'Адрес',
      locTitle: 'Найдите нас',
      locLead: 'Нажмите на карту или постройте маршрут в Google Maps.',
      mapOpen: 'Открыть в Google Maps',
      lcAddrLabel: 'Адрес',
      lcAddr: 'Gijduvan Gijn, Uzbekistan',
      lcAddrHint: 'Нажмите — откроется маршрут',
      lcPhoneLabel: 'Телефон',
      lcPhoneHint: 'Нажмите — позвоните',
      lcRateLabel: 'Оценка Google',
      lcRateHint: '1 отзыв',
      lcPlusLabel: 'Plus Code',
      footText: 'Удобный магазин для ежедневных покупок в Гиждуване.',
      footNav: 'Разделы',
      footContact: 'Контакты',
      footMaps: 'Профиль в Google Maps',
      footLang: 'Язык',
      footNote: 'Гиждуван, Узбекистан'
    },
    en: {
      skip: 'Skip to main content',
      brandSub: 'Mini market',
      navAbout: 'About',
      navServices: 'Services',
      navReviews: 'Reviews',
      navLocation: 'Location',
      navContact: 'Contact',
      call: 'Call',
      heroEyebrow: 'Gijduvon, Uzbekistan',
      heroTitle1: 'Zoxid Mini market',
      heroTitle2: 'easy everyday shopping',
      heroLead: 'Find what you need close to home. Simplicity, convenience and friendly service — all in one place.',
      ctaCall: 'Call us',
      ctaRoute: 'Get directions',
      ratingMeta: '1 review · Google Maps',
      aboutKicker: 'About us',
      aboutTitle: 'Local convenience, every day',
      aboutP1: 'Zoxid Mini market is a store in Gijduvon. We make everyday shopping simple and convenient for local residents.',
      aboutP2: 'A friendly attitude, an easy-going atmosphere and a team ready to help — that is what waits for you here. Got a question? Just give us a call.',
      floatTitle: 'Gijduvan Gijn',
      floatSub: 'Google Maps address',
      feat1: 'Convenient address and route',
      feat2: 'Friendly service',
      feat3: 'Everyday essentials in one place',
      srvKicker: 'Services',
      srvTitle: 'What you will find',
      srvLead: 'The main departments for everyday shopping — under one roof.',
      srv1t: 'Daily groceries',
      srv1d: 'Everyday staples for your table.',
      srv2t: 'Fruit and vegetables',
      srv2d: 'A fresh selection every day.',
      srv3t: 'Dairy and meat',
      srv3d: 'Chilled everyday choice.',
      srv4t: 'Bread and sweets',
      srv4d: 'Everything for the tea table.',
      srv5t: 'Drinks',
      srv5d: 'Water, juice and other drinks.',
      srv6t: 'Household essentials',
      srv6d: 'Household and personal care items.',
      revKicker: 'Reviews',
      revTitle: 'What customers say matters to us',
      revLead: 'Your ratings and reviews help us get better. You can leave a review on Google Maps.',
      revCta: 'View on Google Maps',
      rcCount: '1 review',
      revQuote: 'Zoxid Mini market holds a 5.0 rating on Google Maps.',
      rcSource: 'Source: Google Maps listing',
      locKicker: 'Location',
      locTitle: 'Find us',
      locLead: 'Tap the map or get directions in Google Maps.',
      mapOpen: 'Open in Google Maps',
      lcAddrLabel: 'Address',
      lcAddr: 'Gijduvan Gijn, Uzbekistan',
      lcAddrHint: 'Tap to open directions',
      lcPhoneLabel: 'Phone',
      lcPhoneHint: 'Tap to call',
      lcRateLabel: 'Google rating',
      lcRateHint: '1 review',
      lcPlusLabel: 'Plus Code',
      footText: 'A convenient store for everyday shopping in Gijduvon.',
      footNav: 'Sections',
      footContact: 'Contact',
      footMaps: 'Google Maps profile',
      footLang: 'Language',
      footNote: 'Gijduvon, Uzbekistan'
    }
  };

  var META = {
    uz: {
      title: 'Zoxid Mini market — Gʻijduvondagi savdo doʻkoni | Kunlik xarid',
      desc: 'Zoxid Mini market — Gʻijduvondagi mini market. Kunlik oziq-ovqat, meva va sabzavot, ichimliklar va uy uchun kerakli narsalar. Telefon: +998 33 185 35 35.'
    },
    ru: {
      title: 'Zoxid Mini market — минимаркет в Гиждуване | Ежедневные покупки',
      desc: 'Zoxid Mini market — минимаркет в Гиждуване. Продукты, фрукты и овощи, напитки и товары для дома. Телефон: +998 33 185 35 35.'
    },
    en: {
      title: 'Zoxid Mini market — grocery store in Gijduvon | Everyday shopping',
      desc: 'Zoxid Mini market is a mini market in Gijduvon. Daily groceries, fruit and vegetables, drinks and household essentials. Phone: +998 33 185 35 35.'
    }
  };

  var i18nNodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var langButtons = Array.prototype.slice.call(document.querySelectorAll('.lang-btn'));

  STRINGS.uz = {};
  i18nNodes.forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (STRINGS.uz[k] === undefined) STRINGS.uz[k] = el.textContent.trim();
  });

  function applyLang(lang) {
    var dict = STRINGS[lang] || STRINGS.uz;
    i18nNodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var v = dict[k] !== undefined ? dict[k] : STRINGS.uz[k];
      if (v !== undefined) el.textContent = v;
    });

    document.documentElement.lang = lang;
    var m = META[lang] || META.uz;
    document.title = m.title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', m.desc);

    langButtons.forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    try { localStorage.setItem('zx-lang', lang); } catch (e) {}
  }

  langButtons.forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var saved = null;
  try { saved = localStorage.getItem('zx-lang'); } catch (e) {}
  if (!saved) {
    var nav = (navigator.language || 'uz').slice(0, 2).toLowerCase();
    saved = STRINGS[nav] ? nav : 'uz';
  }
  applyLang(saved);

  /* ---------------- header state ---------------- */
  var header = document.getElementById('header');
  var mobileCall = document.querySelector('.mobile-call');

  function onScrollHeader() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    header.classList.toggle('is-stuck', y > 24);
    if (mobileCall) mobileCall.classList.toggle('is-on', y > 560);
  }

  /* ---------------- parallax (transform based) ---------------- */
  var pNodes = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var hero = document.getElementById('hero');
  var ticking = false;

  function parallax() {
    ticking = false;
    if (reduceMotion.matches) return;
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var heroH = hero ? hero.offsetHeight : 0;
    if (y > heroH) return;
    var mobile = window.innerWidth < 768;
    pNodes.forEach(function (el) {
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0;
      if (mobile) speed *= 0.45;
      el.style.setProperty('--py', (y * speed).toFixed(2) + 'px');
    });
  }

  function onScroll() {
    onScrollHeader();
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(parallax);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { parallax(); }, { passive: true });
  onScrollHeader();
  parallax();

  reduceMotion.addEventListener && reduceMotion.addEventListener('change', function () {
    if (reduceMotion.matches) {
      pNodes.forEach(function (el) { el.style.setProperty('--py', '0px'); });
    } else {
      parallax();
    }
  });

  /* ---------------- reveal on scroll ---------------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- mobile nav ---------------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  function closeNav() {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeNav();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav();
  });

  /* ---------------- misc ---------------- */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
