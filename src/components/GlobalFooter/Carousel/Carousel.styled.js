import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Section = styled.section`
  height: 40.341792vw;
  margin-bottom: ${({ theme }) => theme.getMin(150)};
  background-image: ${({ theme }) => theme.getGradient('radial', 65)};
  color: #fff;
  font-family: ${({ theme }) => theme.getFont('heading')};

  @media ${queries.s} {
    margin-bottom: max(100px, 15vw);
  }

  @media ${queries.xs} {
    height: 125vw;
    margin-bottom: min(200px, 50vw);
  }
`;

export const StaticHeading = styled.h2`
  position: absolute;
  top: ${({ theme }) => theme.getMin(100)};
  left: 50%;
  z-index: 3;
  border: ${({ theme }) => theme.getMin(3)} solid #fff;
  border-radius: ${({ theme }) => theme.getRadius('large')};
  padding: ${({ theme }) => `${theme.getMin(23)} ${theme.getMin(65)}`};
  font-size: clamp(28px, 2.916667vw, 56px);
  text-align: center;
  transform: translateX(-50%);

  @media ${queries.s} {
    font-size: max(2vw, 16px);
  }

  @media ${queries.xs} {
    width: 100%;
    padding: 0.5em;
    font-size: clamp(35px, 3.125vw, 60px);
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${({ isFlipped }) => isFlipped && '100%'};
  left: ${({ isFlipped }) => !isFlipped && '100%'};
  z-index: 4;
  filter: none;
  aspect-ratio: 1/1;
  width: ${({ theme }) => theme.getMin(80)};
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('alt')};
  transition: ${({ theme }) => theme.getTransitions([
    'color',
    'background-color',
    'filter',
  ])};
  transform: ${({ isFlipped }) => (isFlipped ? 'translateY(-50%) rotateY(180deg)' : 'translateY(-50%)')};
  cursor: pointer;


  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2em;
    height: auto;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
    transform: translate(-50%, -50%);
  }

  :hover {
    filter: drop-shadow(0 0 0.25em #fff);
    background-color: ${({ theme }) => theme.getColor('alt')};
    color: #fff;
  }

  @media ${queries.xs} {
    top: unset;
    right: ${({ isFlipped }) => isFlipped && '55%'};
    bottom: 1em;
    left: ${({ isFlipped }) => !isFlipped && '55%'};
    width: max(50px, 10vw);

    > svg {
      width: 50%;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const Item = styled.li`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ isVisible }) => (isVisible ? 2 : 1)};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.getTransitions([
    'opacity',
    'transform',
  ])};
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0)')};

  > svg {
    position: absolute;
    z-index: 0;
    max-height: 90%;
    pointer-events: none;

    &.blackLilac {
      top: 50%;
      left: 8%;
      opacity: 0.084;
      transform: translateY(-50%);
    }

    &.geranium {
      top: 15%;
      right: 0;
      opacity: 0.08;
    }

    &.geraniumLeft {
      top: 15%;
      left: 0;
      opacity: 0.08;
    }

    &.icelandLichen {
      right: 2%;
      bottom: 0;
      opacity: 0.075;
    }

    &.advertisea {
      top: 50%;
      left: 0;
      opacity: 0.079;
      height: 100%;
      max-height: unset;
      transform: translateY(-50%);
    }

    &.vitaminD {
      top: 50%;
      right: 2%;
      opacity: 0.081;
      transform: translateY(-50%);
    }

    &.vitaminDLeft {
      top: 50%;
      left: 2%;
      opacity: 0.081;
      transform: translateY(-50%);
    }

    &.acerola {
      right: 2%;
      bottom: 5%;
      opacity: 0.084;
    }

    &.zinc {
      top: 50%;
      left: 2%;
      opacity: 0.079;
      transform: translateY(-50%);
    }

    &.ginger {
      top: 50%;
      right: 2%;
      opacity: 0.08;
      transform: translateY(-50%);
    }
  }
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  font-size: clamp(28px, 2.916667vw, 56px);
  white-space: break-spaces;
  transform: translate(-50%, -50%);


  @media ${queries.s} {
    font-size: ${({ fontSize }) => `${fontSize * 0.3}px`};
  }

  @media ${queries.xs} {
    font-size: ${({ fontSize }) => `${fontSize * 0.4}px`};
  }
`;
