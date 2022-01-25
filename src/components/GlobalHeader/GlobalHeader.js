import React from 'react';
import PropTypes from 'prop-types';
import { Link as HomeLink } from 'gatsby';

import { Container } from '@components';
import { HeaderLogo } from '@icons';
import {
  Link, Navigation, ScrollButton, StyledHeader,
} from './GlobalHeader.styled';

export const GlobalHeader = ({
  handleScroll, handleMouse, hasLinks, isHidden, navItems, slug, type,
}) => (
  <StyledHeader isHidden={isHidden}>
    <Container>
      <HomeLink to="/">
        <HeaderLogo />
      </HomeLink>
      <Navigation>
        {navItems.map(item => {
          const isHighlighted = item?.url?.includes(slug) ||
            (item?.highlightType?.includes('products') && slug.startsWith('zatogrip')) ||
            (type === 'post' && item?.highlightType?.includes('post'));

          return (item.type === 'scroll' && !hasLinks ?
            (
              <ScrollButton
                key={item.text}
                onClick={() => handleScroll(item.innerRef)}
                onMouseEnter={event => handleMouse(event, item?.hasSubmenu ? 'button' : 'other')}
                onMouseLeave={event => handleMouse(event, item?.hasSubmenu ? 'button' : 'other')}
              >
                {item.text}
              </ScrollButton>
            ) :
            (
              <Link
                $isHighlighted={isHighlighted}
                key={item.text}
                onMouseEnter={event => handleMouse(event, item?.hasSubmenu ? 'button' : 'other')}
                onMouseLeave={event => handleMouse(event, item?.hasSubmenu ? 'button' : 'other')}
                state={item.section === 'support' ? {} : { scrollTarget: item.section }}
                to={item.url || '/'}
              >
                {item.text}
              </Link>
            ));
        })}
      </Navigation>
    </Container>
  </StyledHeader>
);
GlobalHeader.propTypes = {
  handleMouse: PropTypes.func.isRequired,
  handleScroll: PropTypes.func.isRequired,
  hasLinks: PropTypes.bool.isRequired,
  isHidden: PropTypes.bool.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
