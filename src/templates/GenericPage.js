import React from 'react';
import PropTypes from 'prop-types';

import { GenericContainer } from '@containers';

const GenericPage = ({
  pageContext, path,
}) => (
  <>
    <GenericContainer
      body={pageContext.body}
      content={pageContext?.data}
      path={path}
      title={pageContext?.metadata?.title}
    />
  </>
);

export default GenericPage;

GenericPage.propTypes = {
  pageContext: PropTypes.shape({
    body: PropTypes.string,
    data: PropTypes.shape({}),
    metadata: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};
