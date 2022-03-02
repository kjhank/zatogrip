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
    mp4source, poster, webmSource,
  } = {},
}) => {
  const [
    isVideoPlaying,
    setVideoPlaying,
  ] = useState(false);
  const videoRef = useRef();

  const handlePlayback = () => {
    const { current: videoNode } = videoRef;

    if (videoNode.paused) {
      videoNode.play();
    } else {
      videoNode.pause();
    }
  };

  const handleVideoState = useCallback(({ type }) => {
    setVideoPlaying(type === 'play');
  }, []);

  useEffect(() => {
    const { current: videoNode } = videoRef;

    videoNode.addEventListener('play', handleVideoState);
    videoNode.addEventListener('pause', handleVideoState);

    return () => {
      videoNode.removeEventListener('play', handleVideoState);
      videoNode.removeEventListener('pause', handleVideoState);
    };
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
              src={mp4source?.url}
              type={`${mp4source?.type}/${mp4source?.subtype}`}
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
    mp4source: PropTypes.shape({
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

