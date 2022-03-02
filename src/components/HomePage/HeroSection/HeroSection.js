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
      image={content?.backgroundImage}
      isLazy={false}
    />
    <PortraitBackground
      $isMobile
      image={content?.backgroundPortraitImage}
      isLazy={false}
    />
    <Container>
      <Heading dangerouslySetInnerHTML={{
        __html: sanitize(content?.heading, sanitizeConfig),
      }}
      />
    </Container>
  </Section>
);

HeroSection.propTypes = {
  content: PropTypes.shape({
    backgroundImage: PropTypes.shape({}),
    backgroundPortraitImage: PropTypes.shape({}),
    bottomText: PropTypes.string,
    heading: PropTypes.string,
  }).isRequired,
};

