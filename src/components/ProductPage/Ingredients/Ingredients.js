import React from 'react';
import PropTypes from 'prop-types';

import { SectionHeading } from '@components/styled';
import { Container } from '@components';

import {
  Footnotes, Intro, Section,
} from './Ingredients.styled';
import { Table } from './Table';
import { IconsGrid } from './IconsGrid';

export const Ingredients = ({
  footnotes, heading, icons, intro, table,
}) => (
  <Section>
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <Intro>{intro}</Intro>
      <Table
        body={table?.body}
        head={table?.head}
      />
      <IconsGrid icons={icons} />
      {footnotes?.length && (
      <Footnotes>
        <ul>
          {footnotes?.map(({ footnote }) => <li key={footnote}>{footnote}</li>)}
        </ul>
      </Footnotes>
      )}
    </Container>
  </Section>
);

Ingredients.propTypes = {
  footnotes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]),
  heading: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  intro: PropTypes.string.isRequired,
  table: PropTypes.shape({
    body: PropTypes.arrayOf(PropTypes.shape({})),
    head: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

Ingredients.defaultProps = {
  footnotes: null,
};
