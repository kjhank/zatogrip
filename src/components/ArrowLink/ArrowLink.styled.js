import styled, { css } from 'styled-components';
import { Link as GenericLink } from 'gatsby';
import { ExternalLink as ExLink } from '@components';

const commonStyle = css`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.getRadius('smaller')};
  padding: min(12px, 0.625vw) min(20px, 1.041667vw);
  color: #fff;
  font-weight: normal;
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-transform: ${({ $isCaps }) => $isCaps && 'uppercase'};
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

export const Link = styled(GenericLink)`
  ${commonStyle};
`;

export const Button = styled.button.attrs({ type: 'button' })`
  ${commonStyle};
`;

export const ExternalLink = styled(ExLink)`
  ${commonStyle};
`;
