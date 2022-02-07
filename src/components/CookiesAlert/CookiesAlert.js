import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { SectionHeading } from '@components/styled';
import { ArrowLink } from '@components';

import {
  Text, Wrapper,
} from './CookiesAlert.styled';

const sanitizeConfig = {
  allowedTags: [
    'a',
    'p',
  ],
};

export const CookiesAlert = ({
  content, confirmCookies, isVisible,
}) => (
  <Wrapper isVisible={isVisible}>
    <SectionHeading>
      {content.heading}
    </SectionHeading>
    <Text dangerouslySetInnerHTML={{ __html: sanitize(content.message, sanitizeConfig) }} />
    <ArrowLink onClick={confirmCookies}>{content?.confirmText}</ArrowLink>
  </Wrapper>
);

CookiesAlert.propTypes = {
  confirmCookies: PropTypes.func.isRequired,
  content: PropTypes.shape({
    confirmText: PropTypes.string,
    heading: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  isVisible: PropTypes.bool.isRequired,
};

