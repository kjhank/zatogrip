import styled from 'styled-components';

import { queries } from '@utils/rwd';

import {
  ArrowLink, WPImage,
} from '@components';

export const RelatedContent = styled.aside`
  position: relative;
  z-index: 1;
  padding-bottom: ${({ theme }) => theme.getMin(100)};
  background-color: #fff;

  @media ${queries.xs} {
    padding-bottom: max(200px, 50vw);
  }
`;

export const Heading = styled.h1`
  width: 100%;
  padding: ${({ theme }) => theme.getMin(75)} 0 ${({ theme }) => theme.getMin(97)};
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(28px, 2.65625vw, 51px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: center;
`;

export const PostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.getMin(81)};
  max-width: 100%;
  padding-bottom: ${({ theme }) => theme.getMin(100)};

  @media ${queries.xs} {
    grid-template-columns: 1fr;
  }
`;

export const SinglePost = styled.li`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
`;

export const PostTitle = styled.h3`
  margin: ${({ theme }) => theme.getMin(39)} 0 ${({ theme }) => theme.getMin(24)};
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: bold;
  font-size: clamp(12px, 1.145833vw, 22px);
  font-family: ${({ theme }) => theme.getFont('alt')};
  text-transform: uppercase;

  @media ${queries.xs} {
    font-size: max(5vw, 20px);
  }
`;

export const Excerpt = styled.p`
  margin-bottom: ${({ theme }) => theme.getMin(32)};
  color: ${({ theme }) => theme.getColor('main')};
  font-size: clamp(10px, 1.145833vw, 20px);

  @media ${queries.xs} {
    font-size: max(4vw, 16px);
  }
`;

export const PostLink = styled(ArrowLink)`
  margin-top: auto;
  font-size: clamp(10px, 0.729167vw, 16px);

  @media ${queries.xs} {
    padding: ${({ theme }) => `${theme.getMax(12)} ${theme.getMax(24)}`};
    font-size: min(3vw, 16px);
  }
`;

export const PostCover = styled(WPImage)`
  overflow: hidden;
  aspect-ratio: 447/370;
  width: 100%;
  border-radius: ${({ theme }) => theme.getRadius('small')};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
