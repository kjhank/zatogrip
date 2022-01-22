import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5em;
  color: ${({ theme }) => theme.colors.gradient.from};
  font-size: clamp(16px, 1.354167vw, 26px);
  font-family: ${({ theme }) => theme.getFont('heading')};
`;

export const Item = styled.li`
  display: inline-flex;
  align-items: baseline;
  gap: min(30px, 1.5625vw);
`;

export const Bullet = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.getColor('accent')};
  transform: translateY(0.1em);

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.33em;
    height: auto;
    color: #fff;
    transform: translate3d(-50%, -50%, 0);
  }
`;
