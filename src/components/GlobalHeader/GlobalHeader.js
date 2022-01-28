import React from 'react';
import PropTypes from 'prop-types';
import { Link as HomeLink } from 'gatsby';

import { Container } from '@components';
import {
  Burger, HeaderLogo, X,
} from '@icons';
import {
  Link, ProductName as Name, Navigation, NavToggle, ScrollButton, StyledHeader, SubNav,
} from './GlobalHeader.styled';

export const GlobalHeader = ({
  handleScroll,
  handleMouse,
  hasLinks,
  isHidden,
  isNavigationOpen,
  navItems,
  onToggleClick,
  products,
  slug,
  type,
}) => (
  <StyledHeader isHidden={isHidden}>
    <Container>
      <HomeLink to="/">
        <HeaderLogo />
      </HomeLink>
      <NavToggle
        isFlipped={isNavigationOpen}
        onClick={onToggleClick}
      >
        <Burger />
        <X />
      </NavToggle>
      <Navigation isHidden={!isNavigationOpen}>
        {navItems.map(item => {
          const isHighlighted = item?.url?.includes(slug) ||
            (item?.highlightType?.includes('products') && (slug?.startsWith('zatogrip') || slug?.startsWith('tabletki'))) ||
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
                {item?.hasSubmenu && (
                  <SubNav>
                    {products.map(product => (
                      <Link to={`/${product.product.post_name}/`}>
                        <Name variant={product.colorSlug.value}>
                          ZATO
                          <strong>GRIP</strong>
                          <br />
                          <span>{product.colorSlug.label}</span>
                        </Name>
                      </Link>
                    ))}
                  </SubNav>
                )}
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
                {item?.hasSubmenu && (
                  <SubNav>
                    {products.map(product => (
                      <Link to={`/${product.product.post_name}/`}>
                        <Name variant={product.colorSlug.value}>
                          ZATO
                          <strong>GRIP</strong>
                          <br />
                          <span>{product.colorSlug.label}</span>
                        </Name>
                      </Link>
                    ))}
                  </SubNav>
                )}
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
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
