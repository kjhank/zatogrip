/* eslint-disable sort-keys */
import React from 'react';
import PropTypes from 'prop-types';
import {
  css, ThemeProvider,
} from 'styled-components';

const theme = {
  borderRadii: {
    large: '200px',
    larger: '90px',
    default: '50px',
    mediumPlus: '40px',
    medium: '30px',
    small: '25px',
    smaller: '20px',
    tiny: '11px',
  },
  colors: {
    accent: '#eb097d',
    alt: '#00572c',
    copy: '#b9b9b9',
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
    alt: 'Montserrat, sans-serif',
    default: 'Proxima Nova, sans-serif',
    heading: 'Swis721BdRndEU, serif',
  },
  getColor: variant => theme.colors[variant],
  getFont: (variant = 'default') => theme.fonts[variant],
  getGradient: (direction = 'right', offset = 50) => (direction === 'radial' ?
    `radial-gradient(circle at ${offset}%, ${theme.colors.gradient.from} 30%, ${theme.colors.gradient.to})` :
    `linear-gradient(
      to ${direction},
      ${theme.colors.gradient.from},
      ${theme.colors.gradient.to}
    )`),
  getLinkStyles: (color = '#fff') => css`
    position: relative;

    ::after {
      content: '';
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      height: 0.1em;
      background-color: ${color};
      background-position: center;
      background-repeat: no-repeat;
      transition: ${theme.getTransitions(['transform'])};
      transform: scaleX(0) translate3d(0, 0, 0);
      transform-origin: right;
    }

    :hover {
      ::after {
        transform: scaleX(1) translate3d(0, 0, 0);
        transform-origin: left;
      }
    }
  `,
  getRadius: (variant = 'default') => theme.borderRadii[variant],
  getSectionBorder: (color = theme.getColor('alt')) => css`
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${color.replace('#', '%23')}' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    background-position: bottom;
    background-size: 100% 1px;
    background-repeat: no-repeat;
  `,
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
