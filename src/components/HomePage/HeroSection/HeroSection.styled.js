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
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;

export const Heading = styled.h2`
  position: absolute;
  inset-block-start: ${({ insetBlockStart }) => `calc(${insetBlockStart} + 0.25em)`};
  inset-inline-end: 0;
  order: 1;
  width: 44%;
  color: #92d955;
  font-weight: bold;
  font-size: clamp(28px, 4.0104169vw, 84px);
  font-family: ${({ theme }) => theme.fonts.hero};
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
  white-space: pre;

  > svg {
    width: auto;
    height: 1.2em;
  }

  .logo-zato {
    fill: #fcfcfc;

    @media ${queries.xs} {
      fill: unset;
    }
  }

  .logo-subtitle {
    display: none;
  }

  .heading {
    &--subtitle {
      line-height: 0.8;
      letter-spacing: -3px;
    }

    &--small {
      color: #fcfcfc;
      font-weight: 400;
      font-size: 0.4em;

      @media ${queries.xs} {
        color: #030303;
      }
    }
  }

  @media ${queries.s} {
    top: min(200px, 8vh);
    font-size: clamp(30px, 5vw, 90px);
  }

  @media ${queries.xs} {
    position: static;
    width: 100%;
    padding-block-end: 20%;
    padding-inline-start: 2%;
    font-size: clamp(40px, 3.90625vw, 75px);
  }

  @media ${queries.xtiny} {
    font-size: 40px;
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
