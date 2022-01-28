import styled from 'styled-components';

import { WPImage } from '@components';
import { queries } from '@utils/rwd';

export const Wrapper = styled.header`
  position: relative;
  height: 100vh;

  @media ${queries.xs} {
    height: auto;
    padding-bottom: 3em;
    ${({ theme }) => theme.getSectionBorder()};
  }
`;

export const Cover = styled(WPImage)`
  position: absolute;
  top: 0;
  z-index: 0;
  max-width: unset;
  height: 100%;

  @media ${queries.l} {
    max-height: unset;

    > img {
      height: 100%;
      max-height: unset;
      object-fit: cover;
    }
  }

  @media ${queries.xs} {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  margin-left: auto;

  @media ${queries.l} {
    width: 50%;
  }

  @media ${queries.xs} {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const TopWrapper = styled.div`
  position: relative;
  height: 85%;
  padding-top: ${({ theme }) => theme.getMin(135)};

  ${ContentWrapper} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > ul {
      margin-top: auto;
      padding-right: 17%;
      padding-bottom: 1em;
    }

    @media ${queries.xs} {
      align-items: center;
      width: 100%;
      margin-top: -80%;
    }
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
  font-family: ${({ theme }) => theme.getFont('heading')};

  > svg {
    display: none;
  }

  @media ${queries.xs} {
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
    font-size: max(10vw, 48px);
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
  margin: min(25px, 1.302083vw) 0 min(40px, 2.083333vw);
  font-size: clamp(14px, 1.25vw, 24px);

  p + p {
    margin-top: 1em;
    line-height: 1.3;
  }

  b,
  strong {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }

  @media ${queries.xs} {
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

  @media ${queries.xs} {
    position: static;
    width: 100%;
  }
`;

export const Footnotes = styled.footer`
  margin-top: min(37px, 1.927083vw);
  font-size: clamp(6px, 0.520833vw, 10px);

  ol {
    list-style-position: inside;
  }

  @media ${queries.xs} {
    order: 0;
    font-size: min(16px, 3vw);
    text-align: center;
  }
`;

export const CoverPortrait = styled(WPImage)`
  display: none;

  @media ${queries.xs} {
    display: block;
  }
`;
