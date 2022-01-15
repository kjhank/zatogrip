const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./src/components/Layout/Layout').default;

exports.wrapPageElement = ({
  element, props,
}) => (<Layout {...props}>{element}</Layout>);

exports.wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.shape({}).isRequired,
};
