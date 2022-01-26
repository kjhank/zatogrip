import React from 'react';
import PropTypes from 'prop-types';

import { Home } from '@containers';

const HomePage = ({
  navItems, pageContext: {
    data, posts,
  }, pageContext,
}) => (
  <Home
    ctxSize={JSON.stringify(pageContext).length}
    fun={data.funSection}
    hero={data.hero}
    navItems={navItems}
    posts={{
      ...data.postsSection,
      posts,
    }}
    products={data.productsSection}
    tiles={data.tilesSection}
    video={data.videoSection}
  />
);

HomePage.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({})),
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      funSection: PropTypes.shape({}),
      hero: PropTypes.shape({}),
      postsSection: PropTypes.shape({}),
      productsSection: PropTypes.shape({}),
      tilesSection: PropTypes.shape({}),
      videoSection: PropTypes.shape({}),
    }),
    posts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

HomePage.defaultProps = {
  navItems: null,
};

export default HomePage;
