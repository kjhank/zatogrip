import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Ellipses } from '@icons';
import {
  ArrowLink, BulletList, Container,
} from '@components';
import {
  Box,
  BoxPortrait,
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
  background,
  backgroundPortrait,
  box,
  boxPortrait,
  description,
  footnotes,
  hasPortraitBox,
  heading,
  links,
  list,
  pageSlug,
}) => {
  const splitSlug = pageSlug.split('-');
  const variant = splitSlug.at(-1);

  return (
    <Wrapper>
      <CoverPortrait image={backgroundPortrait} />
      <TopWrapper>
        <Cover
          image={background}
          isLazy={false}
        />
        <Container>
          <ContentWrapper className={`variant--${pageSlug}`}>
            <Box
              $isShownInPortrait={!hasPortraitBox}
              className={`variant--${pageSlug}`}
              image={box}
              isLazy={false}
            />
            {hasPortraitBox && (
            <BoxPortrait
              className={`variant--${pageSlug}-portrait`}
              image={boxPortrait}
              isLazy={false}
            />
            )}
            <Heading
              className={`variant--${pageSlug}`}
              variant={variant}
            >
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
            {links?.length && links?.map(({ link }) => (
              <ArrowLink
                href={link.url}
                key={link.title}
                rel="noreferrer nofollow"
                target="_blank"
              >
                {link.title}
              </ArrowLink>
            ))}
          </LinksWrapper>
          <Footnotes>
            <ol>
              {footnotes?.length &&
              footnotes?.map(({ footnote }) => <li key={footnote}>{footnote}</li>)}
            </ol>
          </Footnotes>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {
  background: PropTypes.shape({}).isRequired,
  backgroundPortrait: PropTypes.shape({}).isRequired,
  box: PropTypes.shape({}).isRequired,
  boxPortrait: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  description: PropTypes.string.isRequired,
  footnotes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]).isRequired,
  hasPortraitBox: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  links: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]).isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  pageSlug: PropTypes.string.isRequired,
};
