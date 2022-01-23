import React, {
  cloneElement, createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import { Theme } from '@theme/main';
import { GlobalStyle } from '@utils';
import {
  GlobalFooter, GlobalHeader,
} from '@components';

import '../../../static/fonts/stylesheet.css'; // TODO: update when we get fonts

import { Seo } from './Seo';
import {
  COOKIES_LS_KEY, topNavigation,
} from './static';

const Layout = ({
  children, location, pageContext, path,
}) => {
  const [
    isCookiesModalOpen,
    setCookiesModalOpen,
  ] = useState(false);

  const [
    isScrollingDown,
    setScrollingDown,
  ] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    const hasUserAgreed = localStorage.getItem(COOKIES_LS_KEY);

    setCookiesModalOpen(!hasUserAgreed);
  }, []);

  const seoData = {
    ...pageContext?.metadata?.yoast,
    language: pageContext?.metadata?.globals?.language,
    title: `${pageContext?.metadata?.globals?.siteName} - ${pageContext?.title}`,
  };

  const navItems = topNavigation.map(item => {
    const innerRef = createRef(null);

    return {
      ...item,
      innerRef,
    };
  });

  useEffect(() => {
    const threshold = 0;
    let initialScrollY = window.pageYOffset;
    let isScrolling = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - initialScrollY) < threshold) {
        isScrolling = false;

        return;
      }
      setScrollingDown(scrollY > initialScrollY);
      initialScrollY = scrollY > 0 ? scrollY : 0;
      isScrolling = false;
    };

    const onScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(updateScrollDir);
        isScrolling = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isScrollingDown]);

  const handleScroll = ({ current: element }) => {
    const scrollOffset = element.getBoundingClientRect().top + window.scrollY;

    const scrollConfig = {
      behavior: 'smooth',
      top: scrollOffset,
    };

    window.scrollTo(scrollConfig);
  };

  useEffect(() => {
    if (location?.state?.scrollTarget) {
      const { state: { scrollTarget } } = location;

      const scrollRef = navItems.find(({ section }) => section === scrollTarget).innerRef;

      handleScroll(scrollRef);
    }
  },
  [location]);

  return (
    <Theme>
      <Seo data={seoData} />
      <GlobalStyle shouldScroll={!isCookiesModalOpen} />
      <GlobalHeader
        handleScroll={handleScroll}
        hasLinks={path !== '/'}
        isHidden={isScrollingDown}
        navItems={navItems}
        products={pageContext.globals.acf.products}
      />
      {cloneElement(children, { navItems })}
      <GlobalFooter
        carousel={pageContext.carousel}
        content={pageContext?.globals?.acf}
        hasCarousel={pageContext?.hasCarousel}
      />
    </Theme>

  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      scrollTarget: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    carousel: PropTypes.shape({}),
    globals: PropTypes.shape({
      acf: PropTypes.shape({
        products: PropTypes.arrayOf(PropTypes.shape({})),
      }),
    }),
    hasCarousel: PropTypes.bool,
    metadata: PropTypes.shape({
      globals: PropTypes.shape({
        language: PropTypes.string,
        siteName: PropTypes.string,
      }),
      yoast: PropTypes.shape({}),
    }),
    title: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default Layout;
