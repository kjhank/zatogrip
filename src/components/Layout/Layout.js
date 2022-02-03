import React, {
  cloneElement, createRef, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import { Theme } from '@theme/main';
import { GlobalStyle } from '@utils';
import {
  GlobalFooter, GlobalHeader, ProductsMenu,
} from '@components';

import '../../../static/fonts/stylesheet.css';

import {
  debounceFunction, isBrowser,
} from '@utils/helpers';
import { Seo } from './Seo';
import {
  COOKIES_LS_KEY, topNavigation,
} from './static';

const SCROLL_DEBOUNCE_DELAY = 50;

const Layout = ({
  children, location, pageContext, path,
}) => {
  const [
    isCookiesModalOpen,
    setCookiesModalOpen,
  ] = useState(false);

  const [
    isHeaderVisible,
    setHeaderVisible,
  ] = useState(true);

  const [
    isSubmenuVisible,
    setSubmenuVisible,
  ] = useState(false);

  const [
    isNavigationOpen,
    setNavigationOpen,
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
    title: pageContext?.metadata?.title ? `${pageContext?.metadata?.globals?.siteName} - ${pageContext?.metadata?.title}` : pageContext?.metadata?.globals?.siteName,
  };

  const navItems = topNavigation.map(item => {
    const innerRef = createRef(null);

    return {
      ...item,
      innerRef,
    };
  });

  const pageScrollRef = useRef(isBrowser ? window.scrollY : 0);

  useEffect(() => {
    const scrollHandler = () => {
      const { scrollY } = window;
      const isScrolledDown = pageScrollRef.current > scrollY;

      setHeaderVisible(isScrolledDown || scrollY === 0);
      setSubmenuVisible(false);
      setNavigationOpen(false);

      pageScrollRef.current = scrollY;
    };

    const handlePageScroll = debounceFunction(scrollHandler, SCROLL_DEBOUNCE_DELAY);

    window.addEventListener('scroll', handlePageScroll);

    return () => window.removeEventListener('scroll', handlePageScroll);
  }, []);

  const handleScroll = ({ current: element }) => {
    const scrollOffset = element.getBoundingClientRect().top + window.scrollY;

    const scrollConfig = {
      behavior: 'smooth',
      top: scrollOffset,
    };

    window.scrollTo(scrollConfig);
    setSubmenuVisible(false);
    setNavigationOpen(false);
  };

  const handleMouseOver = ({ type }, source) => {
    const shouldOpen = !!(source === 'button' && (type === 'mouseenter' || 'mouseleave'));

    setSubmenuVisible(shouldOpen);
  };

  useEffect(() => {
    if (location?.state?.scrollTarget) {
      const { state: { scrollTarget } } = location;

      const scrollRef = navItems.find(({ section }) => section === scrollTarget).innerRef;

      handleScroll(scrollRef);
    }
  },
  [location]);

  useEffect(() => {
    setNavigationOpen(false);
    setSubmenuVisible(false);
    setHeaderVisible(true);
  }, [location]);

  return (
    <Theme>
      <Seo data={seoData} />
      <GlobalStyle shouldScroll={!isCookiesModalOpen} />
      <GlobalHeader
        handleMouse={handleMouseOver}
        handleScroll={handleScroll}
        hasLinks={path !== '/'}
        isHidden={!isHeaderVisible}
        isNavigationOpen={isNavigationOpen}
        navItems={navItems}
        onToggleClick={() => setNavigationOpen(current => !current)}
        products={pageContext?.globals?.acf?.products}
        slug={pageContext?.metadata?.slug}
        type={pageContext?.metadata?.type}
      />
      <ProductsMenu
        handleMouse={handleMouseOver}
        isVisible={isSubmenuVisible}
        products={pageContext?.globals?.acf?.products}
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
      slug: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      yoast: PropTypes.shape({}),
    }),
    title: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default Layout;
