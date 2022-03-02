import React from 'react';
import PropTypes from 'prop-types';

import {
  Arrow, Ellipses,
} from '@icons';

import {
  ArrowWrapper,
  Package,
  PackagePortrait,
  Product,
  ProductGroup,
  ProductLink,
  ProductsList,
} from './ProductsSection.styled';

export const List = ({ products }) => (
  <ProductsList>
    <ProductGroup>
      {products?.filter(({ group }) => group === 'first')?.map(product => (
        <Product
          className={`variant--${product.color}`}
          key={product.linkText}
        >
          <Package
            className={`variant--${product.color}`}
            image={product.image}
          />
          <PackagePortrait
            className={`variant--${product.color}`}
            image={product.imageMobile}
          />
          <ProductLink
            to={`/${product.product.post_name}`}
            variant={product.color}
          >
            <Ellipses />
            <span>{product.linkText}</span>
            {' '}
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </ProductLink>
        </Product>
      ))}
    </ProductGroup>
    <ProductGroup>
      {products?.filter(({ group }) => group === 'second')?.map(product => (
        <Product
          className={`variant--${product.color}`}
          key={product.linkText}
        >
          <Package
            className={`variant--${product.color}`}
            image={product.image}
          />
          <PackagePortrait
            className={`variant--${product.color}`}
            image={product.imageMobile}
          />
          <ProductLink
            to={`/${product.product.post_name}`}
            variant={product.color}
          >
            <Ellipses />
            <span>{product.linkText}</span>
            {' '}
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </ProductLink>
        </Product>
      ))}
    </ProductGroup>
    <ProductGroup>
      {products?.filter(({ group }) => group === 'third')?.map(product => (
        <Product
          className={`variant--${product.color}`}
          key={product.linkText}
        >
          <Package
            className={`variant--${product.color}`}
            image={product.image}
          />
          <PackagePortrait
            className={`variant--${product.color}`}
            image={product.imageMobile}
          />
          <ProductLink
            to={`/${product.product.post_name}`}
            variant={product.color}
          >
            <Ellipses />
            <span>{product.linkText}</span>
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

