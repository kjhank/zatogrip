import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import { Link } from 'gatsby';

import { Container } from '@components';
import {
  Excerpt, Grid, Image, Item, MoreText, Title, Wrapper,
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
            <Link to={`/${post.slug}/`}>
              <Title dangerouslySetInnerHTML={{ __html: sanitize(post.title) }} />
            </Link>
            <Excerpt>{post.excerpt}</Excerpt>
            <Link
              rel="nofollow"
              to={`/${post.slug}/`}
            >
              <MoreText customAs="div">{linkText}</MoreText>
            </Link>
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

