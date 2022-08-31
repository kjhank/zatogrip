import styled from 'styled-components';
import { rgba } from 'polished';

import { queries } from '@utils/rwd';

import { WPImage } from '@components';
import { commonStyle as arrowStyle } from '@components/ArrowLink/ArrowLink.styled';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.getMin(200)};
  padding-top: ${({ theme }) => theme.getMin(150)};
`;

export const Background = styled(WPImage)`
  position: absolute;
  top: 30%;
  z-index: 0;
  pointer-events: none;

  @media ${queries.s} {
    display: none
  }
`;

export const BackgroundPortrait = styled(WPImage)`
  display: none;

  @media ${queries.s} {
    position: absolute;
    top: 0;
    z-index: 0;
    display: block;
    width: 100%;
    pointer-events: none;

    > img {
      width: 100%;
    }
  }
`;

export const AdditionalFilesSection = styled.section`
  position: relative;
  z-index: 1;

  @media ${queries.s} {
    margin-block: min(100px, 25vw) min(200px, 50vw);
  }
`;

export const Heading = styled.h2`
  margin-top: ${({ theme }) => theme.getMin(23)};
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: 600;
  font-size: clamp(14px, 16px + 0.4vw, 24px);
  white-space: pre-wrap;

  @media ${queries.xs} {
    width: 100%;
    margin: 1em 0 2em;
    font-weight: normal;
    font-size: max(5vw, 18px);
  }
`;

export const FileList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 76px;
  margin-top: 2em;
`;

export const SingleFile = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  :only-child {
    width: calc(33% - 76px);

    @media ${queries.s} {
      width: 100%;
    }
  }
`;

export const ImageLink = styled.a`
  box-shadow: ${rgba('#000', 0.25)} 0 0 22px;
  border-radius: ${({ theme }) => theme.getRadius('small')};
  padding: min(3.75vw, 4.5rem) min(2.34375vw, 2.8125rem);
  background-color: #fff;

  @media ${queries.s} {
    margin-bottom: 5%;
    padding: 15%;
  }
`;

export const Image = styled(WPImage)``;

export const Arrow = styled.a`
  ${arrowStyle}
  margin-top: auto;
  font-size: clamp(10px, 0.729167vw, 16px);
  font-family: sans-serif;

  @media ${queries.xs} {
    margin: auto auto 0;
    padding: ${({ theme }) => `${theme.getMax(12)} ${theme.getMax(24)}`};
    font-size: clamp(14px, 1.25vw, 24px);
  }
`;
