import React from 'react';
import PropTypes from 'prop-types';

export const GlobalFooter = ({ content }) => (
  <footer>
    I am a global footer
    {JSON.stringify(content)}
  </footer>
);

GlobalFooter.propTypes = {
  content: PropTypes.shape({}).isRequired,
};

