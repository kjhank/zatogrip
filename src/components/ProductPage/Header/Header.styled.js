import styled from 'styled-components';

import { WPImage } from '@components';
import { queries } from '@utils/rwd';

export const Wrapper = styled.header`
  position: relative;
  height: 100vh;

  > div {
    :last-child {
      height: 15%;
    }
  }

  @media ${queries.s} {
    height: auto;
    padding-bottom: 3em;
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
  top: 0;
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
  margin-left: auto;

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
  padding-top: ${({ theme }) => theme.getMin(110)};

  ${ContentWrapper} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: min(1em, 1.302083vw);

    > ul {
      margin-top: auto;
      margin-bottom: 1em;
      padding-right: 5%;
    }

    @media ${queries.s} {
      align-items: center;
      width: 100%;
      margin-top: -80%;

      > ul {
        font-size: max(3vw, 16px);
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
    margin-top: -15%;
    border-radius: 999px;
    padding: min(24px, 1.25vw);
    background-color: ${({
    theme, variant,
  }) => theme.colors.products[variant]};
    color: #fff;
    font-size: min(10vw, 48px);
    font-family: ${({ theme }) => theme.getFont('heading')};
    line-height: 1;
    text-align: left;

    > span {
      width: 75%;
    }

    > svg {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 0;
      display: block;
      width: 115%;
      height: auto;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Description = styled.div`
  font-size: clamp(14px, 1.25vw, 24px);

  p + p {
    margin-top: 0.8em;
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
    margin-top: 2em;
    padding: 0 5%;
    font-size: clamp(24px, 2.5vw, 48px);
    text-align: center;
  }
`;

export const LinksWrapper = styled.nav`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: min(28px, 1.458333vw);
  margin-top: min(24px, 4.479167vw);
  font-size: clamp(10px, 1.041667vw, 20px);

  > a {
    border-radius: ${({ theme }) => theme.getRadius('large')};
  }

  @media ${queries.s} {
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2em;

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
`;

export const Box = styled(WPImage)`
  position: absolute;
  z-index: 1;
  width: ${({
    theme, image,
  }) => theme.getMin(image.width / 2)};
  max-width: unset;
  max-height: unset;

  > img {
    width: 100%;
    max-width: unset;
    max-height: unset;
  }

  &.variant {
    &--zatogrip-mini {
      top: ${({ theme }) => `calc(100% - ${theme.getMin(214)})`};
      right: ${({ theme }) => `calc(100% + ${theme.getMin(88)})`};
    }

    &--zatogrip-baby {
      top: ${({ theme }) => `calc(100% - ${theme.getMin(257)})`};
      right: ${({ theme }) => `calc(100% + ${theme.getMin(57)})`};
    }

    &--zatogrip-kids {
      top: ${({ theme }) => `calc(100% - ${theme.getMin(250)})`};
      right: ${({ theme }) => `calc(100% + ${theme.getMin(31)})`};
    }

    &--zatogrip-junior {
      top: ${({ theme }) => `calc(100% - ${theme.getMin(270)})`};
      right: ${({ theme }) => `calc(100% + ${theme.getMin(25)})`};
    }

    &--tabletki-zatogrip-forte {
      top: ${({ theme }) => `calc(100% - ${theme.getMin(230)})`};
      right: ${({ theme }) => `calc(100% + ${theme.getMin(61)})`};
    }
  }

  @media ${queries.s} {
    position: static;
    width: 100%;
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
    text-align: center;
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
