import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Ellipses } from '@icons';
import {
  ArrowLink, BulletList, Container,
} from '@components';
import {
  Box,
  ContentWrapper,
  Cover,
  CoverPortrait,
  Description,
  Footnotes,
  Heading,
  LinksWrapper,
  TopWrapper,
  Wrapper,
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
  background, backgroundPortrait, box, description, footnotes, heading, links, list, pageSlug,
}) => (
  <Wrapper>
    <CoverPortrait image={backgroundPortrait} />
    <TopWrapper>
      <Cover
        image={background}
        isLazy={false}
      />
      <Container>
        <ContentWrapper>
          <Box
            className={`variant--${pageSlug}`}
            image={box}
            isLazy={false}
          />
          <Heading variant={pageSlug.split('-').at(-1)}>
            <span>{heading}</span>
            <Ellipses />
          </Heading>
          <Description
            dangerouslySetInnerHTML={{ __html: sanitize(description, sanitizeConfig) }}
          />
          <BulletList items={list} />
        </ContentWrapper>
      </Container>
    </TopWrapper>
    <Container>
      <ContentWrapper>
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
  backgroundPortrait: PropTypes.shape({}).isRequired,
  box: PropTypes.shape({}).isRequired,
  description: PropTypes.string.isRequired,
  footnotes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  heading: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  pageSlug: PropTypes.string.isRequired,
};

