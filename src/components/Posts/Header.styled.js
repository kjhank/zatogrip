import { WPImage } from '@components';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 100vh;
  margin-bottom: ${({ theme }) => theme.getMin(96)};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right: 49%;
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  white-space: nowrap;
`;

export const Intro = styled.div`
  margin: min(25px, 1.302083vw) 0 min(40px, 2.083333vw);
  font-weight: bold;
  font-size: clamp(14px, 1.25vw, 24px);
  line-height: 1.208333;

  p + p {
    margin-top: 1em;
  }
`;

export const Cover = styled(WPImage)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  max-width: unset;
  height: 100%;

  > img {
    width: 100%;
    max-width: unset;
    object-fit: cover;
  }
`;
