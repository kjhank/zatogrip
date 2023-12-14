import styled from 'styled-components';

import { WPImage } from '@components';
import { queries } from '@utils/rwd';

export const Wrapper = styled.div`
  position: relative;
  min-height: 70vh;
  padding-top: ${({ theme }) => theme.getMin(100)};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }

  @media ${queries.xs} {
    padding-top: 10vh;
  }
`;

export const Background = styled(WPImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  filter: opacity(0.21);
  width: 110vw;
  max-width: unset;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${queries.l} {
    top: 0;
  }

  @media ${queries.m} {
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
`;

export const PortraitBackground = styled(Background)`
  display: none;
`;

export const Content = styled.article`
  background-color: #fff;

  > * {
    margin-block-start: 1em;
  }

  strong, b {
    font-weight: 600;
  }

  em, i {
    font-style: italic;
  }

  a {
    text-decoration: underline;
  }

  h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  h2 {
    font-size: 1.4em;
  }

  h3 {
    font-size: 1.3em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 1.1em;
  }
`;
