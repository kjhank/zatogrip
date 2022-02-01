import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: min(1.25em, 1.3vw);
  color: ${({ theme }) => theme.colors.gradient.from};
  font-size: clamp(16px, 1.354167vw, 26px);
  font-family: ${({ theme }) => theme.getFont('alt')};

  @media ${queries.xs} {
    gap: 1em;
    font-size: clamp(26px, 2.708333vw, 52px);
  }
`;

export const Item = styled.li`
  display: inline-flex;
  align-items: baseline;
  gap: min(1em, 1.5625vw);
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

  @media ${queries.xs} {
    width: 1em;
    height: 1em;

    > svg {
      width: 0.5em;
    }
  }
`;
