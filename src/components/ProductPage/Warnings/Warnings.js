import React from 'react';
import PropTypes from 'prop-types';

import {
  BulletList, Container,
} from '@components';
import { SectionHeading } from '@components/styled';

import { Section } from './Warnigs.styled';

export const Warnings = ({
  heading, list,
}) => (
  <Section>
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <BulletList items={list} />
    </Container>
  </Section>
);

Warnings.propTypes = {
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

