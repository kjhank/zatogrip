import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.getMin(9)};
  width: ${({ theme }) => theme.getMin(615)};
  margin-top: ${({ theme }) => theme.getMin(70)};

  > button {
    margin: ${({ theme }) => theme.getMin(28)} auto 0;
    padding: ${({ theme }) => theme.getMin(12)} ${({ theme }) => theme.getMin(50)};
  }
`;

export const Label = styled.label`
  position: relative;
  overflow: hidden;
  display: block;
  flex-grow: 1;
  flex-shrink: 0;
  width: ${({ variant }) => variant === 'large' && '100%'};
`;

export const LabelText = styled.span`
  position: absolute;
  top: 1.5em;
  left: 1.5em;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  color: ${({ theme }) => theme.getColor('copy')};
  font-size: clamp(10px, 0.729167vw, 14px);
  font-family: ${({ theme }) => theme.getFont('alt')};
  transition: ${({ theme }) => theme.getTransitions([
    'transform',
    'opacity',
  ], 'slowDuration')};
  transform: translateX(${({ isHidden }) => (isHidden ? '-25vw' : '0')});
  pointer-events: none;
`;

const commonInputStyle = css`
  overflow: hidden;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: ${({ theme }) => theme.getRadius('tiny')};
  padding: ${({ theme }) => `${theme.getMin(20)} ${theme.getMin(24)}`};
  font-size: clamp(10px, 0.729167vw, 14px);
  font-family: ${({ theme }) => theme.getFont('alt')};
  transition: ${({ theme }) => theme.getTransitions(['outline-color'])};

  :focus {
    outline-color: ${({ theme }) => theme.getColor('link')};
  }
`;

export const Input = styled.input`
  ${commonInputStyle};
`;

export const TextArea = styled.textarea`
  ${commonInputStyle}
  height: ${({ theme }) => theme.getMin(190)};
  resize: none;
`;
