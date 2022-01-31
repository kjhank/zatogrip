import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import {
  Swiper, SwiperSlide,
} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  Excerpt,
  PostCover,
  PostLink,
  PostsWrapper,
  PostTitle,
  SinglePost,
} from './PostsSection.styled';

const sanitizeConfig = {
  allowedTags: [],
};

export const PostsTrack = ({
  clickText,
  innerRef,
  posts,
  swiperRef,
}) => (
  <PostsWrapper ref={innerRef}>
    <Swiper
      breakpoints={{
        700: {
          slidesPerGroup: 1,
          slidesPerView: 2,
          spaceBetween: 52,
        },
        800: {
          slidesPerGroup: 2,
          slidesPerView: 3,
          spaceBetween: 104,
        },
      }}
      onSwiper={instance => {
        const ref = swiperRef;

        ref.current = instance;
      }}
      slidesPerGroup={1}
      slidesPerView={1}
      wrapperTag="ul"
    >
      {posts.map(({
        acf, slug, title: { rendered: title },
      }) => (
        <SwiperSlide
          key={slug}
          tag="li"
        >
          <SinglePost>
            {acf.homeThumb && <PostCover image={acf.homeThumb} />}
            <PostTitle dangerouslySetInnerHTML={{ __html: sanitize(title, sanitizeConfig) }} />
            {acf.excerpt && <Excerpt>{acf.excerpt}</Excerpt>}
            <PostLink to={`/${slug}`}>
              {clickText}
            </PostLink>
          </SinglePost>
        </SwiperSlide>
      ))}
    </Swiper>
  </PostsWrapper>
);

PostsTrack.propTypes = {
  clickText: PropTypes.string.isRequired,
  innerRef: PropTypes.shape({}).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  swiperRef: PropTypes.shape({}).isRequired,
};

