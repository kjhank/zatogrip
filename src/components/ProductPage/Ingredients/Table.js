import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import * as styled from './Table.styled';

export const Table = ({
  body, head, table_footer,
}) => {
  const cols = head?.length;

  console.log(cols);

  return (
    <styled.StyledTable isNarrow={cols < 3}>
      <styled.Head>
        <styled.Row>
          {head?.map(item => (
            <styled.HeadCell
              isUppercase={item.isCapitalized}
              key={item.text}
            >
              {item.text}
            </styled.HeadCell>
          ))}
        </styled.Row>
      </styled.Head>
      <styled.Body>
        {body?.map(({ row }) => (
          <styled.Row key={JSON.stringify(row)}>
            {row?.map(item => (
              <styled.Cell
                isLighter={item.isLighter}
                key={JSON.stringify(item)}
              >
                <span dangerouslySetInnerHTML={{ __html: sanitize(item.cell, { allowedTags: ['i'] }) }} />
              </styled.Cell>
            ))}
          </styled.Row>
        ))}
      </styled.Body>
      {table_footer ?
        (
          <styled.Footer>
            <styled.Row>
              <styled.Cell colSpan={cols}>
                {table_footer}
              </styled.Cell>
            </styled.Row>
          </styled.Footer>
        ) :
        null}
    </styled.StyledTable>
  );
};

Table.propTypes = {
  body: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]).isRequired,
  head: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]).isRequired,
  table_footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
};
