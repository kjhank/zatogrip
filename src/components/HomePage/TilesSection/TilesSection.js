import React, {
  useEffect, useState,
} from 'react';
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
  const [
    visibleFootnotes,
    setVisibleFootnotes,
  ] = useState([]);

  const handleFlip = tileIndex => {
    setFlippedTile(-1);
    setFlippedTile(tileIndex);
  };

  useEffect(() => {
    if (flippedTile >= 0) {
      setVisibleFootnotes(tiles[flippedTile].relatedFootnotes.split(',').map(item => Number(item) - 1));
    } else {
      setVisibleFootnotes([]);
    }
  }, [flippedTile]);

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
              relatedFootnotes={!!tile.relatedFootnotes && tile.relatedFootnotes.split(',').map(item => Number(item) - 1)}
              tileIndex={index}
            />
          ))}
        </TilesGrid>
        <Footnotes>
          <ol>
            {footnotes.map(({ footnote }, index) => visibleFootnotes.includes(index) && (
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
    tiles: PropTypes.arrayOf(PropTypes.shape({
      relatedFootnotes: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
    })),
  }).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
};

