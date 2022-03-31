import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export const c = (props) => {
  return <div>c</div>;
};

c.propTypes = {
  second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(c);
