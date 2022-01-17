import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { HeaderLogo } from '@icons';
import {
  Link, Navigation, ScrollButton, StyledHeader,
} from './GlobalHeader.styled';

export const GlobalHeader = ({
  handleScroll, isHidden, navItems,
}) => (
  <StyledHeader isHidden={isHidden}>
    <Container>
      <HeaderLogo />
      <Navigation>
        {navItems.map(item => (item.type === 'scroll' ?
          (
            <ScrollButton
              key={item.text}
              onClick={() => handleScroll(item.innerRef)}
            >
              {item.text}
            </ScrollButton>
          ) :
          (
            <Link
              key={item.text}
              to={item.url}
            >
              {item.text}
            </Link>
          )))}
      </Navigation>
    </Container>
  </StyledHeader>
);

GlobalHeader.propTypes = {
  handleScroll: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
