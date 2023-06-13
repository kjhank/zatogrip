import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import {
  Button, Div, ExternalLink, Link,
} from './ArrowLink.styled';

export const ArrowLink = ({
  customAs, children, href, rel, onClick, to, type, ...props
}) => {
  if (customAs === 'div') {
    return (
      <Div {...props}>
        {children}
        {' '}
        <Arrow />
      </Div>
    );
  }

  if (!href && !to) {
    return (
      <Button
        onClick={onClick}
        type={type}
        {...props}
      >
        {children}
        <Arrow />
      </Button>
    );
  }

  if (href) {
    return (
      <ExternalLink
        href={href}
        rel={rel}
        {...props}
      >
        {children}
        <Arrow />
      </ExternalLink>
    );
  }

  return (
    <Link
      to={to}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
};

ArrowLink.propTypes = {
  $isButton: PropTypes.bool,
  $isCaps: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  customAs: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  rel: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
};

ArrowLink.defaultProps = {
  $isButton: false,
  $isCaps: false,
  customAs: null,
  href: null,
  onClick: () => {},
  rel: null,
  to: null,
  type: 'button',
};
