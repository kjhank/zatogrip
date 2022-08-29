import styled from 'styled-components';

import { WPImage } from '@components';
import { queries } from '@utils/rwd';

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: min(100vh, 56.25vw);
  padding-bottom: ${({ theme }) => theme.getMin(150)};

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

export const CoverPortrait = styled(WPImage)`
  display: none;

  @media ${queries.s} {
    display: block;
    margin-top: min(100px, 15vw);

    > img {
      width: 100%;
    }
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
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-block-start: ${({ theme }) => theme.getMin(155)};
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  line-height: 1;

  > .heading {
    &--1,
    &--2 {
      font-weight: 800;
      font-family: ${({ theme }) => theme.getFont()};
    }

    &--2 {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  > svg {
    display: none;
  }

  @media ${queries.s} {
    margin-top: -1em;
    padding-block-start: 0;
  }
  `;

export const IntroWrapper = styled.div`
  position: relative;
  padding-inline-end: 28%;

  > h2 {
    margin-bottom: ${({ theme }) => theme.getMin(18)};
    color: ${({ theme }) => theme.colors.alt};
    font-weight: 500;
    font-size: clamp(36px, 3.90625vw, 75px);
  }

  > p {
    font-weight: 600;
    font-size: clamp(14px, 1.25vw, 24px);
  }

  @media ${queries.s} {
    padding-inline-end: 0;

    > h2 {
      text-align: center;
    }
  }
`;

