import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 46;
  overflow: scroll;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 10vh 0;
  background-color: rgb(255 255 255 / 0.5);
  backdrop-filter: blur(5px);
`;

export const Wrapper = styled.aside`
  filter: ${({ theme }) => `drop-shadow(${theme.getMin(10)} ${theme.getMin(20)} ${theme.getMin(64)} rgb(0 0 0 / 0.29))`};
  width: ${({ theme }) => theme.getMin(1150)};
  border-radius: ${({ theme }) => theme.getRadius()};
  padding: ${({ theme }) => theme.getMin(75)};
  background-color: #fff;
  transform: translateY(-100%);

  @media ${queries.s} {
    width: 90vw;
  }

  @media ${queries.xs} {
    width: 90vw;
    border-radius: ${({ theme }) => theme.getRadius('tiny')};
    padding: min(1vw, 4px);
  }

  @media ${queries.xtiny} {
  filter: ${({ theme }) => `drop-shadow(${theme.getMin(10)} ${theme.getMin(20)} ${theme.getMin(64)} rgba(0, 0, 0, 0.29))`};

  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.getMin(34)};
  right: ${({ theme }) => theme.getMin(34)};
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.getMin(75)};
  border: 2px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: min(6px, 10px);
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions([
    'background-color',
    'color',
  ])};
  cursor: pointer;

  > svg {
    width: 40%;
    height: auto;
    margin-bottom: 10%;
    fill: currentColor;
  }

  :hover {
    background-color: ${({ theme }) => theme.getColor('alt')};
    color: #fff;
  }

  @media ${queries.s} {
    top: ${({ theme }) => theme.getMin(50)};
    right: ${({ theme }) => theme.getMin(50)};
    width: ${({ theme }) => theme.getMin(100)};
  }

  @media ${queries.xs} {
    width: max(10vw, 40px);
    height: max(10vw, 40px);
  }
`;
