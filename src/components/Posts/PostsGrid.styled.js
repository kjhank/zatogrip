import styled from 'styled-components';

import {
  ArrowLink, WPImage,
} from '@components';

import { queries } from '@utils/rwd';

export const Wrapper = styled.section``;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.getMin('96')};
  padding-bottom: ${({ theme }) => theme.getMin(150)};

  @media ${queries.s} {
    padding-bottom: max(150px, 50vw);
  }

  @media ${queries.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Title = styled.h2`
  margin: min(39px, 2.03125vw) 0 min(24px, 1.25vw);
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: bold;
  font-size: clamp(12px, 1.145833vw, 22px);
  font-family: ${({ theme }) => theme.getFont('alt')};
  text-transform: uppercase;
`;

export const Image = styled(WPImage)`
  overflow: hidden;
  aspect-ratio: 447/370;
  width: 100%;
  border-radius: ${({ theme }) => theme.getRadius('small')};

  > img {
    width: 100%;
    height: 100%;
    transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};
    transform: translate3d(0, 0, 0);
    object-fit: cover;
  }
`;

export const Excerpt = styled.p`
  margin-bottom: min(1.666667vw, 32px);
  color: ${({ theme }) => theme.getColor('main')};
  font-size: clamp(10px, 1.145833vw, 20px);
`;

export const Link = styled(ArrowLink)`
  margin-top: auto;
  font-size: clamp(10px, 0.729167vw, 16px);

  @media ${queries.xs} {
    padding: ${({ theme }) => `${theme.getMax(12)} ${theme.getMax(24)}`};
    font-size: min(3vw, 16px);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;

  :hover {
    ${Image} {
      > img {
        filter: brightness(1.05);
        transform: scale(1.05) translate3d(0, 0, 0);
      }
    }
  }
`;
