import styled, { css } from 'styled-components';

import { ArrowLink } from '@components';
import { queries } from '@utils/rwd';

export const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.getMin(9)};
  width: ${({ theme }) => theme.getMin(615)};
  margin-top: ${({ theme }) => theme.getMin(70)};

  @media ${queries.xs} {
    width: 100%;
    gap: 1em;
  }
`;

export const SubmitButton = styled(ArrowLink)`
  margin: ${({ theme }) => theme.getMin(28)} auto 0;
  padding: ${({ theme }) => theme.getMin(12)} ${({ theme }) => theme.getMin(50)};

  ::before {
    background-image: ${({ isRed }) => isRed && 'radial-gradient(circle at 50%, #800000 30%, #570000)'};
  }

  :disabled {
    filter: brightness(1.1);
    cursor: not-allowed;

    :hover {
      background-size: 100%;
      ::before {
        filter: unset;
      }

      > svg {
        transform: unset;
      }
    }
  }

  @media ${queries.xs} {
    min-width: 40%;
    padding: 0.5em 1em;
  }
`;

export const Label = styled.label`
  position: relative;
  overflow: hidden;
  display: block;
  flex-grow: 1;
  flex-shrink: 0;
  width: ${({ variant }) => variant === 'large' && '100%'};
  font-size: clamp(10px, 0.729167vw, 14px);

  @media ${queries.xs} {
    width: 100%;
    font-size: max(20px, 5vw);
  }
`;

export const LabelText = styled.span`
  position: absolute;
  top: 1.5em;
  left: 1.5em;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  color: ${({ theme }) => theme.getColor('copy')};
  font-family: ${({ theme }) => theme.getFont('alt')};
  transition: ${({ theme }) => theme.getTransitions([
    'transform',
    'opacity',
  ], 'slowDuration')};
  transform: translateX(${({ isHidden }) => (isHidden ? '-25vw' : '0')});
  pointer-events: none;

  @media ${queries.xs} {
    top: max(10px, 2.5vw);
    left: max(10px, 2.5vw);
  }
`;

const commonInputStyle = css`
  overflow: hidden;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: ${({ theme }) => theme.getRadius('tiny')};
  padding: ${({ theme }) => `${theme.getMin(20)} ${theme.getMin(24)}`};
  font-family: ${({ theme }) => theme.getFont('alt')};
  transition: ${({ theme }) => theme.getTransitions([
    'outline-color',
    'border-color',
  ])};

  :focus {
    outline-color: ${({ theme }) => theme.getColor('link')};
  }

  @media ${queries.xs} {
    padding: max(6px, 1.5vw);
  }
`;

export const Input = styled.input`
  ${commonInputStyle};
`;

export const TextArea = styled.textarea`
  ${commonInputStyle}
  height: ${({ theme }) => theme.getMin(190)};
  resize: none;

  @media ${queries.xs} {
    height: 8em;
  }
`;
