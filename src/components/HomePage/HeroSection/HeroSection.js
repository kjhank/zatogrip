import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { HeaderLogo } from '@icons';
import {
  Background, Heading, PortraitBackground, Section,
} from './HeroSection.styled';

import { TripleBrag } from './TripleBrag';

export const HeroSection = ({
  content, headerHeight,
}) => (
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
      <Heading insetBlockStart={headerHeight}>
        <HeaderLogo />
        <br />
        <span className="heading--subtitle">
          wspiera trening
          <br />
          odporności
          <sup>*</sup>
        </span>
        <p className="heading--small">
          Wirusy i bakterie
          <br />
          dzieciom niestraszne
        </p>
      </Heading>
      <TripleBrag />
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
  headerHeight: PropTypes.string.isRequired,
};

