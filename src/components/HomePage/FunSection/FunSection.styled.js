import styled from 'styled-components';

import { WPImage } from '@components';
import { queries } from '@utils/rwd';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding-top: min(85px, 4.427083vw);
  padding-bottom: min(221px, 11.510417vw);

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    @media ${queries.xs} {
      flex-direction: column;
      align-items: center;
    }
  }

  @media ${queries.xs} {
    margin-bottom: max(200px, 10vw);
  }
`;

export const ContentWrapper = styled.div`
  width: 37%;

  @media ${queries.xs} {
    width: 100%;
  }
`;

export const Background = styled(WPImage)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  max-height: unset;

  @media ${queries.xs} {
    display: none;
  }
`;

export const BackgroundPortrait = styled(WPImage)`
  position: relative;
  left: -5vw;
  display: none;
  width: 100vw;
  max-width: unset;

  @media ${queries.xs} {
    display: block;
  }
`;

export const Intro = styled.p`
  margin: min(70px, 3.645833vw) 0 min(84px, 4.375vw);
  font-weight: bold;
  font-size: clamp(14px, 1.25vw, 24px);

  @media ${queries.xs} {
    margin-top: 2em;
    font-weight: 600;
    font-size: clamp(24px, 2.5vw, 48px);
  }
`;

export const TriggersList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: min(84px, 4.375vw);
  font-size: clamp(25px, 2.604167vw, 50px);
  font-family: ${({ theme }) => theme.getFont('heading')};

  @media ${queries.xs} {
    align-items: center;
    font-size: clamp(36px, 3.75vw, 72px);
  }
`;

export const SingleTrigger = styled.li`
  position: relative;
  padding-left: 25%;

  @media ${queries.l} {
    padding-left: 10%;
  }

  @media ${queries.m} {
    padding-left: 5%;
  }

  @media ${queries.xs} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ArrowWrapper = styled.div`
  aspect-ratio: 1/1;
  display: grid;
  flex-grow: 0;
  flex-shrink: 0;
  place-items: center;
  width: ${({ theme }) => theme.getMin(41)};
  height: ${({ theme }) => theme.getMin(41)};
  margin-left: min(37px, 1.927083vw);
  border: 1px solid ${({ theme }) => theme.colors.gradient.from};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gradient.from};
  color: #fff;
  transition: ${({ theme }) => theme.getTransitions([
    'background-color',
    'border-color',
    'color',
  ])};

  > svg {
    width: 75%;
    height: auto;
  }

  @media ${queries.xs} {
    width: max(40px, 10vw);
    height: max(40px, 10vw);
    margin-left: 1em;
  }
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
      border-color: ${({ theme }) => theme.colors.gradient.from};
      background-color: #fff;
      color: ${({ theme }) => theme.colors.gradient.from};
    }
  }

  @media ${queries.xs} {
    width: 80%;
    white-space: normal;
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
  width: 4em;
  max-width: unset;
  max-height: unset;
  mix-blend-mode: multiply;
  transform: translateY(-50%);

  @media ${queries.s} {
    left: -3em;
    width: 3em;
  }

  @media ${queries.xs} {
    position: static;
    width: 75%;
    max-width: unset;
    height: auto;
    transform: unset;
  }
`;

export const ItemsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.getMin(54)};
  margin: ${({ theme }) => `${theme.getMin(100)} 0 ${theme.getMin(70)}`};

  @media ${queries.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SingleItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${queries.xs} {
    a {
      padding: 0.5em 1em;
    }
  }
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
  font-size: clamp(22px, 2.604167vw, 50px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: center;
`;
