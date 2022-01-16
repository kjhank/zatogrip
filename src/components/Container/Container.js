import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Container = styled.div`
  position: relative;
  width: min(80.729167vw, 1550px);
  height: 100%;
  margin: 0 auto;

  @media ${queries.xl} {
    width: 70vw; // TODO: adjust for min()
  }

  @media ${queries.l} {
    width: 85vw; // TODO: adjust for min()
  }

  @media ${queries.s} {
    width: 95vw; // TODO: adjust for min()
  }
`;
