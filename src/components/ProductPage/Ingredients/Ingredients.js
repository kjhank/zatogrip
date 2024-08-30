import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { renderToStaticMarkup } from 'react-dom/server';
import sanitize from 'sanitize-html';

import { SectionHeading } from '@components/styled';
import { Container } from '@components';

import { Arrow } from '@icons';
import {
  Footnotes, Intro, Section,
} from './Ingredients.styled';
import { Table } from './Table';
import { IconsGrid } from './IconsGrid';

const sanitizeConfig = {
  allowedAttributes: false,
  allowedTags: [
    'svg',
    'g',
    'defs',
    'linearGradient',
    'stop',
    'circle',
    'div',
    'ul',
    'li',
    'path',
  ],
  parser: {
    lowerCaseAttributeNames: false,
    lowerCaseTags: false,
  },
};

export const Ingredients = ({
  footnotes, heading, icons, intro, slug, table,
}) => {
  const introRef = useRef(null);

  const introHasUlList = intro?.includes('<ul>') || intro?.includes('<li>');

  const rawArrow = renderToStaticMarkup(<Arrow />);

  const parsedIntro = introHasUlList ?
    intro.split('<li>').join(`<li><div class="arrow-wrapper">${rawArrow}</div>`) :
    intro;

  return (
    <Section className={slug}>
      <Container>
        <SectionHeading>{heading}</SectionHeading>
        <Intro
          dangerouslySetInnerHTML={{ __html: sanitize(parsedIntro, sanitizeConfig) }}
          ref={introRef}
        />
        {table?.hastable ?
          (
            <Table
              body={table?.body}
              head={table?.head}
            />
          ) :
          null}
        {icons?.length > 0 ? <IconsGrid icons={icons} /> : null}
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
};

Ingredients.propTypes = {
  footnotes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]),
  heading: PropTypes.string.isRequired,
  icons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]).isRequired,
  intro: PropTypes.string.isRequired,
  slug: PropTypes.string,
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
};

Ingredients.defaultProps = {
  footnotes: null,
  slug: null,
};
