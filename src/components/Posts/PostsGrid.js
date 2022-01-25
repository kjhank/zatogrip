import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import {
  Excerpt, Grid, Image, Item, Link, Title, Wrapper,
} from './PostsGrid.styled';

export const PostsGrid = ({
  linkText, posts,
}) => (
  <Wrapper>
    <Container>
      <Grid>
        {posts.map(post => (
          <Item key={post.slug}>
            <Image image={post.cover} />
            <Title dangerouslySetInnerHTML={{ __html: sanitize(post.title) }} />
            <Excerpt>{post.excerpt}</Excerpt>
            <Link to={`/${post.slug}/`}>{linkText}</Link>
          </Item>
        ))}
      </Grid>
    </Container>
  </Wrapper>
);

PostsGrid.propTypes = {
  linkText: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

