import styled from 'styled-components';

import { mediaQueries } from '@utils';

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;

  @media ${mediaQueries.mediumLarge} {
    max-width: 80vw;
  }

  @media ${mediaQueries.medium} {
    max-width: 87vw;
  }

  @media ${mediaQueries.xsmall} {
    max-width: 90vw;
  }
`;

export default Container;
