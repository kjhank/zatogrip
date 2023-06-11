import styled from 'styled-components';
import { queries } from '@utils/rwd';

import { StaticWrapper } from '@components/styled';

export const Agreement = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.getMin(26)};
  width: fit-content;
  margin-inline: auto;
  padding-block: ${({ theme }) => theme.getMin(20)};
  padding-inline: ${({ theme }) => theme.getMin(50)} ${({ theme }) => theme.getMin(20)};
  background-color: ${({ theme }) => theme.colors.gradient.from};
  font-family: ${({ theme }) => theme.getFont('alt')};

  @media ${queries.s} {
    gap: 1em;
    margin-block: min(200px, 50vw) min(300px, 75vw);
    padding-block: 2em;
    padding-inline: 1em;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-size: clamp(10px, 1.09375vw, 21px);
  line-height: 1.0555555555555556;

  @media ${queries.s} {
    font-size: 1.25em;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  flex-shrink: 0;
  aspect-ratio: 1;
  width: ${({ theme }) => theme.getMin(27)};
  border-radius: ${({ theme }) => theme.getMin(4)};
  background-color: #fff;

  @media ${queries.s} {
    width: 2em;
    border-radius: 0.25em;
  }
`;

export const Wrapper = styled(StaticWrapper)`
  > picture {
    inset-block-start: 0;
  }
`;
