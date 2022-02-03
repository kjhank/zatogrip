import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Section = styled.section`
  padding: min(69px, 3.59375vw) 0 min(120px, 6.25vw);

  @media ${queries.xs} {
    padding: 2em 0;
  }

  ul {
    gap: 1.25em;
    width: 80%;
    margin: min(109px, 5.677083vw) auto 0;
    color: ${({ theme }) => theme.getColor('main')};
    font-size: clamp(14px, 1.25vw, 24px);

    @media ${queries.tiny} {
      width: 100%;
    }
  }
`;
