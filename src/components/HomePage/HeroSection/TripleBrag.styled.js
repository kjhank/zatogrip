import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Wrapper = styled.div`
  position: absolute;
  inset: auto auto 14.5% 0;
  display: flex;
  gap: 1.6vw;
  align-items: center;
  font-weight: 900;
  font-size: clamp(75.60000000000001px, 10.828125630000002vw, 226.8px);
  font-family: ${({ theme }) => theme.fonts.hero};

  sup {
    position: relative;
    top: -0.25em;
    font-size: 0.4em;
  }

  @media ${queries.s} {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 0.2em;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.2331288343558282em;
  line-height: 1;
  text-transform: uppercase;

  > li {
    :first-child {
      color: #67b652;
    }

    :nth-child(2) {
      color: #49823c;
    }

    :last-child {
      color: #30562a;
    }
  }
`;

export const Number = styled.span`
  order: 1;
  color: ${({ theme }) => theme.colors.accent};
  line-height: 0.8;
`;

export const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  color: #49823c;
  line-height: 0.8;
  text-align: center;
  text-transform: uppercase;

  /* stylelint-disable-next-line selector-type-no-unknown */
  > span:not(${Number}) {
    font-size: 0.1165644171779141em;
  }

  > span:first-child {
    order: 0;
  }

  > span:nth-child(2) {
    order: 2;
    padding-top: 0.5em;
  }
`;
