import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import {
  Arrow, Background, BottomText, Heading, Section,
} from './HeroSection.styled';

const sanitizeConfig = {
  allowedTags: [
    'br',
    'strong',
  ],
};

export const HeroSection = ({ content }) => (
  <Section>
    <Background
      image={content.background}
      isLazy={false}
    />
    <Container>
      <Heading dangerouslySetInnerHTML={{
        __html: sanitize(content.heading, sanitizeConfig),
      }}
      />
      <BottomText>{content.bottomText}</BottomText>
      <Arrow />
    </Container>
  </Section>
);

HeroSection.propTypes = {
  content: PropTypes.shape({
    background: PropTypes.shape({}),
    bottomText: PropTypes.string,
    heading: PropTypes.string,
  }).isRequired,
};

