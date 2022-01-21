import styled, { css } from 'styled-components';
import { Link as GenericLink } from 'gatsby';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 23;
  background-color: #fff;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};
  transform: ${({ isHidden }) => (isHidden ? 'translateY(-100%)' : 'translateY(0)')};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: max(17px, 0.885417vw);

    > svg {
      width: auto;
      height: max(61px, 3.177083vw);
    }
  }

`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: clamp(10px, 4.010417vw, 77px);
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
`;

export const ScrollButton = styled.button.attrs({ type: 'button' })`
  ${commonNavStyle}
`;

export const Link = styled(GenericLink)`
  ${commonNavStyle}
`;
