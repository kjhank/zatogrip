import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  ArrowLink, BulletList, Container,
} from '@components';
import {
  Box, ContentWrapper, Cover, Description, Footnotes, Heading, LinksWrapper, Wrapper,
} from './Header.styled';

const sanitizeConfig = {
  allowedTags: [
    'b',
    'strong',
    'em',
    'i',
    'p',
  ],
};

export const Header = ({
  background, box, description, footnotes, heading, links, list,
}) => (
  <Wrapper>
    <Cover
      image={background}
      isLazy={false}
    />
    <Container>
      <Box
        image={box}
        isLazy={false}
      />
      <ContentWrapper>
        <Heading>{heading}</Heading>
        <Description dangerouslySetInnerHTML={{ __html: sanitize(description, sanitizeConfig) }} />
        <BulletList items={list} />
        <LinksWrapper>
          {links.map(({ link }) => (
            <ArrowLink
              href={link.url}
              key={link.title}
              rel="noreferrer"
              target="_blank"
            >
              {link.title}
            </ArrowLink>
          ))}
        </LinksWrapper>

        <Footnotes>
          <ol>
            {footnotes.map(({ footnote }) => <li key={footnote}>{footnote}</li>)}
          </ol>
        </Footnotes>
      </ContentWrapper>
    </Container>
  </Wrapper>
);

Header.propTypes = {
  background: PropTypes.shape({}).isRequired,
  box: PropTypes.shape({}).isRequired,
  description: PropTypes.string.isRequired,
  footnotes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  heading: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

