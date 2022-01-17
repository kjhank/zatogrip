import React from 'react';
import PropTypes from 'prop-types';

export const WPImage = ({
  isLazy, image, ...props
}) => (
  <picture {...props}>
    <source
      srcSet={`${image?.url?.split('.').slice(0, -1)
        .join('.')}.webp`}
      type="image/webp"
    />
    <source
      srcSet={image?.url}
      type={`image/${image?.subtype}`}
    />
    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
    <img
      alt={image?.alt}
      height={image.height}
      loading={isLazy ? 'lazy' : 'eager'}
      src={image?.url}
      width={image.width}
    />
  </picture>

);

WPImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    height: PropTypes.number,
    subtype: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  isLazy: PropTypes.bool,
};

WPImage.defaultProps = {
  isLazy: true,
};
