import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { NewBadge } from '@components/styled';
import {
  ProductImage as Image,
  ProductLink as Link,
  ProductsList as List,
  ProductName as Name,
  SingleProduct as Product,
  ProductsMenuWrapper as Wrapper,
} from './GlobalHeader.styled';

export const ProductsMenu = ({
  handleMouse, isVisible, products,
}) => (
  <Wrapper
    isVisible={isVisible}
    onMouseLeave={event => handleMouse(event, 'submenu')}
  >
    <Container>
      <List>
        {products?.map(product => {
          const { isnew: isNew } = product;

          return (
            <Product
              className={product.colorSlug.value.toLowerCase()}
              key={product.product.ID}
            >
              {isNew ? <NewBadge>Nowość</NewBadge> : null}
              <Link to={`/${product.product.post_name}/`}>
                <Image
                  className={`submenu-variant--${product.colorSlug.value.toLowerCase()}`}
                  image={product.image}
                />
                <Name variant={product.colorSlug.value.toLowerCase()}>
                  ZATO
                  <strong>GRIP</strong>
                  <br />
                  <span>{product.colorSlug.label}</span>
                </Name>
              </Link>
            </Product>
          );
        })}
      </List>
    </Container>
  </Wrapper>
);

ProductsMenu.propTypes = {
  handleMouse: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

