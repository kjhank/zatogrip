import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'gatsby';

import { WPImage } from '@components';

export const Section = styled.section`
  position: relative;
  margin: max(66px, 3.4375vw) 0;
`;

export const Background = styled(WPImage)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;

export const ProductGroup = styled.li``;

export const Product = styled.article``;

export const ArrowWrapper = styled.div`
  position: absolute;
  right: -20%;
  bottom: -20%;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  width: min(41px, 2.135417vw);
  border: 1px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: 50%;
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('alt')};
  transition: ${({ theme }) => theme.getTransitions([
    'background-color',
    'color',
  ])};

  > svg {
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
  }
`;

export const ProductLink = styled(Link)`
  position: relative;
  display: grid;
  place-items: center;
  width: min(90px, 4.6875vw);
  aspect-ratio: 1/1;
  border-radius: 999px;
  padding: min(24px, 1.25vw);
  background-color: ${({
    theme, variant,
  }) => theme.colors.products[variant]};
  color: #fff;
  font-size: clamp(12px, 1.145833vw, 22px);
  line-height: 0.8;
  text-align: center;
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};

  :hover {
    filter: brightness(1.1) drop-shadow(0 6px 6px ${rgba('#000', 0.5)});
    transform: scale(1.1);

    ${ArrowWrapper} {
      background-color: ${({ theme }) => theme.getColor('alt')};
      color: #fff;

      > svg {
        transform: translateX(50%);
      }
    }
  }
`;

export const ProductsList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
