import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const SectionHeading = styled.h2`
  padding-left: min(19px, 0.989583vw);
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
  font-family: ${({ theme }) => theme.getFont('heading')};


  @media ${queries.xs} {
    padding: 0;
    font-size: clamp(46px, 4.427083vw, 85px);
    line-height: 1;
    text-align: center;
  }
`;
