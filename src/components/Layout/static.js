export const COOKIES_LS_KEY = 'cookies-agreed';

export const topNavigation = [
  {
    section: 'usps',
    text: 'Dlaczego Zatogrip',
    type: 'scroll',
  },
  {
    hasSubmenu: true,
    highlightType: [
      'page',
      'products',
    ],
    section: 'products',
    text: 'Produkty',
    type: 'scroll',
  },
  {
    highlightType: [
      'post',
      'posts',
    ],
    section: 'support',
    text: 'Wiedza i porady',
    type: 'scroll',
    url: '/strefa-rodzica/',
  },
  {
    section: 'fun',
    text: 'Zabawa',
    type: 'scroll',
  },
  {
    highlightType: ['page'],
    text: 'Kontakt',
    type: 'link',
    url: '/kontakt/',
  },
  {
    hasUkrFlag: true,
    text: 'Про продукти ',
    type: 'link',
    url: '/ua/',
  },
];

export const SCROLL_DEBOUNCE = 300;
