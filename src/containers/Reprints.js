import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';
import { Body } from '@components/ReprintsPage';

export const Reprints = ({
  agreementText,
  background,
  backgroundPortrait,
  filesList,
  requiresAgreement,
}) => (
  <Main style={{ position: 'relative' }}>
    <Body
      agreementText={agreementText}
      background={background}
      backgroundPortrait={backgroundPortrait}
      filesList={filesList}
      requiresAgreement={requiresAgreement}
    />
  </Main>
);

Reprints.propTypes = {
  agreementText: PropTypes.string.isRequired,
  background: PropTypes.shape({}).isRequired,
  backgroundPortrait: PropTypes.shape({}).isRequired,
  filesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  requiresAgreement: PropTypes.bool.isRequired,
};
