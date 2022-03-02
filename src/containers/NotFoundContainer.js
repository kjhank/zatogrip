import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import { Body } from '@components/NotFoundPage/Body';

export const NotFoundContainer = ({ content }) => (
  <Main>
    <Body
      background={content?.backgroundImage}
      code={content?.errorCode}
      label={content?.errorLabel}
      link={content?.link}
      portraitBackground={content?.backgroundImagePortrait}
    />
  </Main>
);

NotFoundContainer.propTypes = {
  content: PropTypes.shape({
    backgroundImage: PropTypes.shape({}),
    backgroundImagePortrait: PropTypes.shape({}),
    errorCode: PropTypes.string,
    errorLabel: PropTypes.string,
    link: PropTypes.shape({}),
  }).isRequired,
};
