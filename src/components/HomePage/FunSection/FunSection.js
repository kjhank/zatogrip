import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import { Container } from '@components';
import { SectionHeading } from '@components/HomePage/styled';
import {
  ArrowWrapper,
  Background,
  ContentWrapper,
  Intro,
  ItemImage,
  ModalTrigger,
  Section,
  SingleTrigger,
  TriggersList,
} from './FunSection.styled';

export const FunSection = ({
  content, innerRef,
}) => {
  const list = [
    content.origami,
    content.coloringBooks,
    content.DIY,
  ];

  return (
    <Section ref={innerRef}>
      <Background image={content.background} />
      <Container>
        <ContentWrapper>
          <SectionHeading>{content.heading}</SectionHeading>
          <Intro>
            {content.intro}
          </Intro>
          <TriggersList>
            {list.map(item => (
              <SingleTrigger key={item.text}>
                <ItemImage image={item.image} />
                <ModalTrigger>
                  {item.text}
                  <ArrowWrapper>
                    <Arrow />
                  </ArrowWrapper>
                </ModalTrigger>
              </SingleTrigger>
            ))}
          </TriggersList>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

FunSection.propTypes = {
  content: PropTypes.shape({
    DIY: PropTypes.shape({}),
    background: PropTypes.shape({}),
    coloringBooks: PropTypes.shape({}),
    heading: PropTypes.string,
    intro: PropTypes.string,
    origami: PropTypes.shape({}),
  }).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
};

