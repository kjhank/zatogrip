import React from 'react';
import PropTypes from 'prop-types';

import { Posts } from '@containers';

const PostsPage = ({ pageContext }) => (
  <Posts
    cover={pageContext?.data?.header?.background}
    heading={pageContext?.data?.header?.heading}
    intro={pageContext?.data?.header?.intro}
    postLinkText={pageContext?.data?.linkText}
    posts={pageContext?.posts}
  />
);

PostsPage.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      header: PropTypes.shape({
        background: PropTypes.shape({}),
        heading: PropTypes.string,
        intro: PropTypes.string,
      }),
      linkText: PropTypes.string,
    }),
    posts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default PostsPage;
