import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'gatsby';

import { queries } from '@utils/rwd';
import {
  ArrowLink, WPImage,
} from '@components';

export const Section = styled.section`
  position: relative;
  z-index: 2;
  margin: min(85px, 4.427083vw);
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;

  > h2 {
    width: 100%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: min(38px, 1.979167vw);

  @media ${queries.l} {
    margin: auto;
  }

  @media ${queries.s} {
    width: 100%;
  }
`;

export const Intro = styled.p`
  width: 60%;
  margin-top: ${({ theme }) => theme.getMin(23)};
  font-weight: bold;
  font-size: clamp(14px, 1.25vw, 24px);

  @media ${queries.xs} {
    width: 100%;
    margin: 1em 0 2em;
    font-weight: normal;
    font-size: max(5vw, 18px);
  }
`;

export const PostsWrapper = styled.div`
  padding-top: ${({ theme }) => theme.getMin(47)};

  li.swiper-slide {
    height: auto;
  }

  @media ${queries.s} {
    margin-top: 3em;
  }
`;

export const SinglePost = styled.article`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  scroll-snap-align: start;

  @media ${queries.xs} {
    flex-shrink: 0;
  }
`;

export const PostCover = styled(WPImage)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.getRadius('small')};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostTitle = styled.h3`
  margin: min(39px, 2.03125vw) 0 min(24px, 1.25vw);
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: bold;
  font-size: clamp(12px, 1.145833vw, 22px);
  font-family: ${({ theme }) => theme.getFont('alt')};
  text-transform: uppercase;

  @media ${queries.xs} {
    font-size: clamp(24px, 2.5vw, 48px);
  }
`;

export const Excerpt = styled.p`
  margin-bottom: min(1.666667vw, 32px);
  color: ${({ theme }) => theme.getColor('main')};
  font-size: clamp(10px, 1.145833vw, 20px);

  @media ${queries.xs} {
    font-size: clamp(20px, 2.083333vw, 40px);
  }
`;

export const PostLink = styled(ArrowLink)`
  margin-top: auto;
  font-size: clamp(10px, 0.729167vw, 16px);

  @media ${queries.xs} {
    margin: auto auto 0;
    padding: ${({ theme }) => `${theme.getMax(12)} ${theme.getMax(24)}`};
    font-size: clamp(14px, 1.25vw, 24px);
  }
`;

export const AllPostsLink = styled(Link)`
  filter: none;
  border: 2px solid ${({ theme }) => theme.getColor('alt')};
  border-radius: ${({ theme }) => theme.getRadius('small')};
  padding: min(16px, 0.833333vw) min(36px, 1.875vw);
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(9px, 0.78125vw, 15px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  transition: ${({ theme }) => theme.getTransitions([
    'filter',
    'transform',
  ])};

  :hover {
    filter: drop-shadow(0 4px 4px ${rgba('#000', 0.25)});
    transform: scale(1.05);
  }

  @media ${queries.l} {
    order: 1;
  }

  @media ${queries.s} {
    margin: auto;
    padding: 0.5em 2em;
    font-size: min(16px, 4vw);
    text-align: center;
  }
`;

export const ScrollButton = styled.button.attrs({ type: 'button' })`
  padding: 0;
  background-color: transparent;
  color: ${({
    theme, disabled,
  }) => (disabled ? theme.getColor('copy') : theme.getColor('alt'))};
  transform: ${({ isFlipped }) => isFlipped && 'rotateY(180deg)'};
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  > svg {
    transition: ${({ theme }) => theme.getTransitions([
    'color',
    'transform',
    'filter',
  ])};
    transform: ${({ disabled }) => disabled && 'scale(0.9)'};
  }

  :hover {
    > svg {
      filter: ${({ disabled }) => !disabled && 'brightness(1.25)'};
      transform: ${({ disabled }) => !disabled && 'translateX(10%)'};
    }
  }

  @media ${queries.l} {
    order: ${({ isFlipped }) => (isFlipped ? 0 : 2)}
  }

  @media ${queries.xs} {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  display: none;

  @media ${queries.xs} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 2em auto;
    color: ${({ theme }) => theme.getColor('alt')};

    > svg {
      fill: currentColor;
    }

    > button {
      display: block;

      path {
      stroke-width: 3px;}
    }
  }
`;
