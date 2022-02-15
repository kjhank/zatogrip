/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components';
import { Link as GenericLink } from 'gatsby';
import { WPImage } from '@components';

import { queries } from '@utils/rwd';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 23;
  filter: drop-shadow(0 3px 16px rgb(0 0 0 / 0.08) );
  background-color: #fff;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};
  transform: ${({ isHidden }) => (isHidden ? 'translateY(-100%)' : 'translateY(0)')};

  @media ${queries.xs} {
    transform: none;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: min(17px, 0.885417vw);
    background-color: #fff;

    @media ${queries.s} {
      padding: 0.5% 0;

      ::before {
        content: '';
        position: absolute;
        left: 50%;
        width: 100vh;
        height: 100%;
        background-color: #fff;
        transform: translateX(-50%);
      }
    }

    @media ${queries.xs} {
      padding: 2.5% 0;
    }

    > a {
      position: relative;
      z-index: 1;
      display: block;
      width: auto;
      height: min(61px, 3.177083vw);
      transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};

      > svg {
        width: auto;
        height: 100%;
      }

    :hover {
      filter: brightness(1.05);
      transform: scale(1.05);
    }

    @media ${queries.s} {
      width: 35%;
      height: auto;

      > svg {
        width: 100%;
        height: auto;
      }
    }

    @media ${queries.xs} {
      width: 65%;
      height: auto;
    }
  }
}
`;

export const Navigation = styled.nav`
  transition: ${({ theme }) => theme.getTransitions(['transform'])};

  @media ${queries.s} {
    position: absolute;
    top: 100%;
    right: 0;
    left: 50%;
    z-index: -1;
    overflow: scroll;
    filter: drop-shadow(0 1em 2em rgb(0 0 0 / 0.2) );
    flex-direction: column;
    gap: 1em;
    width: 100vw;
    padding-bottom: 1em;
    background-color: #fff;
    transform: ${({ isHidden }) => (isHidden ? 'translate(-50%, -100%)' : 'translate(-50%, 0)')};
  }

  > ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: clamp(10px, 4.010417vw, 77px);
    list-style-type: none;

    @media ${queries.s} {
      flex-direction: column;

      > li {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const commonNavStyle = css`
  ${({ theme }) => theme.getLinkStyles(theme.getColor('link'))};
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(12px, 1.09375vw, 21vw);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-transform: uppercase;
  cursor: pointer;

  @media ${queries.s} {
    font-size: clamp(18px, 1.875vw, 36vw);
    text-align: center;
  }

  @media ${queries.xtiny} {
    margin: 0.25em 0;
    padding: 0.5em 0;
    font-size: 14px;
  }
`;

export const ScrollButton = styled.button.attrs({ type: 'button' })`
  ${commonNavStyle}
`;

export const Link = styled(GenericLink)`
  ${commonNavStyle};

  ::before {
    content: '';
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    display: ${({ $isHighlighted }) => ($isHighlighted ? 'block' : 'none')};
    height: 0.1em;
    background-color: ${({ theme }) => theme.getColor('link')};
    background-repeat: no-repeat;

    @media ${queries.s} {
      display: none;
    }
  }
`;

export const ProductsMenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
  filter: drop-shadow(11px 14px 27px rgb(0 0 0 / 0.2));
  width: 100%;
  height: ${({ theme }) => theme.getMin(450)};
  background-color: #fff;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};
  transform: ${({ isVisible }) => `translateY(${isVisible ? 0 : '-100%'})`};

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: ${({ theme }) => theme.getMin(25)};
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: ${({ theme }) => theme.getMin(66)};
  height: 100%;
  padding-right: ${({ theme }) => theme.getMin(445 - 140)};
`;

export const SingleProduct = styled.li`
  display: flex;
  align-items: flex-end;
  height: 100%;
  font-size: clamp(8px, 0.833333vw, 16px);

  :last-child {
    margin-left: ${({ theme }) => theme.getMin(109 - 66)};
  }
`;

export const ProductImage = styled(WPImage)`
  position: absolute;
  bottom: 4em;
  width: ${({
    image, theme,
  }) => theme.getMin(Math.round(image.width / 2))};
  max-width: unset;
  max-height: unset;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};

  > img {
    width: 100%;
    max-width: unset;
    max-height: unset;
  }

  &.submenu-variant {
    &--mini {
      left: 50%;
      transform: translateX(-50%)
    }

    &--baby {
      left: 50%;
      transform: translateX(-50%)
    }

    &--kids {
      left: 50%;
      transform: translateX(-50%)
    }

    &--junior {
      left: 50%;
      transform: translateX(-50%)
    }

    &--forte {
      left: 50%;
      transform: translateX(-50%)
    }
  }
`;

export const ProductLink = styled(GenericLink)`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 100%;

  :hover {
    ${ProductImage} {
      transform: scale(1.1) translateX(-50%);
    }
  }
`;

export const ProductName = styled.h2`
  color: ${({ theme }) => theme.getColor('alt')};
  font-family: ${({ theme }) => theme.getFont('heading')};

  > strong {
    color: ${({ theme }) => theme.getColor('accent')};
  }

  > span {
    color: ${({
    variant, theme,
  }) => theme.colors.products[variant]};
  }

  br {
    content: ' ';
    display: inline-block;
    width: 0.75ch;
  }
`;

export const NavToggle = styled.button`
  aspect-ratio: 1/1;
  position: relative;
  z-index: 1;
  display: none;
  width: min(40px, 10vw);
  height: min(40px, 10vw);
  background-color: #fff;
  transition: ${({ theme }) => theme.getTransitions([
    'transform',
    'box-shadow',
  ])};
  transform-style: preserve-3d;

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: ${({ isFlipped }) => (isFlipped ? 0 : 1)};
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    background-color: #fff;
    fill: ${({ theme }) => theme.getColor('alt')};
    stroke: ${({ theme }) => theme.getColor('alt')};
    transition: ${({ theme }) => theme.getTransitions([
    'opacity',
    'box-shadow',
  ])};
    transform: translate(-50%, -50%);

    :last-child {
      opacity: ${({ isFlipped }) => (isFlipped ? 1 : 0)};
      height: 80%;
    }
  }

  @media ${queries.s} {
    display: block;
  }
`;

export const SubNav = styled.nav`
  display: none;

  @media ${queries.s} {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
  }

  @media ${queries.xtiny} {
    margin-top: unset;
  }
`;

