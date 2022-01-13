import { mediaQueries } from '@utils/rwd';

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
