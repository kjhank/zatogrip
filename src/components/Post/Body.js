import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import {
  Content, Wrapper,
} from './Body.styled';
import { Footnotes } from './Footnotes';

export const Body = ({
  body, footnotes,
}) => (
  <Wrapper>
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: body }} />
      <Footnotes
        items={footnotes}
      />
    </Container>
  </Wrapper>
);

Body.propTypes = {
  body: PropTypes.string.isRequired,
  footnotes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.bool,
  ]).isRequired,
};

