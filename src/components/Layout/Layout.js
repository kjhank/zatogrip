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
  children, pageContext,
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

  return (
    <Theme>
      <Seo data={seoData} />
      <GlobalStyle shouldScroll={!isCookiesModalOpen} />
      <GlobalHeader
        handleScroll={handleScroll}
        isHidden={isScrollingDown}
        navItems={navItems}
      />
      {cloneElement(children, { navItems })}
      <GlobalFooter
        content={pageContext?.globals?.acf}
      />
    </Theme>

  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  pageContext: PropTypes.shape({
    globals: PropTypes.shape({
      acf: PropTypes.shape({}),
    }),
    metadata: PropTypes.shape({
      globals: PropTypes.shape({
        language: PropTypes.string,
        siteName: PropTypes.string,
      }),
      yoast: PropTypes.shape({}),
    }),
    title: PropTypes.string,
  }).isRequired,
};

export default Layout;
