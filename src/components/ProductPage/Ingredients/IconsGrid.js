import React from 'react';
import PropTypes from 'prop-types';

import {
  Caption, Figure, Image, InnerGrid, Item, List, Row,
} from './IconsGrid.styled';

export const IconsGrid = ({ icons }) => (
  <List>
    {icons.map(({
      hasBadges, row,
    }) => (
      <Row key={JSON.stringify(row)}>
        <InnerGrid columns={row.length}>
          {row.map(({
            icon, name,
          }) => (
            <Item key={JSON.stringify(icon)}>
              {name ?
                (
                  <Figure>
                    <Image
                      $isSmaller={hasBadges}
                      image={icon}
                    />
                    <Caption>{name}</Caption>
                  </Figure>
                ) :
                (
                  <Image
                    $isSmaller={hasBadges}
                    image={icon}
                  />
                )
                }
            </Item>
          ))}
        </InnerGrid>
      </Row>
    ))}
  </List>
);

IconsGrid.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
