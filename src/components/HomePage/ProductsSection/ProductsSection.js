import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { SectionHeading } from '@components/HomePage/styled';
import {
  Background, BackgroundPortrait, Section,
} from './ProductsSection.styled';
import { List } from './List';

export const ProductsSection = ({
  content, innerRef,
}) => (
  <Section ref={innerRef}>
    <Background image={content?.background} />
    <Container>
      <SectionHeading>{content?.heading}</SectionHeading>
      <BackgroundPortrait image={content?.backgroundPortrait} />
      <List products={content?.products} />
    </Container>
  </Section>
);

ProductsSection.propTypes = {
  content: PropTypes.shape({
    background: PropTypes.shape({}),
    backgroundPortrait: PropTypes.shape({}),
    heading: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
};
