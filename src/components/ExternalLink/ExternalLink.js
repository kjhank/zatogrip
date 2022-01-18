import React from 'react';
import PropTypes from 'prop-types';

export const ExternalLink = ({
  children, href, ...props
}) => (
  <a
    href={href}
    rel="noreferrer"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  href: PropTypes.string.isRequired,
};
