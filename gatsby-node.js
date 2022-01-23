const fetch = require('node-fetch');
const path = require('path');

const endpoints = {
  carousel: 'acf/v3/options/carousel/',
  globals: 'acf/v3/options/globals/',
  pages: 'wp/v2/pages/',
  posts: 'wp/v2/posts/',
  settings: 'wp/v2/settings/',
};

const templates = {
  home: path.resolve('./src/templates/HomePage.js'),
  notFound: path.resolve('./src/templates/NotFoundPage.js'),
  post: path.resolve('./src/templates/PostPage.js'),
  product: path.resolve('./src/templates/ProductPage.js'),
};

const paths = {
  home: '/',
  notFound: '/404/',
};

const slugs = {
  contact: 'kontakt',
  home: 'strona-glowna',
  notFound: '404',
};

const types = {
  page: 'page',
  post: 'post',
};

const getTemplate = ({
  slug, type,
}) => {
  if (slug === slugs.home) {
    return templates.home;
  }

  if (slug.includes(slugs.notFound)) {
    return templates.notFound;
  }

  // if (slug === slugs.contact) {
  //   return templates.contact;
  // }

  if (type === types.page) {
    return templates.product;
  }

  return templates.post;
};

const getPath = ({ slug }) => {
  if (slug === slugs.home) {
    return paths.home;
  }

  if (slug.includes(slugs.notFound)) {
    return paths.notFound;
  }

  return `/${slug}`;
};

const getContext = (pageData, settings, globals, { acf: { carousel } }) => {
  const {
    acf, slug, title, type, yoast_head_json,
  } = pageData;

  const {
    hasCarousel, isInactive,
  } = acf;

  const globalContext = {
    TMP: pageData, // TODO: remove, just for reference
    globals,
    metadata: {
      globals: {
        language: settings.language,
        siteName: settings.title,
      },
      title: title.rendered,
      type,
      yoast: yoast_head_json,
    },
  };

  if (slug === slugs.home) {
    return {
      ...globalContext,
      data: acf,
    };
  }

  if (type === types.page) {
    return hasCarousel ?
      {
        ...globalContext,
        carousel,
        data: acf,
        hasCarousel,
      } :
      {
        ...globalContext,
        data: acf,
      };
  }

  return globalContext;
};

exports.createPages = async ({
  actions: { createPage },
}) => {
  const getApiData = async sources => {
    const apiData = Promise.all(
      Object.keys(sources).map(async source => {
        const isOptions = source.includes('acf/');
        const url = `${process.env.GATSBY_BACKEND_URL}/${sources[source]}${isOptions ? '' : '?per_page=100'}`;
        const headers = new fetch.Headers();
        const AUTH_STRING = `${process.env.BACKEND_USER}:${process.env.BACKEND_USER_PASS}`;

        headers.set('Authorization', `Basic ${Buffer.from(AUTH_STRING).toString('base64')}`);

        const response = await fetch(url, { headers });
        const data = await response.json();

        return data;
      })
    );

    return apiData;
  };

  const [
    carousel,
    globals,
    pages,
    posts,
    settings,
  ] = await getApiData(endpoints);

  pages.forEach(page => {
    const context = page.slug === slugs.home ?
      {
        ...getContext(page, settings, globals, carousel),
        posts,
      } :
      getContext(page, settings, globals, carousel);

    const pageData = {
      component: getTemplate(page),
      context,
      path: getPath(page),
    };

    createPage(pageData);
  });

  posts.forEach(post => {
    const postData = {
      component: getTemplate(post),
      context: getContext(post, settings, globals, carousel),
      path: getPath(post),
    };

    createPage(postData);
  });
};
