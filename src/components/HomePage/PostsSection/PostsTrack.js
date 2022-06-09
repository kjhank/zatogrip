import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import {
  Swiper, SwiperSlide,
} from 'swiper/react';
import { Link } from 'gatsby';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  Arrow,
  Excerpt,
  PostCover,
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
            <div>
              {acf.homeThumb && <PostCover image={acf.homeThumb} />}
              <Link
                rel="dofollow"
                to={`/${slug}`}
              >
                <PostTitle dangerouslySetInnerHTML={{ __html: sanitize(title, sanitizeConfig) }} />
              </Link>
              {acf.excerpt && <Excerpt>{acf.excerpt}</Excerpt>}
              <Link
                rel="nofollow"
                to={`/${slug}`}
              >
                <Arrow customAs="div">
                  {clickText}
                </Arrow>
              </Link>
            </div>
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

