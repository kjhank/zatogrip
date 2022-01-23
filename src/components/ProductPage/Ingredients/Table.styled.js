import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 90%;
  border-spacing: min(20px, 1.041667vw) min(10px, 0.520833vw);
  border-collapse: separate;
`;

export const Head = styled.thead`
  color: ${({ theme }) => theme.getColor('accent')};
  font-size: clamp(14px, 1.25vw, 24px);
  font-family: ${({ theme }) => theme.getFont('heading')};
`;

export const Body = styled.tbody``;

export const Row = styled.tr``;

export const HeadCell = styled.th`
  border: 1px solid ${({ theme }) => theme.getColor('main')};
  border-radius: ${({ theme }) => theme.getRadius('medium')};
  padding: min(16px, 0.833333vw) 0;
  text-transform: ${({ isUppercase }) => isUppercase && 'uppercase'};
`;

export const Cell = styled.td`
  border-radius: ${({ theme }) => theme.getRadius('medium')};
  padding: min(16px, 0.833333vw) min(28px, 1.458333vw);
  background-color: ${({ theme }) => theme.getColor('dim')};
  font-weight: ${({ isLighter }) => (isLighter ? 'normal' : 'bold')};

  :first-of-type {
    width: 55%;
  }

  :not(:first-of-type) {
    text-align: center;
  }
`;
