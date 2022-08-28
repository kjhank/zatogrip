import React from 'react';
import PropTypes from 'prop-types';
import {
  Swiper, SwiperSlide,
} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Arrow as ArrowIcon } from '@icons';

import {
  Arrow,
  FilesWrapper,
  Image,
  Name,
  SingleFile,
} from './Carousel.styled';

export const FilesTrack = ({
  clickText,
  innerRef,
  files,
  swiperRef,
}) => (
  <FilesWrapper ref={innerRef}>
    <Swiper
      breakpoints={{
        700: {
          slidesPerGroup: 1,
          slidesPerView: 2,
          spaceBetween: 38,
        },
        800: {
          slidesPerGroup: 1,
          slidesPerView: 3,
          spaceBetween: 76,
        },
      }}
      initialSlide={1}
      onSwiper={instance => {
        const ref = swiperRef;

        ref.current = instance;
      }}
      slidesPerGroup={1}
      slidesPerView={1}
      wrapperTag="ul"
    >
      {files.map(({ file }) => (
        <SwiperSlide
          key={file.name}
          tag="li"
        >
          <SingleFile>
            <div>
              {file.image && <Image image={file.image} />}
            </div>
            <Name>{file.name}</Name>
            <Arrow
              as="a"
              href={file.download.url}
              rel="noreferrer"
              target="_blank"
            >
              {clickText}
              <ArrowIcon />
            </Arrow>
          </SingleFile>
        </SwiperSlide>
      ))}
    </Swiper>
  </FilesWrapper>
);

FilesTrack.propTypes = {
  clickText: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
  swiperRef: PropTypes.shape({}).isRequired,
};

