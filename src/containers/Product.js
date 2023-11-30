import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import {
  Header, Ingredients, Serving, Warnings,
} from '@components/ProductPage';

export const Product = ({
  header,
  ingredients,
  serving,
  slug,
  warnings,
}) => (
  <Main>
    <Header
      background={header?.background}
      backgroundPortrait={header?.backgroundPortrait}
      box={header?.box}
      boxPortrait={header?.boxPortrait}
      description={header?.description}
      footnotes={header?.footnotes}
      hasPortraitBox={header?.hasPortraitBox}
      heading={header?.heading}
      links={header?.links}
      list={header?.list}
      pageSlug={slug}
    />
    <Serving
      amount={serving?.value}
      badge={serving?.image}
      description={serving?.description}
      heading={serving?.heading}
      pageSlug={slug}
    />
    <Ingredients
      footnotes={ingredients?.footnotes}
      heading={ingredients?.heading}
      icons={ingredients?.icons}
      intro={ingredients?.intro}
      table={ingredients?.table}
    />
    <Warnings
      heading={warnings?.heading}
      list={warnings?.list}
    />
  </Main>
);

Product.propTypes = {
  header: PropTypes.shape({
    background: PropTypes.shape({}),
    backgroundPortrait: PropTypes.shape({}),
    box: PropTypes.shape({}),
    boxPortrait: PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.bool,
    ]),
    description: PropTypes.string,
    footnotes: PropTypes.arrayOf(PropTypes.shape({})),
    hasPortraitBox: PropTypes.bool,
    heading: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({})),
    list: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  ingredients: PropTypes.shape({
    footnotes: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.shape({})),
    ]),
    heading: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.shape({})),
    intro: PropTypes.string,
    table: PropTypes.shape({}),
  }).isRequired,
  serving: PropTypes.shape({
    description: PropTypes.string,
    heading: PropTypes.string,
    image: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({}),
    ]),
    value: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  warnings: PropTypes.shape({
    heading: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

