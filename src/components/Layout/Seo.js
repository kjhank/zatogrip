import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const BASE_URL = 'https://zatogrip.pl';

export const Seo = ({ data }) => (
  <Helmet htmlAttributes={{ lang: data.language }}>
    {data.title && <title>{data.title}</title>}
    {data.og_title && (
      <meta
        content={data.og_title}
        property="og:title"
      />
    )}
    {data.og_locale && (
      <meta
        content={data.og_locale}
        property="og:locale"
      />
    )}
    {data.og_type && (
      <meta
        content={data.og_type}
        property="og:type"
      />
    )}
    {data.path && (
      <meta
        content={`${BASE_URL}${data.path}`}
        property="og:url"
      />
    )}
    {data.og_site_name && (
      <meta
        content={data.og_site_name}
        property="og:site_name"
      />
    )}
    {data.og_description && (
      <meta
        content={data.og_description}
        property="og:description"
      />
    )}
    {data.twitter_card && (
      <meta
        content={data.twitter_card}
        property="twitter:card"
      />
    )}
    {data.twitter_description && (
      <meta
        content={data.twitter_description}
        property="twitter:description"
      />
    )}
    {data.twitter_image && (
      <meta
        content={data.twitter_image}
        property="twitter:image"
      />
    )}
    {data.twitter_title && (
      <meta
        content={data.twitter_title}
        property="twitter:image"
      />
    )}
    {data?.og_image?.length > 0 && data.og_image.map(image => (
      [
        <meta
          content={image.height}
          property="og:image:height"
        />,
        <meta
          content={image.url}
          property="og:image"
        />,
        <meta
          content={image.type}
          property="og:image:type"
        />,
        <meta
          content={image.width}
          property="og:image:width"
        />,
      ]
    ))}
  </Helmet>
);

Seo.propTypes = {
  data: PropTypes.shape({
    language: PropTypes.string,
    og_description: PropTypes.string,
    og_image: PropTypes.arrayOf(PropTypes.shape({})),
    og_locale: PropTypes.string,
    og_site_name: PropTypes.string,
    og_title: PropTypes.string,
    og_type: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
    twitter_card: PropTypes.string,
    twitter_description: PropTypes.string,
    twitter_image: PropTypes.string,
    twitter_title: PropTypes.string,
  }).isRequired,
};
