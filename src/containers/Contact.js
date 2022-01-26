import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';
import { Body } from '@components/ContactPage';

export const Contact = ({
  form, header, image,
}) => (
  <Main>
    <Body
      contactData={header.contactData}
      form={form}
      heading={header.heading}
      image={image}
    />
  </Main>
);

Contact.propTypes = {
  form: PropTypes.shape({}).isRequired,
  header: PropTypes.shape({
    contactData: PropTypes.string,
    heading: PropTypes.string,
  }).isRequired,
  image: PropTypes.shape({}).isRequired,
};

