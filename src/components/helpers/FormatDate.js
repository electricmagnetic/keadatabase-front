import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const FormatDate = ({ format, children }) => {
  var momentFormat = '';

  switch (format) {
    case 'short':
      momentFormat = 'DD/MM/YY [at] h:mm a';
      break;
    case 'long':
      momentFormat = 'dddd DD MMMM YYYY [at] h:mm a';
      break;
    case 'date':
      momentFormat = 'ddd DD MMMM';
      break;
  default:
    momentFormat = 'ddd DD/MM/YY [at] h:mm a';
  }

  return(
    <Moment format={ momentFormat } parse="YYYY-MM-DD HH:mm:ss">
      { children }
    </Moment>
  );
};

FormatDate.propTypes = {
  children: PropTypes.any.isRequired,
  format: PropTypes.string.isRequired
}

FormatDate.defaultProps = {
  format: 'long'
}

export default FormatDate;
