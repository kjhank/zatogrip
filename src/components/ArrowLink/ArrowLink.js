import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import {
  Button, ExternalLink, Link,
} from './ArrowLink.styled';

export const ArrowLink = ({
  $isButton, $isCaps, children, href, onClick, to, ...props
}) => {
  if ($isButton) {
    return (
      <Button
        $isCaps={$isCaps}
        onClick={onClick}
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
        $isCaps={$isCaps}
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
      $isCaps={$isCaps}
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
};

ArrowLink.defaultProps = {
  $isButton: false,
  $isCaps: false,
  href: null,
  onClick: null,
  to: null,
};
