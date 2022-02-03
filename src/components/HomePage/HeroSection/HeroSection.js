import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import {
  Background, Heading, PortraitBackground, Section,
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
    <PortraitBackground
      $isMobile
      image={content.backgroundPortrait}
      isLazy={false}
    />
    <Container>
      <Heading dangerouslySetInnerHTML={{
        __html: sanitize(content.heading, sanitizeConfig),
      }}
      />
    </Container>
  </Section>
);

HeroSection.propTypes = {
  content: PropTypes.shape({
    background: PropTypes.shape({}),
    backgroundPortrait: PropTypes.shape({}),
    bottomText: PropTypes.string,
    heading: PropTypes.string,
  }).isRequired,
};

