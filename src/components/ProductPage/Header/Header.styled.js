import styled from 'styled-components';

import { WPImage } from '@components';

export const Wrapper = styled.header`
  position: relative;
  height: 100vh;
  padding-top: min(148px, 7.708333vw);
`;

export const Cover = styled(WPImage)`
  position: absolute;
  top: min(-47px, -2.447917vw);
  right: 0;
  left: 0;
  z-index: -2;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  padding-right: 5em;
  padding-left: min(601px, 31.302083vw);

  > ul {
    padding-right: 17%;
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
  font-family: ${({ theme }) => theme.getFont('heading')};
`;

export const Description = styled.div`
  margin: min(25px, 1.302083vw) 0 min(40px, 2.083333vw);
  font-size: clamp(14px, 1.25vw, 24px);

  p + p {
    margin-top: 1em;
    line-height: 1.3;
  }

  b,
  strong {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }
`;

export const LinksWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: min(28px, 1.458333vw);
  margin-top: min(86px, 4.479167vw);
  font-size: clamp(10px, 1.041667vw, 20px);

  > a {
    border-radius: ${({ theme }) => theme.getRadius('large')};
  }
`;

export const Box = styled(WPImage)`
  position: absolute;
  bottom: -6%;
  left: -2.5%;
  z-index: 1;
  width: min(551px, 28.697917vw);
`;

export const Footnotes = styled.footer`
  margin-top: min(37px, 1.927083vw);
  font-size: clamp(6px, 0.520833vw, 10px);

  ol {
    list-style-position: inside;
  }
`;
