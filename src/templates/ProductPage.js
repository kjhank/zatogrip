import React from 'react';
import PropTypes from 'prop-types';

import { Product } from '@containers';

const ProductPage = ({ pageContext }) => (
  <Product
    ctxSize={JSON.stringify(pageContext).length}
    header={pageContext?.data?.header}
    ingredients={pageContext?.data?.ingredients}
    serving={pageContext?.data?.servingSection}
    slug={pageContext?.metadata?.slug}
    usage={pageContext?.data?.usage}
    warnings={pageContext?.data?.warnings}
  />
);

ProductPage.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      header: PropTypes.shape({}),
      ingredients: PropTypes.shape({}),
      servingSection: PropTypes.shape({}),
      usage: PropTypes.shape({}),
      warnings: PropTypes.shape({}),
    }),
    metadata: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductPage;
