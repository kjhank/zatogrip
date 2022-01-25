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
  font-family: ${({ theme }) => theme.getFont('heading')};
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
`;

export const ModalTrigger = styled.button.attrs({ type: 'button' })`
  ${({ theme }) => theme.getLinkStyles(theme.getColor('alt'))};
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
    }
  }
`;

export const ModalHeading = styled.h2`
  color: ${({ theme }) => theme.getColor('accent')};
  font-size: clamp(24px, 2.1875vw, 42px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: center;
  text-transform: uppercase;
`;

export const ItemImage = styled(WPImage)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.getMin(-100)};
  height: ${({
    image, theme,
  }) => theme.getMin(image.height / 2)};
  max-height: unset;
  mix-blend-mode: multiply;
  transform: translateY(-50%);

  > img {
    /* max-width: unset;
    max-height: unset; */
  }
`;

export const ItemsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.getMin(54)};
  margin: ${({ theme }) => `${theme.getMin(100)} 0 ${theme.getMin(70)}`};
`;

export const SingleItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Thumbnail = styled(WPImage)`
  overflow: hidden;
  aspect-ratio: 1/1;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.getMin(24)};
  border: 2px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: ${({ theme }) => theme.getRadius('small')};

  > img {
    width: 100%;
    max-width: unset;
    height: 100%;
    max-height: unset;
    object-fit: cover;
  }
`;

export const Name = styled.h3`
  margin-bottom: ${({ theme }) => theme.getMin(24)};
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(28px, 2.604167vw, 50px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: center;
`;
