import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { StyledHeader } from './GlobalHeader.styled';

export const GlobalHeader = ({ navItems }) => (
  <StyledHeader>
    <Container>
      {navItems.map(item => item.text)}
    </Container>
  </StyledHeader>
);

GlobalHeader.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
