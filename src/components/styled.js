import styled, { css } from 'styled-components';

import { queries } from '@utils/rwd';
import { WPImage } from './WPImage/WPImage';

export const Main = styled.main`
  background-color: #fff;
  isolation: isolate;
`;

export const arrowLinkStyles = css`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.getRadius('smaller')};
  padding: min(12px, 0.625vw) min(20px, 1.041667vw);
  color: #fff;
  font-weight: normal;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) => theme.getGradient('radial')};
    transition: ${({ theme }) => theme.getTransitions(['filter'])};
  }

  > svg {
    margin-left: max(15px, 0.78125vw);
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
  }

  :hover {
    background-size: 150%;

    ::before {
      filter: brightness(1.2);
    }

    > svg {
      transform: translateX(50%);
    }
  }

  @media ${queries.xs} {
    padding: ${({ theme }) => `${theme.getMin(16)} ${theme.getMin(24)}`}
  }
`;

export const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(28px, 2.916667vw, 56px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: center;

  @media ${queries.xs} {
    font-size: min(72px, 10vw);
  }

  @media ${queries.tiny} {
    font-size: min(12vw, 36px);
  }

  @media ${queries.xtiny} {
    font-size: 32px;
  }
`;

export const Background = styled(WPImage)`
  position: absolute;
  inset-block-start: 30%;
  z-index: -1;
  pointer-events: none;

  @media ${queries.s} {
    display: none
  }
`;

export const BackgroundPortrait = styled(WPImage)`
  display: none;

  @media ${queries.s} {
    position: absolute;
    inset-block-start: 0;
    z-index: -1;
    display: block;
    width: 100%;
    pointer-events: none;

    > img {
      width: 100%;
    }
  }
`;

export const StaticWrapper = styled.div`
  position: relative;
  margin-block-end: ${({ theme }) => theme.getMin(200)};
  padding-block-start: ${({ theme }) => theme.getMin(150)};
`;

export const Footnotes = styled.footer`
  position: relative;
  z-index: 1;
  font-size: clamp(8px, 0.625vw, 12px);
  font-family: ${({ theme }) => theme.getFont('alt')};

  > ol {
    position: absolute;
    padding-right: 40%;
    list-style-position: inside;

    > li {
      display: inline;

      > span {
        color: ${({ theme }) => theme.getColor('alt')};
      }
    }
  }

  @media ${queries.xs} {
    > ol {
      top: 100%;
      padding-right: 0;
      text-align: center;
    }
  }
`;

export const NewBadge = styled.span.attrs({ className: 'new-badge' })`
  display: grid;
  place-items: center;
  border: ${({ theme }) => `${theme.getMin(2)} solid ${theme.getColor('alt')}`};
  border-radius: ${({ theme }) => theme.getRadius('small')};
  padding: ${({ theme }) => theme.getMin(5)} ${({ theme }) => theme.getMin(10)};
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 700;
  font-size: clamp(8px, 0.625vw, 12px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-transform: uppercase;

  @media ${queries.xs} {
    border-width: min(2px, 0.7vw);
    padding: min(5px, 1.7vw) min(10px, 3.4vw);
  }
`;
