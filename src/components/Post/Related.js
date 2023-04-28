import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import { Link } from 'gatsby';

import { Container } from '@components';
import {
  Excerpt, Heading, MoreText, PostCover, PostsList, PostTitle, RelatedContent, SinglePost,
} from './Related.styled';

const sanitizeConfig = { allowedTags: [] };

export const Related = ({
  articles, heading,
}) => (
  <RelatedContent>
    <Container>
      {articles.length > 1 ?
        (
          <>
            <Heading>{heading}</Heading>
            <PostsList>
              {articles?.map(article => (
                <SinglePost key={article.post_name}>
                  {article?.thumbnail && <PostCover image={article.thumbnail} />}
                  <Link to={`/${article.post_name}`}>
                    <PostTitle
                      dangerouslySetInnerHTML={{
                        __html: sanitize(
                          article.post_title, sanitizeConfig
                        ),
                      }}
                    />
                  </Link>
                  {article?.excerpt && <Excerpt>{article.excerpt}</Excerpt>}
                  <Link
                    rel="nofollow"
                    to={`/${article.post_name}`}
                  >
                    <MoreText>Czytaj więcej</MoreText>
                  </Link>
                </SinglePost>
              ))}
            </PostsList>
          </>
        ) :
        null}
    </Container>
  </RelatedContent>
);

Related.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  heading: PropTypes.string.isRequired,
};
