import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import {
  ContactData, Image, StyledBody, Title,
} from './Body.styled';

import { Form } from './Form';

export const Body = ({
  contactData, heading, form, image,
}) => (
  <StyledBody>
    <Image image={image} />
    <Container>
      <Title>{heading}</Title>
      <ContactData dangerouslySetInnerHTML={{ __html: sanitize(contactData) }} />
      <Form form={form} />
    </Container>
  </StyledBody>
);

Body.propTypes = {
  contactData: PropTypes.string.isRequired,
  form: PropTypes.shape({}).isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
};

