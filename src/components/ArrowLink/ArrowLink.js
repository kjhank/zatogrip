import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import {
  Button, ExternalLink, Link,
} from './ArrowLink.styled';

export const ArrowLink = ({
  children, href, onClick, to, type, ...props
}) => {
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
  href: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
};

ArrowLink.defaultProps = {
  $isButton: false,
  $isCaps: false,
  href: null,
  onClick: null,
  to: null,
  type: 'button',
};
