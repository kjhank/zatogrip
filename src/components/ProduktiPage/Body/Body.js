import React from 'react';
import PropTypes from 'prop-types';

import { Arrow as ArrowIcon } from '@icons';
import { Container } from '@components';
import { Carousel } from '../Carousel/Carousel';
import {
  AdditionalFilesSection,
  Arrow,
  Background,
  BackgroundPortrait,
  FileList,
  Heading,
  Image,
  ImageLink,
  SingleFile,
  Wrapper,
} from './Body.styled';

export const Body = ({
  additionalFiles, background, backgroundPortrait, downloadText, files,
}) => (
  <Wrapper>
    <Carousel
      downloadText={downloadText}
      intro={files.caption}
      items={files.files}
    />
    <Container>
      <AdditionalFilesSection>
        <Heading>{additionalFiles?.heading}</Heading>
        <FileList>
          {additionalFiles.files.map(({ file }) => (
            <SingleFile key={file.name}>
              <ImageLink
                download
                href={file.download.url}
                rel="noreferrer"
                target="_blank"
              >
                <Image image={file.image} />
              </ImageLink>
              <Arrow
                download
                href={file.download.url}
                rel="noreferrer"
                target="_blank"
              >
                {downloadText}
                <ArrowIcon />
              </Arrow>
            </SingleFile>
          ))}
        </FileList>
      </AdditionalFilesSection>
    </Container>
    <Background image={background} />
    <BackgroundPortrait image={backgroundPortrait} />
  </Wrapper>
);

Body.propTypes = {
  additionalFiles: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.shape({})),
    heading: PropTypes.string,
  }).isRequired,
  background: PropTypes.shape({}).isRequired,
  backgroundPortrait: PropTypes.shape({}).isRequired,
  downloadText: PropTypes.string.isRequired,
  files: PropTypes.shape({
    caption: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};
