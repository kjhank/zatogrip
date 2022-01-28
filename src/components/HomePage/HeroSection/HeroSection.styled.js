import styled, { css } from 'styled-components';

import { WPImage } from '@components';
import { SquigglyArrow } from '@icons';
import { queries } from '@utils/rwd';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  height: min(100vh, 56.25vw);
  color: ${({ theme }) => theme.colors.alt};
  font-family: ${({ theme }) => theme.getFont('heading')};

  @media ${queries.xs} {
    /* aspect-ratio: 2/3; */
    height: unset;
    min-height: 100vh;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Heading = styled.h2`
  position: absolute;
  top: ${({ theme }) => theme.getMin(154)};
  right: 12%;
  order: 1;
  font-size: clamp(40px, 5.729167vw, 120px);
  line-height: 0.8;
  text-align: center;

  > strong {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media ${queries.xs} {
    position: static;
    width: 100%;
    font-size: clamp(80px, 7.8125vw, 150px);
  }
`;

export const BottomText = styled.p`
  position: absolute;
  right: 15%;
  bottom: ${({ theme }) => theme.getMin(100)};
  font-size: clamp(14px, 1.666667vw, 32px);

  @media ${queries.l} {
    bottom: ${({ theme }) => theme.getMin(150)};
  }

  @media ${queries.xs} {
    position: static;
    bottom: 0;
    order: 3;
    margin-top: -2em;
    font-size: clamp(24px, 2.5vw, 48px);
  }
`;

const commonBackground = css`
  position: absolute;
  z-index: 0;
`;

export const Background = styled(WPImage)`
  ${commonBackground}

  @media ${queries.xs} {
    display: none
  }
`;

export const PortraitBackground = styled(WPImage)`
  ${commonBackground}
  display: none;

  @media ${queries.xs} {
    position: static;
    display: block;
    order: 0;
  }
`;

export const Arrow = styled(SquigglyArrow)`
  position: absolute;
  right: 12%;
  bottom: 0;
  width: ${({ theme }) => theme.getMin(556)};
  pointer-events: none;

  @media ${queries.s} {
    bottom: -5%;
    width: 40%;
  }

  @media ${queries.xs} {
    position: static;
    order: 2;
    width: 90%;
    margin-top: -2em;
    transform: rotate(-10deg);
  }
`;
