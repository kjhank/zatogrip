import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import {
  Header, PostsGrid,
} from '@components/Posts';

export const Posts = ({
  cover, heading, intro, postLinkText, posts,
}) => (
  <Main>
    <Header
      cover={cover}
      heading={heading}
      intro={intro}
    />
    <PostsGrid
      linkText={postLinkText}
      posts={posts}
    />
  </Main>
);

Posts.propTypes = {
  cover: PropTypes.shape({}).isRequired,
  heading: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  postLinkText: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

