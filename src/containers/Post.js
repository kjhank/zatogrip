import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import {
  Body, Header, Related,
} from '@components/Post';

export const Post = ({
  body, cover, footnotes, relatedPosts, title,
}) => (
  <Main>
    <Header
      cover={cover}
      title={title}
    />
    <Body
      body={body}
      footnotes={footnotes}
    />
    <Related
      articles={relatedPosts?.articles}
      heading={relatedPosts?.heading}
    />
  </Main>
);

Post.propTypes = {
  body: PropTypes.string.isRequired,
  cover: PropTypes.shape({}).isRequired,
  footnotes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]).isRequired,
  relatedPosts: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.shape({})),
    heading: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

