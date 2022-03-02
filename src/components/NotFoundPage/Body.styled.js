import styled from 'styled-components';

import {
  ArrowLink, WPImage,
} from '@components';
import { queries } from '@utils/rwd';

export const Wrapper = styled.div`
  position: relative;
  min-height: 70vh;
  padding-top: ${({ theme }) => theme.getMin(100)};
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${queries.xs} {
    padding-top: 10vh;
  }
`;

export const Code = styled.h1`
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(120px, 26.3vw + 1rem, 521px);
  line-height: 1;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.getColor('accent')};
  font-size: clamp(32px, 2.03125vw + 1rem, 55px);
  line-height: 1.24;
  text-transform: uppercase;
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

  /* @media ${queries.m} {
    top: -50%;
    left: 0;
    display: block;
  } */
`;

export const Link = styled(ArrowLink)`
  margin: 2em 0 6em;
  border-radius: ${({ theme }) => theme.getRadius('larger')};
  padding: 1em;
  font-size: clamp(14px, 0.73vw + 1rem, 30px);
  text-transform: uppercase;

  > svg {
    width: auto;
    height: 1em;
  }
`;
