import React from 'react';
import PropTypes from 'prop-types';

import { Home } from '@containers';

const HomePage = ({
  headerHeight,
  navItems, pageContext: {
    data, posts,
  }, pageContext,
}) => (
  <Home
    ctxSize={JSON.stringify(pageContext).length}
    fun={data.funSection}
    headerHeight={headerHeight}
    hero={data.hero}
    navItems={navItems}
    posts={{
      ...data.postsSection,
      posts,
    }}
    products={data.productsSection}
    tiles={{
      ...data.tilesSection,
      arrowText: data?.hero?.bottomText,
    }}
    video={data.videoSection}
  />
);

HomePage.propTypes = {
  headerHeight: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.shape({})),
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      funSection: PropTypes.shape({}),
      hero: PropTypes.shape({
        bottomText: PropTypes.string,
      }),
      postsSection: PropTypes.shape({}),
      productsSection: PropTypes.shape({}),
      tilesSection: PropTypes.shape({}),
      videoSection: PropTypes.shape({}),
    }),
    posts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

HomePage.defaultProps = {
  headerHeight: '0px',
  navItems: null,
};

export default HomePage;
