import styled from 'styled-components';
import { WPImage } from '@components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(25px, 1.302083vw);
  margin: min(94px, 4.895833vw) 0 min(57px, 2.96875vw);
`;

export const Row = styled.li``;

export const InnerGrid = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
  height: 100%;
`;

export const Item = styled.li`
  width: min(170px, 8.854167vw);
  height: 100%;
`;

export const Image = styled(WPImage)`
  aspect-ratio: 1/1;
  width: 100%;

  > img {
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Caption = styled.figcaption`
  margin-top: auto;
  font-weight: bold;
  font-size: clamp(10px, 1.041667vw, 20px);
  text-align: center;
`;
