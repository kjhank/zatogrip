import styled from 'styled-components';

import { WPImage } from '@components';

export const Wrapper = styled.section`
  margin-top: min(80px, 4.166667vw);
  margin-bottom: 25vh;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px dashed ${({ theme }) => theme.getColor('alt')};
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
`;

export const Badge = styled(WPImage)`
  width: min(262px, 13.645833vw);
`;

export const Description = styled.p`
  margin: min(47px, 2.447917vw) 0 min(67px, 3.489583vw);
  padding: 0 20.5%;
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
`;
