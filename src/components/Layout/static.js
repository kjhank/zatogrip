export const COOKIES_LS_KEY = 'cookies-agreed';

export const topNavigation = [
  {
    section: 'usps',
    text: 'Właśnie za to',
    type: 'scroll',
  },
  {
    hasSubmenu: true,
    highlightType: [
      'page',
      'products',
    ],
    section: 'products',
    text: 'Za te produkty',
    type: 'scroll',
  },
  {
    highlightType: [
      'post',
      'posts',
    ],
    section: 'support',
    text: 'Za to wsparcie',
    type: 'scroll',
    url: '/strefa-rodzica/',
  },
  {
    section: 'fun',
    text: 'I zabawę',
    type: 'scroll',
  },
  {
    highlightType: ['page'],
    text: 'Kontakt',
    type: 'link',
    url: '/kontakt/',
  },
];

export const SCROLL_DEBOUNCE = 300;
