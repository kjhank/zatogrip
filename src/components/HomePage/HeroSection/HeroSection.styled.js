import styled from 'styled-components';

import { WPImage } from '@components';
import { SquigglyArrow } from '@icons';

export const Section = styled.section`
  position: relative;
  aspect-ratio: 1920/1040;
  width: 100%;
  color: ${({ theme }) => theme.colors.alt};
`;

export const Heading = styled.h2`
  position: absolute;
  top: 10%;
  right: 12%;
  font-size: clamp(40px, 5.729167vw, 120px);
  line-height: 0.8;
  text-align: center;

  > strong {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const BottomText = styled.p`
  position: absolute;
  right: 15%;
  bottom: 10vh;
  font-size: clamp(14px, 1.666667vw, 32px);
`;

export const Background = styled(WPImage)`
  position: absolute;
  z-index: 0;
`;

export const Arrow = styled(SquigglyArrow)`
  position: absolute;
  right: 12%;
  bottom: 0;
  pointer-events: none;
`;
