import styled from 'styled-components';
import { WPImage } from '@components';
import { queries } from '@utils/rwd';

export const Grid = styled.ul`
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  gap: ${({ theme }) => theme.getMin(97)};

  @media ${queries.s} {
    grid-template: auto / 1fr;
    margin-block: min(200px, 50vw) min(300px, 75vw);
  }
`;

export const File = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.getMin(27)};

  @media ${queries.s} {
    gap: 1.5em;
  }

  > a {
    gap: 4em;
    padding-block: ${({ theme }) => theme.getMin(17)};
    font-size: clamp(9px, 0.78125vw, 15px);

    @media ${queries.s} {
      padding-block: 1em;
    }
  }
`;

export const Thumbnail = styled(WPImage)`
  aspect-ratio: 1.2081081081081082;
  overflow: hidden;
  filter: ${({ theme }) => `drop-shadow(0 ${theme.getMax(3)} ${theme.getMax(18)} rgb(0 0 0 / 0.16))`};
  margin-block-end: ${({ theme }) => theme.getMin(10)};
  border-radius: ${({ theme }) => theme.borderRadii.small};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const FileName = styled.p`
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: bold;
  font-size: clamp(12px, 1.145833vw, 22px);
  font-family: ${({ theme }) => theme.getFont('alt')};
  text-align: center;

  @media ${queries.s} {
    font-size: 1.25em;
  }
`;
