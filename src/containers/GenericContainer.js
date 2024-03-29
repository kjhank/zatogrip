import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import { Body } from '@components/GenericPage/Body';

export const GenericContainer = ({
  body, content, path, title,
}) => (
  <Main>
    <Body
      background={content.backgroundImage}
      body={body}
      path={path}
      portraitBackground={content.backgroundImagePortrait}
      title={title}
    />
  </Main>
);

GenericContainer.propTypes = {
  body: PropTypes.string,
  content: PropTypes.shape({
    backgroundImage: PropTypes.shape({}),
    backgroundImagePortrait: PropTypes.shape({}),
    errorCode: PropTypes.string,
    errorLabel: PropTypes.string,
    link: PropTypes.shape({}),
  }).isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string,
};

GenericContainer.defaultProps = {
  body: null,
  title: null,
};
