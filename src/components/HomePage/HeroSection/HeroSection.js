import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { HeaderLogo } from '@icons';
import sanitize from 'sanitize-html';
import {
  Background, Heading, PortraitBackground, Section,
} from './HeroSection.styled';

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
        {content?.heading ?
          (
            <span
              className="heading--subtitle"
              dangerouslySetInnerHTML={{
                __html: sanitize(content.heading, {
                  allowedTags: [
                    'br',
                    'sup',
                  ],
                }),
              }}
            />
          ) :
          null}
        {content?.smallcopy ?
          (
            <p
              className="heading--small"
              dangerouslySetInnerHTML={{ __html: sanitize(content.smallcopy, { allowedTags: ['br'] }) }}
            />
          ) :
          null}
      </Heading>
    </Container>
  </Section>
);

HeroSection.propTypes = {
  content: PropTypes.shape({
    backgroundImage: PropTypes.shape({}),
    backgroundPortraitImage: PropTypes.shape({}),
    bottomText: PropTypes.string,
    heading: PropTypes.string,
    smallcopy: PropTypes.string,
  }).isRequired,
  headerHeight: PropTypes.string.isRequired,
};
