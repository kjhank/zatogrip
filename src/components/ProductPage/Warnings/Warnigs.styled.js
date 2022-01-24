import styled from 'styled-components';

export const Section = styled.section`
  padding: min(69px, 3.59375vw) 0 min(120px, 6.25vw);

  ul {
    gap: 1.25em;
    width: 80%;
    margin: min(109px, 5.677083vw) auto 0;
    color: ${({ theme }) => theme.getColor('main')};
    font-size: clamp(15px, 1.302083vw, 25px);
  }
`;
