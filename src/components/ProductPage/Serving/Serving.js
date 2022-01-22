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
  amount, badge, description, heading,
}) => (
  <Wrapper>
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <Amount>{amount}</Amount>
      <Badge image={badge} />
      <Description dangerouslySetInnerHTML={{ __html: sanitize(description, sanitizeConfig) }} />
    </Container>
  </Wrapper>
);

Serving.propTypes = {
  amount: PropTypes.string.isRequired,
  badge: PropTypes.shape({}).isRequired,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

