import React from 'react';
import PropTypes from 'prop-types';

import { Contact } from '@containers';

const ContactPage = ({ pageContext }) => (
  <Contact
    ctxSize={JSON.stringify(pageContext).length}
    form={pageContext.data.form}
    header={pageContext.data.header}
    image={pageContext.data.image}
    imagePortrait={pageContext.data.imagePortrait}
  />
);

ContactPage.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      form: PropTypes.shape({}),
      header: PropTypes.shape({}),
      image: PropTypes.shape({}),
      imagePortrait: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default ContactPage;
