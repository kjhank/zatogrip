import { WPImage } from '@components';
import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const StyledHeader = styled.header`
  height: 100vh;
  margin-bottom: ${({ theme }) => theme.getMin(96)};

  @media ${queries.l} {
    height: 56.25vw;
  }

  @media ${queries.s} {
    padding-top: 3vh;
  }

  @media ${queries.xs} {
    height: auto;
    min-height: 100vh;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right: ${({ theme }) => theme.getMin(1550 / 2)};

    @media ${queries.xs} {
      z-index: 1;
      margin-top: -20%;
      padding-right: unset;
      background-color: #fff;

      ::before {
        content: '';
        position: absolute;
        top: 0;
        left: -5vw;
        z-index: -1;
        width: 100vw;
        height: 50%;
        background-color: #fff;
      }
    }
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  white-space: nowrap;

  @media ${queries.xs} {
    font-size: max(10vw, 48px);
    text-align: center;
    white-space: normal;
  }
`;

export const Intro = styled.div`
  margin: min(25px, 1.302083vw) 0 min(40px, 2.083333vw);
  font-weight: bold;
  font-size: clamp(14px, 1.25vw, 24px);
  line-height: 1.208333;

  p + p {
    margin-top: 1em;
  }

  @media ${queries.xs} {
    margin-top: 1em;
    font-size: max(5vw, 24px);
    text-align: center;
  }
`;

export const Cover = styled(WPImage)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  max-width: unset;
  height: 100%;

  > img {
    width: 100%;
    max-width: unset;
    object-fit: cover;
  }

  @media ${queries.xs} {
    display: none;
  }
`;

export const CoverPortrait = styled(WPImage)`
  display: none;

  @media ${queries.xs} {
    display: block;
  }
`;
