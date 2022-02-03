import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Section = styled.section`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ theme }) => theme.getSectionBorder()};

    > h2 {
      margin: min(47px, 2.447917vw) 0 min(35px, 1.822917vw);
    }

    @media ${queries.xs} {
      padding: 2em 0;
    }
  }
`;

export const Intro = styled.p`
  margin-bottom: min(61px, 3.177083vw);
  font-weight: bold;
  font-size: clamp(14px, 1.25vw, 24px);

  @media ${queries.xs} {
    font-weight: 600;
    font-size: min(48px, 6vw);
    text-align: center;
  }
`;

export const Footnotes = styled.footer`
  margin-bottom: min(55px, 2.864583vw);
  font-size: clamp(8px, 0.625vw, 12px);
  text-align: center;

  > ul {
    list-style-type: none;
  }

  @media ${queries.xs} {
    font-size: min(16px, 4vw);
    text-align: center;
  }
`;
