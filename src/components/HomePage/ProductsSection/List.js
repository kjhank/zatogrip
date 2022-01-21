import React from 'react';
import PropTypes from 'prop-types';

import {
  Arrow, Ellipses,
} from '@icons';

import {
  ArrowWrapper,
  Package,
  Product,
  ProductGroup,
  ProductLink,
  ProductsList,
} from './ProductsSection.styled';

export const List = ({ products }) => (
  <ProductsList>
    <ProductGroup>
      {products.filter(({ group }) => group === 'first').map(product => (
        <Product key={product.linkText}>
          <Package
            className={`variant--${product.color}`}
            image={product.image}
          />
          <Package
            $isMobile
            className={`variant--${product.color}`}
            image={product.imageMobile}
          />
          <ProductLink
            to={`/${product.product.post_name}`}
            variant={product.color}
          >
            <Ellipses />
            {product.linkText}
            {' '}
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </ProductLink>
        </Product>
      ))}
    </ProductGroup>
    <ProductGroup>
      {products.filter(({ group }) => group === 'second').map(product => (
        <Product key={product.linkText}>
          <Package
            className={`variant--${product.color}`}
            image={product.image}
          />
          <Package
            $isMobile
            className={`variant--${product.color}`}
            image={product.imageMobile}
          />
          <ProductLink
            to={`/${product.product.post_name}`}
            variant={product.color}
          >
            <Ellipses />
            {product.linkText}
            {' '}
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </ProductLink>
        </Product>
      ))}
    </ProductGroup>
    <ProductGroup>
      {products.filter(({ group }) => group === 'third').map(product => (
        <Product key={product.linkText}>
          <Package
            className={`variant--${product.color}`}
            image={product.image}
          />
          <Package
            $isMobile
            className={`variant--${product.color}`}
            image={product.imageMobile}
          />
          <ProductLink
            to={`/${product.product.post_name}`}
            variant={product.color}
          >
            <Ellipses />
            {product.linkText}
            {' '}
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </ProductLink>
        </Product>
      ))}
    </ProductGroup>
  </ProductsList>
);

List.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

