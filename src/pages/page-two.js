import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import { Helmet } from 'react-helmet';

import {
  GlobalStyle,
  isBrowser,
} from '@utils';

import Theme from '@theme/main';
import {
  Container,
  FixedHeader,
} from '@components';

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

const htmlAttributes = { lang: 'pl' };

const IndexPage = () => {
  if (isBrowser()) {
    smoothscroll.polyfill();
  }

  return (
    <Theme>
      <Helmet htmlAttributes={htmlAttributes}>
        <title>Untitled page</title>
      </Helmet>
      <GlobalStyle />
      <FixedHeader />
      <Wrapper>
        <Container>
          <h1>Hello there</h1>
          <Text>
            This is another page.
            {' '}
            <StyledLink to="/">Click here</StyledLink>
            {' '}
            to go home.
          </Text>
        </Container>
      </Wrapper>
    </Theme>
  );
};

export default IndexPage;
