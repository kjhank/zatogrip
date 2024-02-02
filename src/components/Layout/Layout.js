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
  debounceFunction, isBrowser, isMobile,
} from '@utils/helpers';
import { Helmet } from 'react-helmet';
import { Seo } from './Seo';
import { topNavigation } from './static';

const SCROLL_DEBOUNCE_DELAY = 50;

const { GATSBY_ONETRUST_ID } = process.env;

const Layout = ({
  children, location, pageContext, path,
}) => {
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

  const [
    headerHeight,
    setHeaderHeight,
  ] = useState('75px');

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const seoData = {
    ...pageContext?.metadata?.yoast,
    language: pageContext?.metadata?.globals?.language,
    title: pageContext?.metadata?.yoast?.title ?? pageContext?.metadata?.globals?.siteName,
  };

  const navItems = topNavigation.map(item => {
    const innerRef = createRef(null);

    return {
      ...item,
      innerRef,
    };
  });

  const pageScrollRef = useRef(isBrowser ? window.scrollY : 0);
  const headerRef = useRef(null);

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
    const scrollOffset =
      element.getBoundingClientRect().top +
      window.scrollY -
      (isMobile ? 100 : 0);

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
    if (headerRef?.current) {
      const heightInPx = `${Math.ceil(headerRef?.current?.getBoundingClientRect()
        .height ?? 0)}px`;

      setHeaderHeight(heightInPx);
    }
  }, [headerRef]);

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

  useEffect(() => {
    const scriptNode = document.createElement('script');

    scriptNode.type = 'text/javascript';
    scriptNode.src = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
    scriptNode.setAttribute('data-document-language', 'true');
    scriptNode.setAttribute('charset', 'utf-8');
    scriptNode.setAttribute('data-domain-script', GATSBY_ONETRUST_ID);

    document.head.appendChild(scriptNode);

    // eslint-disable-next-line no-unused-vars
    function OptanonWrapper() { }
  }, []);

  return (
    <Theme>
      <Helmet>
        <link
          href="https://zatogrip.lekam.pl/wp-content/plugins/complianz-gdpr-premium/assets/css/document.min.css?ver=1701654851"
          rel="stylesheet"
        />
      </Helmet>
      <Seo data={seoData} />
      <GlobalStyle shouldScroll />
      <GlobalHeader
        handleMouse={handleMouseOver}
        handleScroll={handleScroll}
        hasLinks={path !== '/'}
        isHidden={!isHeaderVisible}
        isNavigationOpen={isNavigationOpen}
        navItems={navItems}
        onToggleClick={() => setNavigationOpen(current => !current)}
        products={pageContext?.globals?.acf?.products}
        ref={headerRef}
        slug={pageContext?.metadata?.slug}
        type={pageContext?.metadata?.type}
      />
      <ProductsMenu
        handleMouse={handleMouseOver}
        isVisible={isSubmenuVisible}
        products={pageContext?.globals?.acf?.products}
      />
      {cloneElement(children, {
        headerHeight,
        navItems,
      })}
      <button
        className="ot-sdk-show-settings"
        id="ot-sdk-btn"
        type="button"
      >
        Cookie Settings
      </button>
      <div id="ot-sdk-cookie-policy" />
      <GlobalFooter
        carousel={pageContext.carousel}
        content={pageContext?.globals?.acf}
        footnotes={pageContext?.data?.footerFootnotes}
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
    cookies: PropTypes.shape({}),
    data: PropTypes.shape({
      footerFootnotes: PropTypes.string,
    }),
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
      yoast: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    title: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default Layout;
