import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import {
  Cover, CoverPortrait, Heading, Intro, StyledHeader,
} from './Header.styled';

const sanitizeConfig = { allowedTags: ['p'] };

export const Header = ({
  cover, coverPortrait, heading, intro,
}) => (
  <StyledHeader>
    <Cover image={cover} />
    <CoverPortrait image={coverPortrait} />
    <Container>
      <Heading>{heading}</Heading>
      <Intro dangerouslySetInnerHTML={{ __html: sanitize(intro, sanitizeConfig) }} />
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  cover: PropTypes.shape({}).isRequired,
  heading: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
};

