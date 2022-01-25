import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

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
      <Content dangerouslySetInnerHTML={{ __html: sanitize(body) }} />
      <Footnotes
        items={footnotes}
      />
    </Container>
  </Wrapper>
);

Body.propTypes = {
  body: PropTypes.string.isRequired,
  footnotes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

