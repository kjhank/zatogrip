import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { SectionHeading } from '@components/HomePage/styled';
import {
  Arrow, ArrowText, ArrowTextWrapper, Footnotes, Section, TilesGrid,
} from './TilesSection.styled';
import { Tile } from './Tile';

export const TilesSection = ({
  content: {
    arrowText, clickText, closeText, footnotes, heading, tiles,
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
        <ArrowTextWrapper>
          <ArrowText>{arrowText}</ArrowText>
          <Arrow />
        </ArrowTextWrapper>
        <SectionHeading>{heading}</SectionHeading>
        <TilesGrid>
          {tiles.map((tile, index) => (
            <Tile
              clickText={clickText}
              closeText={closeText}
              content={tile}
              handleFlip={handleFlip}
              hasBackground={tile.backHasBg}
              isFlipped={index === flippedTile}
              key={tile.backText}
              tileIndex={index}
            />
          ))}
        </TilesGrid>
        <Footnotes>
          <ol>
            {footnotes.map(({ footnote }, index) => (
              <li key={footnote}>
                <span>
                  [
                  {index + 1}
                  ]
                </span>
                {' '}
                {footnote}
                {' '}
              </li>
            ))}
          </ol>
        </Footnotes>
      </Container>
    </Section>
  );
};

TilesSection.propTypes = {
  content: PropTypes.shape({
    arrowText: PropTypes.string,
    clickText: PropTypes.string,
    closeText: PropTypes.string,
    footnotes: PropTypes.arrayOf(PropTypes.shape({})),
    heading: PropTypes.string,
    tiles: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
};

