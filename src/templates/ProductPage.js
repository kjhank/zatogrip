import React from 'react';
import PropTypes from 'prop-types';

import { Product } from '@containers';

const ProductPage = ({ pageContext }) => (
  <Product
    header={pageContext.data.header}
    ingredients={pageContext.data.ingredients}
    serving={pageContext.data.servingSection}
    warnings={pageContext.data.warnings}
  />
);

ProductPage.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      header: PropTypes.shape({}),
      ingredients: PropTypes.shape({}),
      servingSection: PropTypes.shape({}),
      warnings: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default ProductPage;
