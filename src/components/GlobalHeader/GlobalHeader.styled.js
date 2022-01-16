import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  height: 115px;
  box-shadow: 0 0.5em 1em ${rgba('#333', 0.25)};
  background-color: #fff;
`;
