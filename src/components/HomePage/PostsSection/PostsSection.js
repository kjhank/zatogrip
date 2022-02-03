import React, {
  createRef,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { SectionHeading } from '@components/HomePage/styled';
import {
  Hand, LongArrow,
} from '@icons';
import { isMobile } from '@utils/helpers';

import {
  AllPostsLink,
  Header,
  Intro,
  MobileNav,
  Navigation,
  ScrollButton,
  Section,
} from './PostsSection.styled';
import { PostsTrack } from './PostsTrack';

export const PostsSection = ({
  content, innerRef,
}) => {
  const swiperRef = useRef();
  const postsRef = createRef(null);
  const [
    scrollPosition,
    setScrollPosition,
  ] = useState('start');

  const handleClick = direction => {
    const { current: swiperInstance } = swiperRef;

    if (direction === 'right') {
      swiperInstance.slideNext();
    } else {
      swiperInstance.slidePrev();
    }

    if (swiperInstance.isBeginning) {
      setScrollPosition('start');
    } else if (swiperInstance.isEnd) {
      setScrollPosition('end');
    } else {
      setScrollPosition(null);
    }
  };

  return (
    <Section ref={innerRef}>
      <Container>
        <Header>
          <SectionHeading>{content.heading}</SectionHeading>
          <Intro>{content.intro}</Intro>
          <Navigation>
            <AllPostsLink to={`/${content.allPostsLink.post_name}/`}>
              {isMobile ? content?.allPostsTextPortrait : content?.allPostsText}
            </AllPostsLink>
            <ScrollButton
              disabled={scrollPosition === 'start'}
              isFlipped
              onClick={() => handleClick('left')}
            >
              <LongArrow />
            </ScrollButton>
            <ScrollButton
              disabled={scrollPosition === 'end'}
              onClick={() => handleClick('right')}
            >
              <LongArrow />
            </ScrollButton>
          </Navigation>
        </Header>
        <PostsTrack
          clickText={content.postLinkText}
          innerRef={postsRef}
          posts={content.posts}
          swiperRef={swiperRef}
        />
        <MobileNav>
          <ScrollButton
            disabled={scrollPosition === 'start'}
            isFlipped
            onClick={() => handleClick('left')}
          >
            <LongArrow />
          </ScrollButton>
          <Hand />
          <ScrollButton
            disabled={scrollPosition === 'end'}
            onClick={() => handleClick('right')}
          >
            <LongArrow />
          </ScrollButton>
        </MobileNav>
      </Container>
    </Section>
  );
};

PostsSection.propTypes = {
  content: PropTypes.shape({
    allPostsLink: PropTypes.shape({
      post_name: PropTypes.string,
    }),
    allPostsText: PropTypes.string,
    allPostsTextPortrait: PropTypes.string,
    heading: PropTypes.string,
    intro: PropTypes.string,
    postLinkText: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
};

