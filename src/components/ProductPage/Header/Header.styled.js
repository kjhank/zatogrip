import styled from 'styled-components';

import { WPImage } from '@components';
import { queries } from '@utils/rwd';

export const Wrapper = styled.header`
  position: relative;
  height: min(100vh, 56.25vw);

  > div {
    :last-child {
      height: 15%;
    }
  }

  @media ${queries.s} {
    height: auto;
    padding-block-end: 3em;
    ${({ theme }) => theme.getSectionBorder()};

    > div {
      :last-child {
        height: auto;
      }
    }
  }
`;

export const Cover = styled(WPImage)`
  position: absolute;
  inset-block-start: 0;
  z-index: 0;
  width: 100%;
  max-width: unset;
  height: 100%;
  max-height: unset;

  > img {
    width: 100%;
    height: 100%;
    max-height: unset;
    object-fit: contain;
    object-position: top left;
  }

  @media ${queries.l} {
    max-height: unset;

    > img {
      height: 100%;
      max-height: unset;
      object-fit: cover;
    }
  }

  @media ${queries.s} {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 60%;
  height: 100%;
  margin-inline-start: auto;

  @media ${queries.l} {
    width: 50%;
  }

  @media ${queries.s} {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const TopWrapper = styled.div`
  position: relative;
  height: 85%;
  padding-block-start: ${({ theme }) => theme.getMin(110)};

  ${ContentWrapper} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: min(3em, 4vw);

    > ul {
      margin-block-end: 1em;
      padding-inline-end: 5%;
      font-family: ${({ theme }) => theme.getFont('heading')};
    }

    @media ${queries.s} {
      align-items: center;
      width: 100%;
      margin-block-start: -80%;

      &.variant--tabletki-zatogrip-forte {
        margin-block-start: -50%;
      }

      > ul {
        font-size: max(3vw, 16px);
      }
    }

    @media ${queries.xs} {
      > ul {
        font-size: max(20px, 5vw);
      }
    }
  }

  @media ${queries.s} {
    height: 100%;
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
  font-family: ${({ theme }) => theme.getFont('heading')};

  > svg {
    display: none;
  }

  @media ${queries.s} {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: min(45vw, 175px);
    height: min(45vw, 175px);
    aspect-ratio: 1/1;
    margin-block-start: -10%;
    border-radius: 999px;
    padding: min(24px, 1.25vw);
    background-color: ${({
    theme, variant,
  }) => theme.colors.products[variant]};
    color: #fff;
    font-size: min(10vw, 48px);
    font-family: ${({ theme }) => theme.getFont('heading')};
    line-height: 1;
    text-align: center;

    > span {
      width: 75%;
    }

    > svg {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      z-index: 0;
      display: block;
      width: 115%;
      height: auto;
      transform: translate(-50%, -50%);
    }

    &.variant--zatogrip-md-gardlo-spray {
      font-size: min(7vw, 33.6px);
    }
  }
`;

export const Description = styled.div`
  font-size: clamp(14px, 1.25vw, 24px);

  p + p {
    margin-block-start: 0.8em;
    line-height: 1.2;
  }

  b,
  strong {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }

  @media ${queries.s} {
    margin: 2em 0;
    padding: 0 5%;
    font-size: clamp(24px, 2.5vw, 48px);
    text-align: left;
  }

  @media ${queries.s} {
    font-size: max(20px, 5vw);
  }

  @media ${queries.xtiny} {
    font-size: 18px;
  }
`;

export const LinksWrapper = styled.nav`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: min(28px, 1.458333vw);
  margin-block-start: min(24px, 4.479167vw);
  font-size: clamp(10px, 1.041667vw, 20px);

  > a {
    border-radius: ${({ theme }) => theme.getRadius('large')};
  }

  @media ${queries.s} {
    justify-content: space-between;
    width: 100%;
    margin-block-end: 2em;

    > a {
      padding: ${({ theme }) => `${theme.getMax(12)} ${theme.getMax(24)}`};
      font-size: clamp(18px, 1.875vw, 36px);
    }
  }

  @media ${queries.xs} {
    flex-direction: column;
    order: 1;
    padding: 0 20%;

    > a {
      width: 100%;
      padding: ${({ theme }) => `${theme.getMax(12)} ${theme.getMax(24)}`};
      font-size: clamp(18px, 1.875vw, 36px);
    }
  }

  @media ${queries.xxs} {
    padding: 0 5%;
  }

  @media ${queries.xtiny} {
    > a:not(:first-of-type) {
      margin-block-start: 2em;
    }
  }
`;

export const Box = styled(WPImage)`
  position: absolute;
  z-index: 1;
  width: ${({
    theme, image,
  }) => theme.getMin(image?.width / 2)};
  max-width: unset;
  max-height: unset;

  > img {
    width: 100%;
    max-width: unset;
    max-height: unset;
  }

  &.variant {
    &--zatogrip-mini {
      inset-block-start: calc(100% - 25vh);
      inset-inline-end: ${({ theme }) => `calc(100% + ${theme.getMin(150)})`};
    }

    &--zatogrip-baby {
      inset-block-start: calc(100% - 25vh);
      inset-inline-end: ${({ theme }) => `calc(100% + ${theme.getMin(200)})`};
    }

    &--zatogrip-kids {
      inset-block-start: calc(100% - 25vh);
      inset-inline-end: ${({ theme }) => `calc(100% + ${theme.getMin(175)})`};
    }

    &--zatogrip-junior {
      inset-block-start: calc(100% - 25vh);
      inset-inline-end: ${({ theme }) => `calc(100% + ${theme.getMin(192)})`};
    }

    &--tabletki-zatogrip-forte {
      inset-block-start: calc(100% - 20vh);
      inset-inline-end: ${({ theme }) => `calc(100% + ${theme.getMin(150)})`};
    }

    &--zatogrip-md-gardlo-spray {
      inset-block-start: calc(100% - 30vh);
      inset-inline-end: ${({ theme }) => `calc(100% + ${theme.getMin(200)})`};
      inline-size: ${({ theme }) => theme.getMin(400)};
    }
  }

  @media ${queries.s} {
    position: static;
    display: ${({ $isShownInPortrait }) => ($isShownInPortrait ? 'block' : 'none')};
    width: 100%;

    &.variant {
      &--zatogrip-kids {
        margin-block-start: -20%;
      }
    }
  }
`;

export const BoxPortrait = styled(WPImage)`
  display: none;
  width: 100%;
  max-width: unset;
  height: auto;
  max-height: unset;

  > img {
    width: 100%;
    max-width: unset;
    max-height: unset;
  }

  @media ${queries.s} {
    display: block;
  }

  &.variant {
    &--zatogrip-md-gardlo-spray-portrait {
      margin-block-start: max(-100px, -33.33vw);
    }
  }
`;

export const Footnotes = styled.footer`
  font-size: clamp(6px, 0.520833vw, 10px);

  ol {
    list-style-position: inside;
  }

  @media ${queries.s} {
    order: 0;
    font-size: min(16px, 3vw);
    text-align: left;
  }
`;

export const CoverPortrait = styled(WPImage)`
  display: none;

  @media ${queries.s} {
    display: block;

    > img {
      width: 100%;
    }
  }
`;
