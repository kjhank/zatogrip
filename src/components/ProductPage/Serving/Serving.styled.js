import styled from 'styled-components';

import { WPImage } from '@components';
import { queries } from '@utils/rwd';

export const Wrapper = styled.section`
  margin-top: ${({ theme }) => theme.getMin(60)};

  @media ${queries.xs} {
    margin-top: 2em;
    padding-bottom: 3em;
    ${({ theme }) => theme.getSectionBorder()};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ theme }) => theme.getSectionBorder()};

    @media ${queries.xs} {
      gap: 2em;
      background-image: unset;
    }

    @media ${queries.xtiny} {
      *:not(:first-child) {
        margin-top: 2em;
      }
    }
  }
`;

export const Amount = styled.p`
  margin: min(35px, 1.822917vw) 0 min(28px, 1.458333vw);
  border: 1px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: ${({ theme }) => theme.getRadius('large')};
  padding: min(23px, 1.197917vw) min(50px, 2.604167vw);
  color: ${({ theme }) => theme.getColor('accent')};
  font-size: clamp(20px, 2.083333vw, 40px);
  font-family: ${({ theme }) => theme.getFont('heading')};

  @media ${queries.xs} {
    width: 100%;
    border-radius: ${({ theme }) => theme.getRadius('medium')};
    padding: 0.5em;
    font-size: min(50px, 8vw);
    text-align: center;
    white-space: pre-wrap;
  }
`;

export const Badge = styled(WPImage)`
  width: ${({
    image, theme,
  }) => theme.getMin(image.width / 2)};

  &.tabletki-zatogrip-forte {
    width: ${({
    image, theme,
  }) => theme.getMin((image.width / 2) * 0.85)};
  }

  &.zatogrip-md-gardlo-spray {
    width: ${({ theme }) => theme.getMin(200)};

    @media ${queries.s} {
      width: 50vw;
    }
  }

  @media ${queries.xs} {
    width: ${({ image }) => `min(${image.width / 2}px, 85%)`};

    &.tabletki-zatogrip-forte {
      width: ${({ image }) => `min(${image.width / 2}px, 50%)`};
    }
  }

  @media ${queries.xtiny} {
    width: ${({ image }) => `min(${image.width / 2}px, 50%)`};

    &.tabletki-zatogrip-forte {
      width: ${({ image }) => `min(${image.width / 2}px, 30%)`};
    }
  }
`;

export const Description = styled.p`
  margin: min(47px, 2.447917vw) 0 min(67px, 3.489583vw);
  font-size: clamp(14px, 1.25vw, 24px);
  text-align: center;
  white-space: break-spaces;

  b,
  strong {
    font-weight: bold;
  }

  em,
  i {
    color: ${({ theme }) => theme.getColor('accent')};
  }

  @media ${queries.xs} {
    margin: 0;
    font-size: max(20px, 5vw);
    text-align: left;

    b,
    strong {
      font-weight: 600;
    }
  }
`;
