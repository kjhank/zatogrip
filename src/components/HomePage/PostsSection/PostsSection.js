import React, {
  createRef, useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { SectionHeading } from '@components/HomePage/styled';
import { LongArrow } from '@icons';
import {
  AllPostsLink,
  Header,
  Intro,
  Navigation,
  ScrollButton,
  Section,
} from './PostsSection.styled';
import { PostsTrack } from './PostsTrack';

export const PostsSection = ({
  content, innerRef,
}) => {
  const [
    scrollPosition,
    setScrollPosition,
  ] = useState('start');

  const postsRef = createRef(null);

  const handleClick = direction => {
    const { current: listElement } = postsRef;
    const { width: childWidth } = listElement.firstElementChild.getBoundingClientRect();
    const xScroll = childWidth * 2;
    const scrollConfig = {
      behavior: 'smooth',
      left: direction === 'right' ? xScroll * 2 : -xScroll * 2,
    };

    setScrollPosition('');

    listElement.scrollBy(scrollConfig);
  };

  useEffect(() => {
    const { current: listElement } = postsRef;

    const handleScroll = event => {
      const {
        target: {
          clientWidth, scrollLeft, scrollWidth,
        },
      } = event;

      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft <= 0) {
        setScrollPosition('start');
      } else if (scrollLeft >= maxScroll - 1) {
        setScrollPosition('end');
      } else {
        setScrollPosition('');
      }
    };

    listElement.addEventListener('scroll', handleScroll);

    return () => listElement.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section ref={innerRef}>
      <Container>
        <Header>
          <SectionHeading>{content.heading}</SectionHeading>
          <Intro>{content.intro}</Intro>
          <Navigation>
            <AllPostsLink to={`/${content.allPostsLink.post_name}/`}>{content.allPostsText}</AllPostsLink>
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
        />
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
    heading: PropTypes.string,
    intro: PropTypes.string,
    postLinkText: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
};

