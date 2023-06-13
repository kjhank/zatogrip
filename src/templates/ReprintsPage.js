import React from 'react';
import PropTypes from 'prop-types';

import { Reprints } from '@containers';

const ReprintsPage = ({
  pageContext: { data }, pageContext,
}) => (
  <Reprints
    agreementText={data.agreementText}
    background={data.background}
    backgroundPortrait={data.backgroundPortrait}
    ctxSize={JSON.stringify(pageContext).length}
    filesList={data.filesList}
    requiresAgreement={data.requiresAgreement}
  />
);

ReprintsPage.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      agreementText: PropTypes.string,
      background: PropTypes.shape({}),
      backgroundPortrait: PropTypes.shape({}),
      filesList: PropTypes.arrayOf(PropTypes.shape({})),
      requiresAgreement: PropTypes.bool,
    }),
  }).isRequired,
};

export default ReprintsPage;
