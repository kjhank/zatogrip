import styled, { css } from 'styled-components';

import { queries } from '@utils/rwd';

export const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
`;

const contentHeading = css`
  margin-bottom: 1em;
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(18px, 1.770833vw, 34px);
  font-family: ${({ theme }) => theme.getFont('heading')};

  @media ${queries.s} {
    font-size: max(5vw, 32px);
    text-align: center;
  }

  @media ${queries.tiny} {
    font-size: 24px;
  }
`;

export const Content = styled.article`
  ${({ theme }) => theme.getSectionBorder()};
  padding: 5% 6.8%;
  font-size: clamp(12px, 1.25vw, 24px);
  line-height: 1.375;

  h2, h3, h4, h5, h6 {
    ${contentHeading};
  }

  h3 {
    font-size: clamp(16px, 1.5vw, 32px);

    @media ${queries.s} {
      font-size: max(4vw, 28px);
      text-align: center;
    }

    @media ${queries.tiny} {
      font-size: 20px;
    }
  }

  h4 {
    font-size: clamp(14px, 1.3vw, 28px);

    @media ${queries.s} {
      font-size: max(3.5vw, 24px);
      text-align: center;
    }

    @media ${queries.tiny} {
      font-size: 16px;
    }
  }

  h5 {
    font-size: clamp(12px, 1.2vw, 26px);

    @media ${queries.s} {
      font-size: max(3vw, 20px);
      text-align: center;
    }

    @media ${queries.tiny} {
      font-size: 14px;
    }
  }

  p + h2,
  p + p {
    margin-top: 1em;
  }

  ol,
  ul {
    margin: 1em 0;
    padding-left: 2em;
    list-style-position: inside;
  }

  @media ${queries.s} {
    font-size: max(3vw, 20px);
  }

  @media ${queries.xs} {
    padding: 5% 0;
    font-size: max(4vw, 16px);

    ol,
    ul {
      padding-left: 1em;
    }
  }

  @media ${queries.xtiny} {
    font-size: 18px;
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.getColor('alt')};
    text-decoration-thickness: 0.1em;
  }

  img {
    max-inline-size: 100%;
    block-size: auto;
  }

  td {
    border: 1px solid ${({ theme }) => theme.getColor('alt')};
    padding: 0.2em;
  }

  b, strong {
    font-weight: 600;
  }

  em, i {
    font-style: italic;
  }
`;

export const FootnotesWrapper = styled.footer`
  padding: 5% 6.8%;

  ol {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
    list-style-position: inside;
    font-size: clamp(10px, 1.145833vw, 22px);

    @media ${queries.xs} {
      font-size: max(3vw, 12px);
    }

    > li {
      padding: 0.2em 0;
      &.variant--link {
        overflow: hidden;
        max-width: 50%;
        text-overflow: ellipsis;
        white-space: pre;
      }
    }

    a {
      ${({ theme }) => theme.getLinkStyles(theme.getColor('main'))};
    }
  }
`;

export const FootnoteHeading = styled.h3`
  margin-bottom: 1em;
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(14px, 1.458333vw, 28px);
  font-family: ${({ theme }) => theme.getFont('heading')};

  @media ${queries.xs} {
    font-size: max(4vw, 16px);
  }
`;
