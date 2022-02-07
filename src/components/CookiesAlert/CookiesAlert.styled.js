import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Wrapper = styled.aside`
  position: fixed;
  bottom: -2px;
  left: 50%;
  z-index: 666;
  filter: drop-shadow(0 1em 1em rgb(0 0 0 / 0.5));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 80vw;
  border: 2px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: 1em 1em 0 0;
  padding: 1em;
  background-color: #fff;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};
  transform: ${({ isVisible }) => `translate(-50%, ${isVisible ? 0 : '100%'})`};

  @media ${queries.xs} {
    width: 95vw;
  }
`;

export const Text = styled.article``;
