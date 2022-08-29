import React from 'react';
import PropTypes from 'prop-types';

import { Produkti } from '@containers';

const ProduktiPage = ({ pageContext }) => (
  <Produkti
    additionalFiles={pageContext.data.additionalFiles}
    background={pageContext.data.background}
    backgroundPortrait={pageContext.data.backgroundPortrait}
    downloadText={pageContext.data.linkText}
    files={pageContext.data.filesCarousel}
    header={pageContext.data.header}
  />
);

ProduktiPage.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      additionalFiles: PropTypes.shape({}),
      background: PropTypes.shape({}),
      backgroundPortrait: PropTypes.shape({}),
      filesCarousel: PropTypes.shape({}),
      header: PropTypes.shape({}),
      image: PropTypes.shape({}),
      linkText: PropTypes.string,
    }),
  }).isRequired,
};

export default ProduktiPage;
