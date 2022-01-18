import styled from 'styled-components';

export const Footer = styled.footer``;

export const Contacts = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.getRadius('larger')};
  padding: min(42px, 2.1875vw) min(124px, 6.458333vw);
  background-image: ${({ theme }) => theme.getGradient('radial')};
  color: #fff;
  font-weight: bold;
  font-size: clamp(8px, 0.729167vw, 14px);
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
`;

export const Link = styled.a``;

export const Address = styled.address``;
