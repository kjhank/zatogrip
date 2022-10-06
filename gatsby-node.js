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
  contact: path.resolve('./src/templates/ContactPage.js'),
  home: path.resolve('./src/templates/HomePage.js'),
  notFound: path.resolve('./src/templates/NotFoundPage.js'),
  post: path.resolve('./src/templates/PostPage.js'),
  posts: path.resolve('./src/templates/PostsPage.js'),
  product: path.resolve('./src/templates/ProductPage.js'),
  produkti: path.resolve('./src/templates/ProduktiPage.js'),
};

const paths = {
  contact: '/contact/',
  home: '/',
  notFound: '/404/',
  posts: '/strefa-rodzica/',
  produkti: '/ua/',
};

const slugs = {
  contact: 'kontakt',
  home: 'strona-glowna',
  notFound: '404',
  posts: 'strefa-rodzica',
  produkti: 'pro-produkti',
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

  if (slug === slugs.produkti) {
    return templates.produkti;
  }

  if (slug.includes(slugs.notFound)) {
    return templates.notFound;
  }

  if (type === types.page && slug === slugs.posts) {
    return templates.posts;
  }

  if (slug === slugs.contact) {
    return templates.contact;
  }

  if (type === types.page) {
    return templates.product;
  }

  return templates.post;
};

const getPath = ({ slug }) => {
  if (slug === slugs.home) {
    return paths.home;
  }

  if (slug === slugs.produkti) {
    return paths.produkti;
  }

  if (slug.includes(slugs.notFound)) {
    return paths.notFound;
  }

  return `/${slug}`;
};

const getContext = async (pageData, settings, globals, { acf: { carousel } }, allPosts) => {
  // TODO: reduce pageContext sizes
  const {
    acf, slug, title, type, yoast_head_json,
  } = pageData;

  const { hasCarousel } = acf;

  const globalContext = {
    cookies: {
      confirmText: globals?.acf?.confirmText,
      heading: globals?.acf?.heading,
      message: globals?.acf?.message,
    },
    globals,
    metadata: {
      globals: {
        language: settings.language,
        siteName: settings.title,
      },
      slug,
      title: title.rendered,
      type,
      yoast: yoast_head_json,
    },
  };

  if (slug === slugs.produkti) {
    return {
      ...globalContext,
      data: acf,
      metadata: {
        ...globalContext.metadata,
        globals: {
          ...globalContext.metadata.globals,
          language: 'uk_UA',
        },
      },
    };
  }

  if (slug === slugs.home) {
    return {
      ...globalContext,
      data: acf,
    };
  }

  if (type === types.page) {
    const pageContext = hasCarousel ?
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

    if (slug === slugs.posts) {
      const posts = allPosts.map(post => ({
        cover: post.acf.cover,
        excerpt: post.acf.excerpt,
        slug: post.slug,
        thumbnail: post.acf.homeThumb,
        title: post.title.rendered,
      }));

      return {
        ...pageContext,
        posts,
      };
    }

    return pageContext;
  }

  const relatedPosts = acf?.articles?.articles ?
    acf?.articles?.articles?.map(({ article }) => {
      const { ID } = article;

      const { acf: acfData } = allPosts?.find(post => post.id === ID) ?? { acf: {} };

      return {
        ...article,
        cover: acfData?.cover,
        excerpt: acfData?.excerpt,
        thumbnail: acfData?.homeThumb,
      };
    }) :
    [];

  return {
    ...globalContext,
    ...acf,
    articles: {
      ...acf.articles,
      articles: relatedPosts,
    },
    body: pageData?.content?.rendered,
  };
};

exports.createPages = async ({
  actions: { createPage },
}) => {
  const getApiData = async sources => {
    const apiData = Promise.all(
      Object.keys(sources).map(async source => {
        const isOptions = source.includes('acf/');
        const url = `${process.env.GATSBY_BACKEND_URL}/${sources[source]}${isOptions ? '' : '?per_page=100&acf_format=standard'}`;
        const AUTH_STRING = `${process.env.BACKEND_USER}:${process.env.BACKEND_USER_PASS}`;

        const headers = {
          Authorization: `Basic ${Buffer.from(AUTH_STRING, 'binary').toString('base64')}`,
        };

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

  pages.forEach(async page => {
    const context = page.slug === slugs.home ?
      {
        ...await getContext(page, settings, globals, carousel, posts),
        posts,
      } :
      await getContext(page, settings, globals, carousel, posts);

    const pageData = {
      component: getTemplate(page),
      context,
      path: getPath(page),
    };

    createPage(pageData);
  });

  await posts.forEach(async post => {
    const postData = {
      component: getTemplate(post),
      context: await getContext(post, settings, globals, carousel, posts),
      path: getPath(post),
    };

    createPage(postData);
  });
};
