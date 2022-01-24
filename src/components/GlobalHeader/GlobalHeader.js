import React from 'react';
import PropTypes from 'prop-types';
import { Link as HomeLink } from 'gatsby';

import { Container } from '@components';
import { HeaderLogo } from '@icons';
import {
  Link, Navigation, ScrollButton, StyledHeader,
} from './GlobalHeader.styled';

export const GlobalHeader = ({
  handleScroll, hasLinks, isHidden, navItems,
}) => (
  <StyledHeader isHidden={isHidden}>
    <Container>
      <HomeLink to="/">
        <HeaderLogo />
      </HomeLink>
      <Navigation>
        {navItems.map(item => (item.type === 'scroll' && !hasLinks ?
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
              state={{ scrollTarget: item.section }}
              to={item.url || '/'}
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
  hasLinks: PropTypes.bool.isRequired,
  isHidden: PropTypes.bool.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
