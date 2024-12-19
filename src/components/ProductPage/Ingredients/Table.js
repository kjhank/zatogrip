import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Body, Cell, Head, HeadCell, Row, StyledTable,
} from './Table.styled';

export const Table = ({
  body, head,
}) => (
  <StyledTable isNarrow={head?.length < 3}>
    <Head>
      <Row>
        {head?.map(item => (
          <HeadCell
            isUppercase={item.isCapitalized}
            key={item.text}
          >
            {item.text}
          </HeadCell>
        ))}
      </Row>
    </Head>
    <Body>
      {body?.map(({ row }) => (
        <Row key={JSON.stringify(row)}>
          {row?.map(item => (
            <Cell
              isLighter={item.isLighter}
              key={JSON.stringify(item)}
            >
              <span dangerouslySetInnerHTML={{ __html: sanitize(item.cell, { allowedTags: ['i'] }) }} />
              {/* {item.cell} */}
            </Cell>
          ))}
        </Row>
      ))}
    </Body>
  </StyledTable>
);

Table.propTypes = {
  body: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]).isRequired,
  head: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]).isRequired,
};

