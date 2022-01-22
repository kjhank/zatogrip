import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '@icons';
import {
  Bullet, Item, List,
} from './BulletList.styled';

export const BulletList = ({ items }) => (
  <List>
    {items.map(({ item }) => (
      <Item key={item}>
        <Bullet>
          <Arrow />
        </Bullet>
        {item}
      </Item>
    ))}
  </List>
);

BulletList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

