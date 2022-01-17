import React from 'react';
import PropTypes from 'prop-types';

import {
  Arrow, X,
} from '@icons';

import {
  CloseButton, FlipButton, SingleTile, TileBack, TileFront,
} from './TilesSection.styled';

export const Tile = ({
  content, clickText, closeText, handleFlip, isFlipped, tileIndex,
}) => (
  <SingleTile isFlipped={isFlipped}>
    <TileFront>
      {content.frontText}
      <FlipButton onClick={() => handleFlip(tileIndex)}>
        {clickText}
        {' '}
        <Arrow />
      </FlipButton>
    </TileFront>
    <TileBack>
      {content.backText}
      <CloseButton onClick={() => handleFlip(-1)}>
        <X />
        {closeText}
      </CloseButton>
    </TileBack>
  </SingleTile>
);

Tile.propTypes = {
  clickText: PropTypes.string.isRequired,
  closeText: PropTypes.string.isRequired,
  content: PropTypes.shape({
    backText: PropTypes.string,
    frontText: PropTypes.string,
  }).isRequired,
  handleFlip: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  tileIndex: PropTypes.number.isRequired,
};

