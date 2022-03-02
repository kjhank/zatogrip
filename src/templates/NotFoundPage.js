import React from 'react';
import PropTypes from 'prop-types';

import { NotFoundContainer } from '@containers';

const NotFoundPage = ({ pageContext }) => (
  <NotFoundContainer content={pageContext?.data} />
);

export default NotFoundPage;

NotFoundPage.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({}),
  }).isRequired,
};
