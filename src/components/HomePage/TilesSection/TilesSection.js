import React, {
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Swiper, SwiperSlide,
} from 'swiper/react';

import {
  Hand, LongArrow,
} from '@icons';
import { Container } from '@components';
import { SectionHeading } from '@components/HomePage/styled';
import {
  Arrow,
  ArrowText,
  ArrowTextWrapper,
  Footnotes,
  MobileNav,
  MobileTiles,
  ScrollButton,
  Section,
  TilesGrid,
} from './TilesSection.styled';
import { Tile } from './Tile';

export const TilesSection = ({
  content: {
    arrowText, clickText, closeText, footnotes, heading, tiles,
  },
  innerRef,
}) => {
  const swiperRef = useRef();
  const [
    scrollPosition,
    setScrollPosition,
  ] = useState('start');

  const [
    flippedTile,
    setFlippedTile,
  ] = useState(-1);

  const [
    visibleFootnotes,
    setVisibleFootnotes,
  ] = useState([]);

  const handleClick = direction => {
    setFlippedTile(-1);

    const { current: swiperInstance } = swiperRef;

    if (direction === 'right') {
      swiperInstance.slideNext();
    } else {
      swiperInstance.slidePrev();
    }

    if (swiperInstance.isBeginning) {
      setScrollPosition('start');
    } else if (swiperInstance.isEnd) {
      setScrollPosition('end');
    } else {
      setScrollPosition(null);
    }
  };

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
        {arrowText && (
        <ArrowTextWrapper>
          <ArrowText>{arrowText}</ArrowText>
          <Arrow />
        </ArrowTextWrapper>
        )}
        <SectionHeading>{heading}</SectionHeading>
        <TilesGrid>
          {tiles?.map((tile, index) => (
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
        <MobileTiles>
          <Swiper
            onSwiper={instance => {
              const ref = swiperRef;

              ref.current = instance;
            }}
            slidesPerView={1}
            spaceBetween={20}
            wrapperTag="ul"
          >
            {tiles?.map((tile, index) => (
              <SwiperSlide
                key={tile.backText}
                tag="li"
              >
                <Tile
                  as="article"
                  clickText={clickText}
                  closeText={closeText}
                  content={tile}
                  handleFlip={handleFlip}
                  hasBackground={tile.backHasBg}
                  isFlipped={index === flippedTile}
                  relatedFootnotes={!!tile.relatedFootnotes && tile.relatedFootnotes.split(',').map(item => Number(item) - 1)}
                  tileIndex={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </MobileTiles>
        <MobileNav>
          <ScrollButton
            disabled={scrollPosition === 'start'}
            isFlipped
            onClick={() => handleClick('left')}
          >
            <LongArrow />
          </ScrollButton>
          <Hand />
          <ScrollButton
            disabled={scrollPosition === 'end'}
            onClick={() => handleClick('right')}
          >
            <LongArrow />
          </ScrollButton>
        </MobileNav>
        <Footnotes>
          <ol>
            {footnotes?.map(({ footnote }, index) => visibleFootnotes.includes(index) && (
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

