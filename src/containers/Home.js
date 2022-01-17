import React from 'react';
import PropTypes from 'prop-types';

import {
  HeroSection, ProductsSection, TilesSection,
} from '@components/HomePage';
import { Main } from '@components/styled';

export const Home = ({
  fun, hero, navItems, posts, products, tiles, video,
}) => (
  <Main>
    <HeroSection content={hero} />
    <TilesSection
      content={tiles}
      innerRef={navItems.find(({ section }) => section === 'usps').innerRef}
    />
    <ProductsSection
      content={products}
      innerRef={navItems.find(({ section }) => section === 'products').innerRef}
    />
  </Main>
);

Home.propTypes = {
  fun: PropTypes.shape({}).isRequired,
  hero: PropTypes.shape({}).isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  posts: PropTypes.shape({}).isRequired,
  products: PropTypes.shape({}).isRequired,
  tiles: PropTypes.shape({}).isRequired,
  video: PropTypes.shape({}).isRequired,
};

