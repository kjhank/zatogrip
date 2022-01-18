import styled from 'styled-components';

import { WPImage } from '@components';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding-top: min(85px, 4.427083vw);
  padding-bottom: min(221px, 11.510417vw);

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

export const ContentWrapper = styled.div`
  width: 37%;
`;

export const Background = styled(WPImage)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  max-height: unset;
`;

export const Intro = styled.p`
  margin: min(70px, 3.645833vw) 0 min(84px, 4.375vw);
  font-weight: bold;
  font-size: clamp(14px, 1.25vw, 24px);
`;

export const TriggersList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: min(84px, 4.375vw);
  font-size: clamp(25px, 2.604167vw, 50px);
`;

export const SingleTrigger = styled.li`
  position: relative;
  padding-left: 25%;
`;

export const ArrowWrapper = styled.div`
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  width: min(41px, 2.135417vw);
  margin-left: min(37px, 1.927083vw);
  border: 1px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.getColor('alt')};
  color: #fff;
  transition: ${({ theme }) => theme.getTransitions([
    'background-color',
    'color',
  ])};

  > svg {
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
  }
`;

export const ModalTrigger = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.getColor('alt')};
  white-space: nowrap;
  cursor: pointer;

  :hover {
    ${ArrowWrapper} {
      background-color: #fff;
      color: ${({ theme }) => theme.getColor('alt')};

      > svg {
        transform: translateX(50%);
      }
    }
  }
`;

export const ItemImage = styled(WPImage)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 20%;
  transform: translateY(-50%);
`;
