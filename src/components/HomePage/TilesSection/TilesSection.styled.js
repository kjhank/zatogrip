import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { arrowLinkStyles } from '@components/styled';

export const Section = styled.section`
  position: relative;
`;

export const TilesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: max(12px, 0.625vw);
  margin: max(66px, 3.4375vw) 0;
`;

export const SingleTile = styled.li`
  position: relative;
  z-index: ${({ isFlipped }) => (isFlipped ? 2 : 1)};
  box-shadow: ${({ isFlipped }) => (isFlipped ? `${rgba('#000', 0.25)} -24px 27px 42px` : `${rgba('#000', 0.1)} 0 3px 36px`)};
  aspect-ratio: 1/1;
  border-radius: ${({ theme }) => theme.getRadius('small')};
  transition: ${({ theme }) => theme.getTransitions([
    'transform',
    'box-shadow',
  ])};
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg) scale(1.2)' : 'rotateY(0) scale(1)')};
  transform-style: preserve-3d;
`;

const tileCommonStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const TileFront = styled.div`
  ${tileCommonStyle};
  display: grid;
  place-items: center;
  padding: 0 55px;
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: bold;
  font-size: clamp(14px, 1.458333vw, 28px);
  text-align: center;
`;

export const TileBack = styled.div`
  ${tileCommonStyle};
  display: grid;
  place-items: center;
  padding: 0 20%;
  background-image: ${({ theme }) => theme.getGradient('radial')};
  color: #fff;
  font-size: clamp(10px, 0.954861vw, 18.3px);
  text-align: center;
  transform: rotateY(180deg);
`;

export const FlipButton = styled.button.attrs({ type: 'button' })`
  ${arrowLinkStyles};
  position: absolute;
  bottom: 10%;
  left: 50%;
  text-transform: uppercase;
  transform: translateX(-50%);
`;

export const CloseButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  color: #fff;
  font-weight: 300;
  font-size: clamp(6px, 0.520833vw, 10px);
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};
  transform: translate3d(0, 0, 0);
  cursor: pointer;

  :hover {
    filter: drop-shadow(0 0 2px ${rgba('#fff', 0.5)});
  }

  > svg {
    margin-bottom: 12;
    font-size: 38px;
    fill: currentColor;
  }
`;

export const Footnotes = styled.footer`
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(6px, 0.520833vw, 10px);

  > ol {
    list-style-position: inside;
  }
`;
