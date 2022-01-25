import { WPImage } from '@components';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  height: 100vh;

  > div {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }
`;

export const Cover = styled(WPImage)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  max-width: unset;
  height: 100%;

  > img {
    width: 100%;
    max-width: unset;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  width: 100%;
  padding: ${({ theme }) => theme.getMin(88)} 5%;
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(28px, 2.65625vw, 51px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: center;
  text-transform: uppercase;
`;
