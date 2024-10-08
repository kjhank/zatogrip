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
  usage,
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
      secondValue={serving?.second_value}
    />
    {usage?.isvisible ?
      (
        <Ingredients
          heading={usage?.heading}
          intro={usage?.description}
          slug={slug}
        />
      ) :
      null}
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
    footnotes: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({})),
      PropTypes.bool,
    ]).isRequired,
    hasPortraitBox: PropTypes.bool,
    heading: PropTypes.string,
    links: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({})),
      PropTypes.bool,
    ]),
    list: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  ingredients: PropTypes.shape({
    footnotes: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.shape({})),
    ]),
    heading: PropTypes.string,

    icons: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({})),
      PropTypes.bool,
    ]).isRequired,
    intro: PropTypes.string,
    table: PropTypes.shape({
      body: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({})),
        PropTypes.bool,
      ]),
      hastable: PropTypes.bool,
      head: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({})),
        PropTypes.bool,
      ]),
    }).isRequired,
  }).isRequired,
  serving: PropTypes.shape({
    description: PropTypes.string,
    heading: PropTypes.string,
    image: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({}),
    ]),
    second_value: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  usage: PropTypes.shape({
    description: PropTypes.string,
    heading: PropTypes.string,
    image: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({}),
    ]),
    isvisible: PropTypes.bool,
  }).isRequired,
  warnings: PropTypes.shape({
    heading: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

