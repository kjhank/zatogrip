import styled from 'styled-components';

import { WPImage } from '@components';

export const Wrapper = styled.header`
  position: relative;
  height: 100vh;
`;

export const Cover = styled(WPImage)`
  position: absolute;
  top: 0;
  z-index: 0;
  max-width: unset;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  margin-left: auto;
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
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
  font-family: ${({ theme }) => theme.getFont('heading')};
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
`;

export const Box = styled(WPImage)`
  position: absolute;
  /* bottom: -20%; */
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
`;

export const Footnotes = styled.footer`
  margin-top: min(37px, 1.927083vw);
  font-size: clamp(6px, 0.520833vw, 10px);

  ol {
    list-style-position: inside;
  }
`;
