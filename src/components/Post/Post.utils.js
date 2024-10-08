export const postSanitizeConfig = {
  allowedAttributes: {
    a: [
      'href',
      'rel',
    ],
    img: [
      'alt',
      'height',
      'loading',
      'sizes',
      'src',
      'srcset',
      'width',
    ],
  },
  allowedTags: [
    'a',
    'b',
    'em',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'i',
    'img',
    'li',
    'ol',
    'p',
    'strong',
    'ul',
    'table',
    'tbody',
    'td',
    'th',
    'thead',
    'tr',
    'tfoot',
  ],
};
