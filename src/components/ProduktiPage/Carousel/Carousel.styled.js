/* stylelint-disable no-descending-specificity */
import styled from 'styled-components';
import { rgba } from 'polished';

import { queries } from '@utils/rwd';
import { WPImage } from '@components';
import { commonStyle as arrowStyle } from '@components/ArrowLink/ArrowLink.styled';

export const Section = styled.section`
  position: relative;
  z-index: 2;
  margin-block: 0 min(85px, 4.427083vw);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > h2 {
    width: 100%;
  }

  @media ${queries.s} {
    flex-direction: column;
    padding-inline: 10%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: min(38px, 1.979167vw);

  @media ${queries.l} {
    margin: auto;
  }

  @media ${queries.s} {
    justify-content: space-between;
    width: 100%;
  }
`;

export const Intro = styled.p`
  margin-top: ${({ theme }) => theme.getMin(23)};
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: 600;
  font-size: clamp(14px, 16px + 0.4vw, 24px);
  white-space: pre-wrap;

  @media ${queries.s} {
    width: 100%;
    margin: 1em 0 2em;
    font-weight: normal;
    font-size: max(5vw, 18px);
    text-align: center;
  }
`;

export const FilesWrapper = styled.div`
  padding-top: ${({ theme }) => theme.getMin(47)};

  ul.swiper-wrapper {
    padding-top: 1em;

    @media ${queries.s} {
      padding-top: 3em;
    }
  }

  li.swiper-slide {
    height: auto;
  }
`;

export const SingleFile = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  aspect-ratio: 1/1;
  transition: ${({ theme }) => theme.getTransitions(['box-shadow'])};

  @media ${queries.xs} {
    flex-shrink: 0;
  }

  @media ${queries.xtiny} {
    width: 100%;
    height: 100%;
  }

  > div {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    height: 90%;
    box-shadow: ${rgba('#000', 0.25)} 0 0 22px;
    border-radius: ${({ theme }) => theme.getRadius('small')};
    background-color: #fff;

    > a:last-child {
      &:hover {
        background-size: 150%;

        ::before {
          filter: brightness(1.2);
        }

        > svg {
          transform: translateX(50%);
        }
      }
    }
  }

  @media ${queries.xs} {
    margin: auto auto 0;
  }
`;

export const Image = styled(WPImage)`
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${queries.s} {
    max-height: 80%;
    margin-bottom: 5%;
  }

`;

export const Name = styled.h3`
  margin: min(39px, 2.03125vw) 0 min(24px, 1.25vw);
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: bold;
  font-size: clamp(12px, 1.145833vw, 22px);
  font-family: ${({ theme }) => theme.getFont('alt')};
  text-transform: uppercase;

  @media ${queries.s} {
    margin-block: 1em;
  }

  @media ${queries.xs} {
    font-size: clamp(24px, 2.5vw, 48px);
  }
`;

export const Arrow = styled.a`
  ${arrowStyle}
  margin-top: auto;
  font-size: clamp(10px, 0.729167vw, 16px);
  font-family: sans-serif;

  @media ${queries.xs} {
    margin: auto auto 0;
    padding: ${({ theme }) => `${theme.getMax(12)} ${theme.getMax(24)}`};
    font-size: clamp(14px, 1.25vw, 24px);
  }
`;

export const ScrollButton = styled.button.attrs({ type: 'button' })`
  padding: 0;
  background-color: transparent;
  color: ${({
    theme, disabled,
  }) => (disabled ? theme.getColor('copy') : theme.getColor('alt'))};
  transform: ${({ isFlipped }) => isFlipped && 'rotateY(180deg)'};
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  > svg {
    transition: ${({ theme }) => theme.getTransitions([
    'color',
    'transform',
    'filter',
  ])};
    transform: ${({ disabled }) => disabled && 'scale(0.9)'};
  }

  :hover {
    > svg {
      filter: ${({ disabled }) => !disabled && 'brightness(1.25)'};
      transform: ${({ disabled }) => !disabled && 'translateX(10%)'};
    }
  }

  @media ${queries.l} {
    order: ${({ isFlipped }) => (isFlipped ? 0 : 2)}
  }
`;
