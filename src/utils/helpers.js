import {
  useEffect, useRef,
} from 'react';

import { queries } from './rwd';

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const isMobile = !!(isBrowser &&
  window.matchMedia(queries.touch).matches &&
  window.matchMedia(queries.s).matches);

export const debounceFunction = (func, delay) => {
  let timer;

  function debounced(...args) {
    const self = this;

    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  }

  return debounced;
};

export const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
