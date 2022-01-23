import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'gatsby';

import { WPImage } from '@components';

import { queries } from '@utils/rwd';

export const Section = styled.section`
  position: relative;
  margin: max(66px, 3.4375vw) 0;
`;

export const Background = styled(WPImage)`
  position: absolute;
  top: -25vw;
  right: 0;
  left: 0;
  z-index: -1;
`;

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

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
  }

  :hover {
    /* filter: brightness(1.1) drop-shadow(0 6px 6px ${rgba('#000', 0.5)}); */
    transform: scale(1.1);

    ${ArrowWrapper} {
      background-color: ${({ theme }) => theme.getColor('alt')};
      color: #fff;
    }
  }
`;

export const ProductGroup = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Product = styled.article`
  position: relative;
`;

export const ProductsList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Package = styled(WPImage)`
  position: absolute;
  bottom: 100%;
  display: ${({ $isMobile }) => ($isMobile ? 'none' : 'block')};
  max-width: unset;
  max-height: unset;

  @media ${queries.xs} {
    display: ${({ $isMobile }) => ($isMobile ? 'block' : 'none')};
  }

  &.variant {
    &--mini {
      width: 28.697917vw;
    }

    &--baby {
      width: 38.125vw;
    }

    &--kids {
      width: 38.75vw;
    }

    &--junior {
      width: 38.802083vw;
    }

    &--forte {
      width: 34.322917vw;
    }
  }

`;
