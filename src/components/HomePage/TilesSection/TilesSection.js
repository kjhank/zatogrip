import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { SectionHeading } from '@components/HomePage/styled';
import {
  Footnotes,
  Section, TilesGrid,
} from './TilesSection.styled';
import { Tile } from './Tile';

export const TilesSection = ({
  content: {
    clickText, closeText, footnotes, heading, tiles,
  },
  innerRef,
}) => {
  const [
    flippedTile,
    setFlippedTile,
  ] = useState(-1);

  const handleFlip = tileIndex => {
    setFlippedTile(-1);
    setFlippedTile(tileIndex);
  };

  return (
    <Section ref={innerRef}>
      <Container>
        <SectionHeading>{heading}</SectionHeading>
        <TilesGrid>
          {tiles.map((tile, index) => (
            <Tile
              clickText={clickText}
              closeText={closeText}
              content={tile}
              handleFlip={handleFlip}
              isFlipped={index === flippedTile}
              key={tile.backText}
              tileIndex={index}
            />
          ))}
        </TilesGrid>
        <Footnotes>
          <ol>
            {footnotes.map(({ footnote }) => <li key={footnote}>{footnote}</li>)}
          </ol>
        </Footnotes>
      </Container>
    </Section>
  );
};

TilesSection.propTypes = {
  content: PropTypes.shape({
    clickText: PropTypes.string,
    closeText: PropTypes.string,
    footnotes: PropTypes.arrayOf(PropTypes.shape({})),
    heading: PropTypes.string,
    tiles: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
};

