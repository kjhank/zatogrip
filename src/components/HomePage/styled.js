import styled from 'styled-components';

export const SectionHeading = styled.h2`
  padding-left: min(19px, 0.989583vw);
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
`;
