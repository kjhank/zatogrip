/* eslint-disable sort-keys */

export const breakpoints = {
  xhuge: 1800,
  huge: 1650,
  xxl: 1450,
  xl: 1300,
  l: 1100,
  m: 920,
  s: 800,
  xs: 700,
  xxsplus: 512,
  xxs: 400,
  tiny: 360,
};

const queries = {
  landscape: '(orientation: landscape)',
  nonTouch: '(pointer: fine)',
  touch: '(hover: none) and (pointer: coarse)',
  portrait: '(orientation: portrait)',
};

/* eslint-enable sort-keys */

const mfQueries = {
  ...queries,
};

Object.keys(breakpoints).forEach(size => {
  queries[size] = `(max-width: ${breakpoints[size]}px)`;
});

Object.keys(breakpoints).forEach(size => {
  mfQueries[size] = `(min-width: ${breakpoints[size]}px)`;
});

export {
  queries,
  mfQueries,
};
