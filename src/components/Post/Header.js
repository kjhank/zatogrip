import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import {
  Cover, StyledHeader, Title,
} from './Header.styled';

export const Header = ({
  cover, title,
}) => (
  <StyledHeader>
    <Cover image={cover} />
    <Container>
      <Title dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  cover: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

