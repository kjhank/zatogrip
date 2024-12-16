import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { WPImage } from '@components';

import { queries } from '@utils/rwd';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  margin: ${({ theme }) => theme.getMin(200)} 0  ${({ theme }) => theme.getMin(66)};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${queries.xs} {
      align-items: center;
      margin-top: min(8em, 120px);

      > h2 {
        padding: 0 3em;
      }
    }
  }

  @media ${queries.xs} {
    margin-top: 0;
  }
`;

const commonBackground = css`
  position: absolute;
  right: 0;
  bottom: 75%;
  left: 0;
  z-index: 0;
  display: none;
`;

export const Background = styled(WPImage)`
  ${commonBackground}
  display: block;

  @media ${queries.xs} {
    display: none;
  }
`;

export const BackgroundPortrait = styled(WPImage)`
  ${commonBackground}

  @media ${queries.xs} {
    position: relative;
    right: unset;
    bottom: unset;
    z-index: -1;
    display: block;
    width: 100vw;
    max-width: unset;
    max-height: unset;
    margin-top: -70%;
    margin-bottom: -75%;

    > img {
      width: 100vw;
      max-width: 100vw;
    }
  }
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  right: -20%;
  bottom: -20%;
  display: grid;
  place-items: center;
  width: ${({ theme }) => theme.getMin(41)};
  height: ${({ theme }) => theme.getMin(41)};
  border: 1px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: 50%;
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('alt')};
  transition: ${({ theme }) => theme.getTransitions([
    'background-color',
    'color',
  ])};

  > svg {
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
  }

  @media ${queries.s} {
    right: -25%;
    bottom: -25%;
    width: ${({ theme }) => theme.getMin(50)};
    height: ${({ theme }) => theme.getMin(50)};
  }

  @media ${queries.xs} {
    right: -20%;
    bottom: -20%;
    width: max(12vw, 52px);
    height: max(12vw, 52px);

    > svg {
      width: 50%;
      height: auto;
    }
  }
`;

export const ProductLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(90px, 4.6875vw);
  height: min(90px, 4.6875vw);
  aspect-ratio: 1/1;
  border-radius: 999px;
  padding: min(24px, 1.25vw);
  background-color: ${({
    theme, variant,
  }) => theme.colors.products[variant]};
  color: #fff;
  font-size: clamp(12px, 1.145833vw, 22px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  line-height: 1;
  text-align: center;
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};

  > span {
    width: min-content;
  }

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    width: 115%;
    height: auto;
    transform: translate(-50%, -50%);
  }

  :hover {
    transform: scale(1.1);

    ${ArrowWrapper} {
      background-color: ${({ theme }) => theme.getColor('alt')};
      color: #fff;
    }
  }

  @media ${queries.s} {
    width: ${({ theme }) => theme.getMin(120)};
    height: ${({ theme }) => theme.getMin(120)};
    margin-top: -5%;
  }

  @media ${queries.xs} {
    width: min(45vw, 175px);
    height: min(45vw, 175px);
    font-size: max(8vw, 38px);
  }

  @media ${queries.xtiny} {
    font-size: 32px;
  }
`;

export const ProductGroup = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: ${({ theme }) => theme.getMin(100)};

  :last-child {
    margin-left: ${({ theme }) => theme.getMin(150)};
  }

  @media ${queries.xs} {
    flex-direction: column;
    align-items: center;
    gap: max(50px, 10vh);
    width: 100%;

    :last-child {
      margin-left: unset;
    }
  }

  @media ${queries.xtiny} {
    :not(:first-child) {
      margin-top: 64px;

      @supports (gap: max(50px, 10vh)) {
        margin-top: 0;
      }
    }
  }
`;

export const Product = styled.article`
  position: relative;

  @media ${queries.xs} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;

    &.variant--spray {
      a {
        font-size: min(7vw, 33.6px);
      }
    }
  }

  @media ${queries.xtiny} {
    :not(:first-child) {
      margin-top: 64px;

      @supports (gap: max(50px, 10vh)) {
        margin-top: 0;
      }
    }
  }

  > .new-badge {
    position: absolute;
    inset: 100% auto auto 50%;
    z-index: 1;
    translate: -50% 50%;

    @media ${queries.xs} {
      font-size: min(4vw, 20px);
    }
  }
`;

export const ProductsList = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: ${({ theme }) => theme.getMin(140)};
  width: 100%;
  height: ${({ theme }) => theme.getMin(529)};
  padding-left: ${({ theme }) => theme.getMin(50)};

  @media ${queries.s} {
    justify-content: center;
  }

  @media ${queries.xs} {
    flex-direction: column;
    align-items: center;
    gap: max(50px, 10vh);
    height: auto;
    padding: 0;
  }
`;

export const PackagePortrait = styled(WPImage)`
  display: none;

  @media ${queries.xs} {
    display: block;
    width: ${({ image }) => `min(${image.width / 2}px, 100%)`};
    max-width: unset;
    height: auto;
    margin: 0 -25%;

    > img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Package = styled(WPImage)`
  position: absolute;
  bottom: 75%;
  left: 50%;
  width: ${({
    image, theme,
  }) => theme.getMin(Math.round(image.width / 2))};
  max-width: unset;
  max-height: unset;
  transform: translateX(-40%);

  @media ${queries.xs} {
    display: none;
  }

  > img {
    width: 100%;
    max-width: unset;
    max-height: unset;
  }

  &.variant {
    &--mini {
      bottom: 85%;
    }

    &--forte {
      bottom: 50%;
      transform: translateX(-50%);
    }

    &--spray {
      transform: translateX(-55%);
    }
  }
`;
