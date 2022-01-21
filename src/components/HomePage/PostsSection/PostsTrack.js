import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Arrow } from '@icons';
import {
  Excerpt,
  PostCover,
  PostLink,
  PostsList,
  PostTitle,
  SinglePost,
} from './PostsSection.styled';

const sanitizeConfig = {
  allowedTags: [],
};

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
        <PostTitle dangerouslySetInnerHTML={{ __html: sanitize(title, sanitizeConfig) }} />
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

