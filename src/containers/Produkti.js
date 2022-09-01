import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';
import {
  Body, Header,
} from '@components/ProduktiPage';

export const Produkti = ({
  additionalFiles,
  background,
  backgroundPortrait,
  downloadText,
  files,
  header,
}) => (
  <Main style={{ position: 'relative' }}>
    <Header
      background={header.background}
      backgroundPortrait={header.backgroundPortrait}
      headings={[
        header.heading,
        header.heading2,
        header.heading3,
      ]}
      intro={header.intro}
      introHeading={header.introHeading}
    />
    <Body
      additionalFiles={additionalFiles}
      background={background}
      backgroundPortrait={backgroundPortrait}
      downloadText={downloadText}
      files={files}
    />
  </Main>
);

Produkti.propTypes = {
  additionalFiles: PropTypes.shape({}).isRequired,
  background: PropTypes.shape({}).isRequired,
  backgroundPortrait: PropTypes.shape({}).isRequired,
  downloadText: PropTypes.string.isRequired,
  files: PropTypes.shape({}).isRequired,
  header: PropTypes.shape({
    background: PropTypes.shape({}),
    backgroundPortrait: PropTypes.shape({}),
    heading: PropTypes.string,
    heading2: PropTypes.string,
    heading3: PropTypes.string,
    intro: PropTypes.string,
    introHeading: PropTypes.string,
  }).isRequired,
};
