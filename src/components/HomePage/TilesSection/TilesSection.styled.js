import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { ArrowLink } from '@components';
import { TileBg } from '@icons';

export const Section = styled.section`
  position: relative;
  margin-top: -5%;
`;

export const TilesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${({ theme }) => theme.getMin(12)};
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
  z-index: 3;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const TileFront = styled.div`
  ${tileCommonStyle};
  display: grid;
  place-items: center;
  padding: 0 ${({ theme }) => theme.getMin(64)};
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: bold;
  font-size: clamp(14px, 1.458333vw, 28px);
  font-family: ${({ theme }) => theme.getFont('alt')};
  text-align: center;
`;

export const TileBack = styled.div`
  ${tileCommonStyle};
  display: grid;
  place-items: center;
  background-image: ${({ theme }) => theme.getGradient('radial')};
  color: #fff;
  font-size: clamp(10px, 0.833333vw, 16px);
  font-family: ${({ theme }) => theme.getFont('')};
  text-align: center;
  transform: rotateY(180deg);

  > p {
    width: 55%;
  }
`;

export const FlipButton = styled(ArrowLink)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  font-size: clamp(10px, 0.729167vw, 14px);
  text-transform: uppercase;
  transform: translateX(-50%);

  &.& {
    position: absolute;
  }
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
  position: relative;
  z-index: 1;
  padding-right: 40%;
  font-size: clamp(8px, 0.625vw, 12px);
  font-family: ${({ theme }) => theme.getFont('alt')};

  > ol {
    list-style-position: inside;

    > li {
      display: inline;

      > span {
        color: ${({ theme }) => theme.getColor('alt')};
      }
    }
  }
`;

export const TileBackground = styled(TileBg)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  max-width: 90%;
  height: auto;
  max-height: 90%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
