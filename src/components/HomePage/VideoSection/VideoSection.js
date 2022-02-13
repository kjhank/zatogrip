import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { Play } from '@icons';
import {
  PlayButton, Section, Video, VideoWrapper,
} from './VideoSection.styled';

export const VideoSection = ({
  content: {
    mp4Source, poster, webmSource,
  },
}) => {
  const [
    isVideoPlaying,
    setVideoPlaying,
  ] = useState(false);
  const videoRef = useRef();
  const handlePlayback = ({ target }) => {
    if (target.paused) {
      target.play();
    } else {
      target.pause();
    }
  };

  const handleVideoState = useCallback(({ type }) => {
    setVideoPlaying(type === 'play');
  }, []);

  useEffect(() => {
    videoRef.current.addEventListener('play', handleVideoState);
    videoRef.current.addEventListener('pause', handleVideoState);
  }, []);

  return (
    <Section>
      <Container>
        <VideoWrapper>
          <Video
            onClick={handlePlayback}
            poster={poster?.url}
            preload="none"
            ref={videoRef}
          >
            <source
              src={webmSource?.url}
              type={`${webmSource?.type}/${webmSource?.subtype}`}
            />
            <source
              src={mp4Source?.url}
              type={`${mp4Source?.type}/${mp4Source?.subtype}`}
            />
            Your browser can&apos;t play videos
          </Video>
          <PlayButton
            isActive={!isVideoPlaying}
            onClick={handlePlayback}
          >
            <Play />
          </PlayButton>
        </VideoWrapper>
      </Container>
    </Section>
  );
};

VideoSection.propTypes = {
  content: PropTypes.shape({
    mp4Source: PropTypes.shape({
      subtype: PropTypes.string,
      type: PropTypes.string,
      url: PropTypes.string,
    }),
    poster: PropTypes.shape({
      url: PropTypes.string,
    }),
    webmSource: PropTypes.shape({
      subtype: PropTypes.string,
      type: PropTypes.string,
      url: PropTypes.string,
    }),
  }).isRequired,
};

