export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

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
