import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import {
  Excerpt, Heading, PostCover, PostLink, PostsList, PostTitle, RelatedContent, SinglePost,
} from './Related.styled';

const sanitizeConfig = { allowedTags: [] };

export const Related = ({
  articles, heading,
}) => (
  <RelatedContent>
    <Container>
      <Heading>{heading}</Heading>
      <PostsList>
        {articles?.map(article => (
          <SinglePost key={article.post_name}>
            {article?.thumbnail && <PostCover image={article.thumbnail} />}
            <PostTitle
              dangerouslySetInnerHTML={{ __html: sanitize(article.post_title, sanitizeConfig) }}
            />
            {article?.excerpt && <Excerpt>{article.excerpt}</Excerpt>}
            <PostLink to={`/${article.post_name}`}>
              Czytaj więcej
            </PostLink>
          </SinglePost>
        ))}
      </PostsList>
    </Container>
  </RelatedContent>
);

Related.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  heading: PropTypes.string.isRequired,
};
