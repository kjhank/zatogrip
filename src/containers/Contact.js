import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';
import { Body } from '@components/ContactPage';

export const Contact = ({
  form, header, image, imagePortrait,
}) => (
  <Main>
    <Body
      contactData={header.contactData}
      form={form}
      heading={header.heading}
      image={image}
      imagePortrait={imagePortrait}
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
  imagePortrait: PropTypes.shape({}).isRequired,
};

