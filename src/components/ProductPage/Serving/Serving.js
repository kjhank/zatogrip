import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import { SectionHeading } from '@components/styled';
import {
  Amount, Badge, Description, Wrapper,
} from './Serving.styled';

const sanitizeConfig = {
  allowedTags: [
    'b',
    'em',
    'i',
    'strong',
  ],
};

export const Serving = ({
  amount, badge, description, heading, pageSlug,
}) => (
  <Wrapper>
    <Container>
      {heading && <SectionHeading>{heading}</SectionHeading>}
      {amount && <Amount>{amount.split(',').join(',\n')}</Amount>}
      {badge && (
        <Badge
          className={pageSlug}
          image={badge}
        />
      )}
      {description &&
        <Description dangerouslySetInnerHTML={{ __html: sanitize(description, sanitizeConfig) }} />
      }
    </Container>
  </Wrapper>
);

Serving.propTypes = {
  amount: PropTypes.string.isRequired,
  badge: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]),
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  pageSlug: PropTypes.string.isRequired,
};

Serving.defaultProps = {
  badge: null,
};
