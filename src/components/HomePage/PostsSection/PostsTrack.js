import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import {
  Excerpt,
  PostCover,
  PostLink,
  PostsList,
  PostTitle,
  SinglePost,
} from './PostsSection.styled';

export const PostsTrack = ({
  clickText,
  innerRef,
  posts,
}) => (
  <PostsList ref={innerRef}>
    {posts.map(({
      acf, slug, title: { rendered: title },
    }) => (
      <SinglePost key={slug}>
        {acf.homeThumb && <PostCover image={acf.homeThumb} />}
        <PostTitle>{title}</PostTitle>
        {acf.excerpt && <Excerpt>{acf.excerpt}</Excerpt>}
        <PostLink to={`/${slug}`}>
          {clickText}
          <Arrow />
        </PostLink>
      </SinglePost>
    ))}
  </PostsList>
);

PostsTrack.propTypes = {
  clickText: PropTypes.string.isRequired,
  innerRef: PropTypes.shape({}).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

