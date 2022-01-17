import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';

import {
  ArrowWrapper,
  Product, ProductGroup, ProductLink, ProductsList,
} from './ProductsSection.styled';

export const List = ({ products }) => (
  <ProductsList>
    {products.filter(({ group }) => group === 'first').map(product => (
      <ProductGroup key={product.linkText}>
        <Product>
          <ProductLink
            to={`/${product.product.post_name}`}
            variant={product.product.post_title.split(' ').slice(-1)
              .join()
              .toLowerCase()}
          >
            {product.linkText}
            {' '}
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </ProductLink>
        </Product>
      </ProductGroup>
    ))}
    {products.filter(({ group }) => group === 'second').map(product => (
      <ProductGroup key={product.linkText}>
        <Product>
          <ProductLink
            to={`/${product.product.post_name}`}
            variant={product.product.post_title.split(' ').slice(-1)
              .join()
              .toLowerCase()}
          >
            {product.linkText}
            {' '}
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </ProductLink>
        </Product>
      </ProductGroup>
    ))}
    {products.filter(({ group }) => group === 'third').map(product => (
      <ProductGroup key={product.linkText}>
        <Product>
          <ProductLink
            to={`/${product.product.post_name}`}
            variant={product.product.post_title.split(' ').slice(-1)
              .join()
              .toLowerCase()}
          >
            {product.linkText}
            {' '}
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </ProductLink>
        </Product>
      </ProductGroup>
    ))}
  </ProductsList>
);

List.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

