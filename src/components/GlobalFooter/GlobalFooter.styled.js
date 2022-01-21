import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { ExternalLink } from '@components';

export const Footer = styled.footer`
  position: relative;
  z-index: 2;
  font-family: ${({ theme }) => theme.getFont('alt')};
`;

export const Contacts = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.getRadius('larger')};
  padding: min(42px, 2.1875vw) min(124px, 6.458333vw);
  background-image: ${({ theme }) => theme.getGradient('radial', 65)};
  background-position: center;
  background-size: 100%;
  color: #fff;
  font-weight: bold;
  font-size: clamp(8px, 0.729167vw, 14px);
  line-height: 1.285714;
  transition: ${({ theme }) => theme.getTransitions(['background-size'])};
  transform: translateY(-50%);

  :hover {
    background-size: 150%;
  }
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;

  ul {
    list-style-type: none;
  }

  > svg {
    margin-right: min(25px, 1.302083vw);
  }

  a {
    ${({ theme }) => theme.getLinkStyles()};
  }
`;

export const Link = styled.a``;

export const Address = styled.address``;

const badgeStyles = css`
  border-radius: ${({ theme }) => theme.getRadius('medium')};
  padding: min(20px, 1.041667vw) min(66px, 3.4375vw);
  background-color: ${({ theme }) => theme.getColor('light')};
  color: #fff;
  font-size: clamp(9px, 0.989583vw, 19px);
  font-family: ${({ theme }) => theme.getFont('heading')};
`;

export const Badge = styled.p`
  ${badgeStyles}
  margin-left: min(13px, 0.677083vw);
`;

export const BadgeLink = styled(ExternalLink)`
  ${badgeStyles}
  filter: none;
  background-color: ${({ theme }) => theme.getColor('accent')};
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};

  :hover {
    filter: drop-shadow(0 4px 4px ${rgba('#000', 0.25)});
    transform: scale(1.05);
  }
`;

export const Bottom = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  transform: translateY(-50%);
`;

export const Legal = styled.div`
  margin-right: auto;
  margin-left: min(22px, 1.145833vw);
  color: ${({ theme }) => theme.getColor('copy')};
  font-size: min(10px, 0.520833vw);
`;

export const Links = styled.nav`
  display: flex;
  align-items: flex-start;
  gap: min(20px, 1.041667vw);
  font-weight: bold;
  font-size: clamp(8px, 0.729167vw, 14px);

  a {
    ${({ theme }) => theme.getLinkStyles(theme.getColor('copy'))};
  }
`;
