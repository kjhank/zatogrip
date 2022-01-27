import styled from 'styled-components';
import { Link } from 'gatsby';

import { WPImage } from '@components';

import { queries } from '@utils/rwd';

export const Section = styled.section`
  position: relative;
  margin: ${({ theme }) => theme.getMin(32)} 0  ${({ theme }) => theme.getMin(66)};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Background = styled(WPImage)`
  position: absolute;
  top: ${({ theme }) => theme.getMin(-375)};
  right: 0;
  left: 0;
  z-index: 0;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  right: -20%;
  bottom: -20%;
  display: grid;
  place-items: center;
  width: min(41px, 2.135417vw);
  height: min(41px, 2.135417vw);
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
  height: min(90px, 4.6875vw);
  aspect-ratio: 1/1;
  border-radius: 999px;
  padding: min(24px, 1.25vw);
  background-color: ${({
    theme, variant,
  }) => theme.colors.products[variant]};
  color: #fff;
  font-size: clamp(12px, 1.145833vw, 22px);
  line-height: 1;
  text-align: left;
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    width: 115%;
    height: auto;
    transform: translate(-50%, -50%);
  }

  :hover {
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
  gap: ${({ theme }) => theme.getMin(100)};

  :last-child {
    margin-left: ${({ theme }) => theme.getMin(150)};
  }
`;

export const Product = styled.article`
  position: relative;
`;

export const ProductsList = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: ${({ theme }) => theme.getMin(240)};
  width: 100%;
  height: ${({ theme }) => theme.getMin(529)};
  padding-left: ${({ theme }) => theme.getMin(50)};
`;

export const Package = styled(WPImage)`
  position: absolute;
  bottom: 75%;
  left: 50%;
  display: ${({ $isMobile }) => ($isMobile ? 'none' : 'block')};
  width: ${({
    image, theme,
  }) => theme.getMin(Math.round(image.width / 2))};
  max-width: unset;
  max-height: unset;
  transform: translateX(-40%);

  @media ${queries.xs} {
    display: ${({ $isMobile }) => ($isMobile ? 'block' : 'none')};
  }

  > img {
    width: 100%;
    max-width: unset;
    max-height: unset;
  }

  &.variant {
    &--mini {
      bottom: 85%;
    }

    &--forte {
      bottom: 50%;
      transform: translateX(-50%);
    }
  }

`;
