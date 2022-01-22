import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import {
  Header, Serving,
} from '@components/ProductPage';

export const Product = ({
  header,
  // ingredients,
  serving,
  //  warnings,
}) => (
  <Main>
    <Header
      background={header.background}
      box={header.box}
      description={header.description}
      footnotes={header.footnotes}
      heading={header.heading}
      links={header.links}
      list={header.list}
    />
    <Serving
      amount={serving.value}
      badge={serving.image}
      description={serving.description}
      heading={serving.heading}
    />
  </Main>
);

Product.propTypes = {
  header: PropTypes.shape({
    background: PropTypes.shape({}),
    box: PropTypes.shape({}),
    description: PropTypes.string,
    footnotes: PropTypes.arrayOf(PropTypes.shape({})),
    heading: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({})),
    list: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  serving: PropTypes.shape({
    description: PropTypes.string,
    heading: PropTypes.string,
    image: PropTypes.shape({}),
    value: PropTypes.string,
  }).isRequired,
};

