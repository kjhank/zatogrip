import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Arrow } from '@icons';
import {
  Bullet, Item, List,
} from './BulletList.styled';

const sanitizeConfig = {
  allowedTags: ['br'],
};

export const BulletList = ({ items }) => (
  <List>
    {items.map(({ item }) => (
      <Item key={item}>
        <Bullet>
          <Arrow />
        </Bullet>
        <span dangerouslySetInnerHTML={{ __html: sanitize(item, sanitizeConfig) }} />
      </Item>
    ))}
  </List>
);

BulletList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

