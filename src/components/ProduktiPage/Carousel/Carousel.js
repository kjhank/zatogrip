import React, {
  createRef,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { LongArrow } from '@icons';

import {
  Header, Intro, Navigation, ScrollButton, Section,
} from './Carousel.styled';

import { FilesTrack } from './FilesTrack';

export const Carousel = ({
  downloadText, intro, items,
}) => {
  const swiperRef = useRef();
  const filesRef = createRef(null);
  const [
    scrollPosition,
    setScrollPosition,
  ] = useState(null);

  const handleClick = direction => {
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

  return (
    <Section>
      <Container>
        <Header>
          <Intro>
            {intro}
          </Intro>
          <Navigation>
            <ScrollButton
              disabled={scrollPosition === 'start'}
              isFlipped
              onClick={() => handleClick('left')}
            >
              <LongArrow />
            </ScrollButton>
            <ScrollButton
              disabled={scrollPosition === 'end'}
              onClick={() => handleClick('right')}
            >
              <LongArrow />
            </ScrollButton>
          </Navigation>
        </Header>
        <FilesTrack
          clickText={downloadText}
          files={items}
          innerRef={filesRef}
          intro={intro}
          swiperRef={swiperRef}
        />
      </Container>
    </Section>
  );
};

Carousel.propTypes = {
  downloadText: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
