import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import {
  ContentWrapper, Cover, Heading, IntroWrapper, Wrapper,
} from './Header.styled';

export const Header = ({
  background,
  // backgroundPortrait, // TODO: get this from designers
  headings, intro, introHeading,
}) => (
  <Wrapper>
    <Cover
      image={background}
      isLazy={false}
    />
    <ContentWrapper>
      <Heading>
        {headings.map((heading, index) => (
          <span
            className={`heading--${index}`}
            key={heading}
          >
            {heading}
          </span>
        ))}
      </Heading>
    </ContentWrapper>
    <Container>
      <IntroWrapper>
        <h2>{introHeading}</h2>
        <p>{sanitize(intro, { allowedTags: [] })}</p>
      </IntroWrapper>
    </Container>
  </Wrapper>
);

Header.propTypes = {
  background: PropTypes.shape({}).isRequired,
  // backgroundPortrait: PropTypes.shape({}).isRequired,
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  intro: PropTypes.string.isRequired,
  introHeading: PropTypes.string.isRequired,
};
