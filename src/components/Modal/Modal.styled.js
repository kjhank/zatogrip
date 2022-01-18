import styled from 'styled-components';
import { rgba } from 'polished';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 46;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 10vh;
  background-color: ${rgba('#fff', 0.5)};
  backdrop-filter: blur(5px);
`;

export const Wrapper = styled.aside`
  filter: drop-shadow(0 min(10px, 1vh) 6px ${rgba('#000', 0.33)});
  width: min(960px, 50vw);
  border-radius: ${({ theme }) => theme.getRadius()};
  padding: min(24px, 1.25vw);
  background-color: #fff;
  transform: translateY(-50vh);
`;

