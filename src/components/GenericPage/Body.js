import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  StyledHeader, Title,
} from '@components/Post/Header.styled';

import { Container } from '@components';
import {
  Background, Content, PortraitBackground, Wrapper,
} from './Body.styled';

const sanitizeConfig = {
  allowedAttributes: {
    // '*': ['class'],
    a: [
      'href',
      'rel',
      'target',
    ],
    input: [
      'data-*',
      'id',
      'name',
      'type',
    ],
    label: ['for'],
  },
  allowedClasses: {
    details: ['*'],
    div: ['*'],
    summary: false,
  },
  allowedTags: [
    'a',
    'b',
    'dd',
    'details',
    'div',
    'dl',
    'dt',
    'em',
    'figcaption',
    'figure',
    'h2',
    'h3',
    'h4',
    'i',
    'img',
    'input',
    'label',
    'li',
    'ol',
    'p',
    'picture',
    'strong',
    'summary',
    'ul',
  ],
};

export const Body = ({
  background, body, portraitBackground, title,
}) => {
  console.log(body);

  return (
    <Wrapper>
      <StyledHeader isCompact>
        <Background
          image={background}
          isLazy={false}
        />
        <PortraitBackground
          image={portraitBackground}
          isLazy={false}
        />
        <Container>
          <Title dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
        </Container>
      </StyledHeader>
      <Container>
        <Content
          className="cmplz-document cookie-statement cmplz-document-eu"
          dangerouslySetInnerHTML={{ __html: sanitize(body, sanitizeConfig) }}
          id="cmplz-document"
        />
      </Container>
    </Wrapper>
  );
};

Body.propTypes = {
  background: PropTypes.shape({}).isRequired,
  body: PropTypes.string,
  portraitBackground: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
};

Body.defaultProps = {
  body: null,
  title: null,
};
