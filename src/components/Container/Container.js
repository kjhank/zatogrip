import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Container = styled.div`
  position: relative;
  width: min(80.729167vw, 1550px);
  height: 100%;
  margin: 0 auto;

  @media ${queries.xl} {
    width: min(85vw, 100%);
  }

  @media ${queries.xs} {
    width: 90vw;
  }
`;
