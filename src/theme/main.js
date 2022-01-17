/* eslint-disable sort-keys */
import React from 'react';
import PropTypes from 'prop-types';
import {
  css, ThemeProvider,
} from 'styled-components';

const theme = {
  borderRadii: {
    large: '200px',
    larger: '100px',
    default: '50px',
    mediumPlus: '40px',
    medium: '33px',
    small: '25px',
    smaller: '20px',
    tiny: '11px',
  },
  colors: {
    accent: '#eb097d',
    alt: '#00572c',
    copy: '#b9B9b9',
    dim: '#ededed',
    gradient: {
      from: '#007d30',
      to: '#00572C',
    },
    highlight: '#005b31',
    light: '#d5d5d5',
    link: '#559303',
    main: '#717171',
    products: {
      baby: '#5a9407',
      forte: '#00461c',
      header: '#202020',
      junior: '#005b30',
      kids: '#008134',
      mini: '#82b41b',
    },
  },
  fonts: {
    default: 'Proxima Nova, sans-serif',
    heading: 'Barlow, sans-serif',
  },
  getColor: variant => theme.colors[variant],
  getFont: (variant = 'default') => theme.fonts[variant],
  getGradient: (direction = 'right') => (direction === 'radial' ?
    `radial-gradient(circle at 50%, ${theme.colors.gradient.from} 40%, ${theme.colors.gradient.to})` :
    `linear-gradient(
      to ${direction},
      ${theme.colors.gradient.from},
      ${theme.colors.gradient.to}
    )`),
  getLinkStyles: () => css`
    position: relative;

    ::after {
      content: '';
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      height: 2px;
      border-radius: 1px;
      background-image: linear-gradient(#fff, #fff);
      background-position: center;
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: ${({ theme: { transitions } }) => `background-size ${transitions.duration}`};
    }

    :hover {
      ::after {
        background-size: 100% 100%;
      }
    }
  `,
  getRadius: (variant = 'default') => theme.borderRadii[variant],
  getTransitions: (properties, duration) => properties.map(property => `${property} ${theme.transitions[duration] || theme.transitions.duration}`).join(', '),
  transitions: {
    duration: '0.4s',
    fastDuration: '0.2s',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
