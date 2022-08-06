import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, ExternalLink,
} from '@components';
import {
  FootnoteHeading as Heading, FootnotesWrapper as Wrapper,
} from './Body.styled';

const renderFootnotes = content => {
  const heading = content.length === 1 ? 'Źródło:' : 'Źródła:';

  return (
    <>
      <Heading>{heading}</Heading>
      <ol>
        {content.map(({ footnote }, index) => {
          const isLink = footnote.startsWith('http');
          const item = isLink ?
            (
              <ExternalLink
                href={footnote}
                rel="noreferrer nofollow"
              >
                {footnote}
              </ExternalLink>
            ) :
            footnote;

          return (
            <li
              className={isLink ? 'variant--link' : ''}
              key={`${footnote}-${index * 2}`}
            >
              {item}
            </li>
          );
        })}
      </ol>
    </>
  );
};

export const Footnotes = ({ items }) => (
  items?.length ?
    (
      <Wrapper>
        <Container>
          {renderFootnotes(items)}
        </Container>
      </Wrapper>
    ) :
    null
);

Footnotes.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

