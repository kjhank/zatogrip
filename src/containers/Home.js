import React from 'react';
import PropTypes from 'prop-types';

import {
  FunSection, HeroSection, PostsSection, ProductsSection, TilesSection, VideoSection,
} from '@components/HomePage';
import { Main } from '@components/styled';

export const Home = ({
  fun, headerHeight, hero, navItems, posts, products, tiles, video,
}) => (
  <Main>
    <HeroSection
      content={hero}
      headerHeight={headerHeight}
    />
    <TilesSection
      content={tiles}
      innerRef={navItems.find(({ section }) => section === 'usps').innerRef}
    />
    <ProductsSection
      content={products}
      innerRef={navItems.find(({ section }) => section === 'products').innerRef}
    />
    <VideoSection
      content={video}
    />
    <PostsSection
      content={posts}
      innerRef={navItems.find(({ section }) => section === 'support').innerRef}
    />
    <FunSection
      content={fun}
      innerRef={navItems.find(({ section }) => section === 'fun').innerRef}
    />
  </Main>
);

Home.propTypes = {
  fun: PropTypes.shape({}).isRequired,
  headerHeight: PropTypes.string.isRequired,
  hero: PropTypes.shape({}).isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  posts: PropTypes.shape({}).isRequired,
  products: PropTypes.shape({}).isRequired,
  tiles: PropTypes.shape({}).isRequired,
  video: PropTypes.shape({}).isRequired,
};

