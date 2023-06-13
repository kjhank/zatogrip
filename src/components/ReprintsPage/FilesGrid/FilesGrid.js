import React from 'react';
import PropTypes from 'prop-types';

import { ArrowLink } from '@components';
import {
  File, FileName, Grid, Thumbnail,
} from './FilesGrid.styled';

export const FilesGrid = ({ files }) => (files.length ?
  (
    <Grid>
      {files.map(file => (
        <File key={file.file.url}>
          {file.thumbnail && <Thumbnail image={file.thumbnail} />}
          <FileName>
            {file.text}
          </FileName>
          <ArrowLink
            download
            href={file.file.url}
          >
            {file.linkText}
          </ArrowLink>
        </File>
      ))}
    </Grid>
  ) :
  null);

FilesGrid.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    file: PropTypes.shape({}),
    linkText: PropTypes.string,
    text: PropTypes.string,
    thumbnail: PropTypes.shape({}),
  })).isRequired,
};
