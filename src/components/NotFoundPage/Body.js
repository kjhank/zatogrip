import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import {
  Background, Code, Label, Link, PortraitBackground, Wrapper,
} from './Body.styled';

export const Body = ({
  background, code, label, link, portraitBackground,
}) => (
  <Wrapper>
    <Background
      image={background}
      isLazy={false}
    />
    <PortraitBackground
      image={portraitBackground}
      isLazy={false}
    />
    <Container>
      <Code>{code}</Code>
      <Label>{label}</Label>
      <Link to={link?.url}>{link.title}</Link>
    </Container>
  </Wrapper>
);

Body.propTypes = {
  background: PropTypes.shape({}).isRequired,
  code: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  portraitBackground: PropTypes.shape({}).isRequired,
};
