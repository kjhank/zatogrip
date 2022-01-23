import React from 'react';
import PropTypes from 'prop-types';

import { X } from '@icons';

import {
  CloseButton, FlipButton, SingleTile, TileBack, TileBackground, TileFront,
} from './TilesSection.styled';

export const Tile = ({
  content, clickText, closeText, handleFlip, hasBackground, isFlipped, tileIndex,
}) => (
  <SingleTile isFlipped={isFlipped}>
    <TileFront>
      {content.frontText}
      <FlipButton
        $isButton
        $isCaps
        onClick={() => handleFlip(tileIndex)}
      >
        {clickText}
        {' '}
      </FlipButton>
    </TileFront>
    <TileBack>
      {hasBackground && <TileBackground />}
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
  hasBackground: PropTypes.bool.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  tileIndex: PropTypes.number.isRequired,
};

