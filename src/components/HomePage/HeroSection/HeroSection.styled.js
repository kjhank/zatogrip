import styled, { css } from 'styled-components';

import { WPImage } from '@components';
import { queries } from '@utils/rwd';
import { SquigglyArrow } from '@icons';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  height: 56.25vw;
  color: ${({ theme }) => theme.colors.alt};
  font-family: ${({ theme }) => theme.getFont('heading')};

  @media ${queries.xs} {
    height: unset;
    margin-top: 3em;

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

  @media ${queries.s} {
    top: min(200px, 8vh);
    font-size: clamp(30px, 5vw, 90px);
  }

  @media ${queries.xs} {
    position: static;
    width: 100%;
    font-size: clamp(80px, 7.8125vw, 150px);
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
  @media ${queries.xs} {
    position: static;
    order: 2;
    width: 90%;
    margin-top: -2em;
    transform: rotate(-10deg);
  }
`;
