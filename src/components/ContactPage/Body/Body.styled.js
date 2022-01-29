import styled from 'styled-components';

import { WPImage } from '@components';
import { queries } from '@utils/rwd';

export const StyledBody = styled.article`
  min-height: 100vh;
  margin-bottom: ${({ theme }) => theme.getMin(150)};
  padding-top: ${({ theme }) => theme.getMin(200)};

  @media ${queries.s} {
    padding-top: ${({ theme }) => theme.getMin(400)};
  }

  @media ${queries.xs} {
    margin-bottom: max(200px, 50vw);
    padding-top: unset;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.alt};
  font-size: clamp(36px, 3.90625vw, 75px);
  font-family: ${({ theme }) => theme.getFont('heading')};

  @media ${queries.xs} {
    padding-top: 60vh;
  }
`;

export const ContactData = styled.address`
  margin-top: ${({ theme }) => theme.getMin(100)};
  color: ${({ theme }) => theme.colors.alt};
  font-weight: bold;
  font-size: clamp(12px, 0.833333vw, 16px);
  font-family: ${({ theme }) => theme.getFont('alt')};
  line-height: 1.75;

  a {
    ${({ theme }) => theme.getLinkStyles(theme.getColor('alt'))};
  }
`;

export const Image = styled(WPImage)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  max-width: unset;
  height: 100%;
  max-height: unset;

  @media ${queries.xs} {
    display: none;
  }

  > img {
    width: 100%;
    max-width: unset;
    height: 100%;
    max-height: unset;
    object-fit: cover;
  }
`;

export const ImagePortrait = styled(WPImage)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  display: none;
  width: 100%;
  max-width: unset;
  height: 100%;
  max-height: unset;

  @media ${queries.xs} {
    display: block
  }

  > img {
    width: 100%;
    max-width: unset;
    height: 100%;
    max-height: unset;
    object-fit: cover;
  }
`;
