import React from 'react';

import {
  Heading, List, Number, Wrapper,
} from './TripleBrag.styled';

export const TripleBrag = () => (
  <Wrapper>
    <Heading>
      <span>Potrójne</span>
      <span>
        wsparcie
        <sup>1</sup>
      </span>
      <Number>3</Number>
    </Heading>
    <List>
      <li>
        Odporność
        <sup>2</sup>
      </li>
      <li>
        Drogi oddechowe
        <sup>3</sup>
      </li>
      <li>
        Gardło
        <sup>4</sup>
      </li>
    </List>
  </Wrapper>
);
