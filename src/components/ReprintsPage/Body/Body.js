import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import {
  Background,
  BackgroundPortrait,
} from '@components/styled';
import {
  Agreement, Checkbox, Label, Wrapper,
} from './Body.styled';

import { FilesGrid } from '../FilesGrid/FilesGrid';

export const Body = ({
  agreementText, background, backgroundPortrait, filesList, requiresAgreement,
}) => {
  const [
    acceptedAgreement,
    setAcceptedAgreement,
  ] = useState(!requiresAgreement);

  const toggleCheckbox = () => setAcceptedAgreement(current => !current);

  return (
    <Wrapper>
      <Container>
        {acceptedAgreement ?
          <FilesGrid files={filesList} /> :
          (
            <Agreement>
              <Checkbox
                id="agreement"
                name="agreement"
                onChange={toggleCheckbox}
              />
              <Label htmlFor="agreement">{agreementText}</Label>
            </Agreement>
          )}
      </Container>
      <Background image={background} />
      <BackgroundPortrait image={backgroundPortrait} />
    </Wrapper>
  );
};

Body.propTypes = {
  agreementText: PropTypes.string.isRequired,
  background: PropTypes.shape({}).isRequired,
  backgroundPortrait: PropTypes.shape({}).isRequired,
  filesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  requiresAgreement: PropTypes.bool.isRequired,
};
