import styled, { css } from 'styled-components';

export const Main = styled.main`
  background-color: #fff;
`;

export const arrowLinkStyles = css`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.getRadius('smaller')};
  padding: min(12px, 0.625vw) min(20px, 1.041667vw);
  color: #fff;
  font-weight: normal;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) => theme.getGradient('radial')};
    transition: ${({ theme }) => theme.getTransitions(['filter'])};
  }

  > svg {
    margin-left: max(15px, 0.78125vw);
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
  }

  :hover {
    background-size: 150%;

    ::before {
      filter: brightness(1.2);
    }

    > svg {
      transform: translateX(50%);
    }
  }
`;

export const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(28px, 2.916667vw, 56px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: center;
`;
