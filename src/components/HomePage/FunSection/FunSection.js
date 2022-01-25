import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import {
  Container, Modal,
} from '@components';
import { SectionHeading } from '@components/HomePage/styled';
import { isBrowser } from '@utils/helpers';
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

import { Items } from './Items';

export const FunSection = ({
  content, innerRef,
}) => {
  const BODY = isBrowser ? document.body : null;
  const list = [
    {
      ...content.origami,
      type: 'origami',
    },
    {
      ...content.coloringBooks,
      type: 'coloringBooks',
    },
    {
      ...content.DIY,
      type: 'diy',
    },
  ];

  const [
    openModal,
    setOpenModal,
  ] = useState(null);

  const handleModal = type => {
    setOpenModal(type);
  };

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
                <ModalTrigger onClick={() => handleModal(item.type)}>
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
      {list.find(({ type }) => type === openModal) ?
        createPortal(
          <Modal
            close={handleModal}
          >
            <Items
              content={list.find(({ type }) => type === openModal)}
              heading={content.modalTitle}
            />
          </Modal>, BODY
        ) :
        null}
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
    modalTitle: PropTypes.string,
    origami: PropTypes.shape({}),
  }).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
};

