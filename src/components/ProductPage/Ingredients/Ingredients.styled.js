import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Section = styled.section`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ theme }) => theme.getSectionBorder()};

    > h2 {
      margin: min(47px, 2.447917vw) 0 min(35px, 1.822917vw);
    }

    @media ${queries.xs} {
      padding: 2em 0;
    }
  }

  &.zatogrip-md-gardlo-spray {

    > div > div {
      font-weight: normal;
    }
  }
`;

export const Intro = styled.div`
  margin-bottom: min(61px, 3.177083vw);
  font-weight: bold;
  font-size: clamp(14px, 1.25vw, 24px);

  @media ${queries.xs} {
    font-weight: 600;
    font-size: min(48px, 6vw);
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: min(1.25em, 1.3vw);
    font-size: clamp(16px, 1.354167vw, 26px);
    font-family: ${({ theme }) => theme.getFont()};

    @media ${queries.xs} {
      gap: 1em;
      font-size: clamp(26px, 2.708333vw, 52px);
    }

    > li {
      display: inline-flex;
      align-items: baseline;
      gap: min(1em, 1.5625vw);
      text-align: start;

      > span {
        white-space: pre-line;
      }

      @media ${queries.xtiny} {
        font-size: 16px;

        & + & {
          margin-top: 1em;
        }
      }
    }
  }

  .arrow-wrapper {
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

    @media ${queries.xtiny} {
      margin-right: 1em;
    }
  }
`;

export const Footnotes = styled.footer`
  margin-bottom: min(55px, 2.864583vw);
  font-size: clamp(8px, 0.625vw, 12px);
  text-align: center;

  > ul {
    list-style-type: none;
  }

  @media ${queries.xs} {
    font-size: min(16px, 3vw);
    text-align: center;
  }
`;
