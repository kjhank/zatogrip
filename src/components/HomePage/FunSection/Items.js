import React from 'react';
import PropTypes from 'prop-types';

import {
  DownloadLink,
  ItemsGrid,
  SingleItem,
  Thumbnail,
} from './FunSection.styled';

export const Items = ({ content }) => (
  <ItemsGrid>
    {content.files.map(({ item }) => (
      <SingleItem>
        {item.thumbnail ?
          (
            <Thumbnail
              image={item.thumbnail}
              isLazy={false}
            />
          ) :
          item.name}
        <DownloadLink href={item.file.url}>Pobierz</DownloadLink>
      </SingleItem>
    ))}
  </ItemsGrid>
);

Items.propTypes = {
  content: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

