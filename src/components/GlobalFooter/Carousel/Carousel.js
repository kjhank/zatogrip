import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import { Container } from '@components';
import {
  Item,
  List,
  NavButton,
  Section,
  StaticHeading,
  Text,
} from './Carousel.styled';
import { backgrounds } from './backgrounds';

export const Carousel = ({ content }) => {
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const lastIndex = content.items.length - 1;

  const handleSlides = direction => {
    if (direction === 'next') {
      setCurrentIndex(current => (current === lastIndex ? 0 : current + 1));
    } else {
      setCurrentIndex(current => (current === 0 ? lastIndex : current - 1));
    }
  };

  return (
    <Section>
      <Container>
        <StaticHeading>{content.heading}</StaticHeading>
        <NavButton
          isFlipped
          onClick={() => handleSlides('previous')}
        >
          <Arrow />
        </NavButton>
        <NavButton
          onClick={() => handleSlides('next')}
        >
          <Arrow />
        </NavButton>
        <List>
          {content.items.map(({ item }, index) => {
            const Background = backgrounds[item.bgSlug];

            return (
              <Item
                isVisible={index === currentIndex}
                key={item.bgSlug}
              >
                <Text fontSize={item.baseFontSize}>{item.text}</Text>
                <Background className={item.bgSlug} />
              </Item>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};

Carousel.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

