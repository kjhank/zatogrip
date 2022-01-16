import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from '@components';

const Wrapper = styled.main`
  margin-top: 115px;
  color: ${({ theme }) => theme.colors.brand};
`;

const Text = styled.p`
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  color: #b00b1e;
  text-decoration: underline;
`;

const NotFoundPage = () => (
  <>
    <Wrapper>
      <Container>
        <h1>Hello there</h1>
        <Text>
          This is a custom 404 page.
          {' '}
          <StyledLink to="/">Click here</StyledLink>
          {' '}
          to go home.
        </Text>
      </Container>
    </Wrapper>
  </>
);

export default NotFoundPage;
