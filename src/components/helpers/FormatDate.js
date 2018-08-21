import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const FormatDate = ({ format, calendar, children }) => {
  const momentParse = 'YYYY-MM-DD HH:mm:ss';

  const momentCalendarStrings = {
    lastDay : '[Yesterday at] LT',
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    lastWeek : '[Last] dddd [at] LT',
    nextWeek : 'dddd [at] LT',
    sameElse : 'ddd DD MMM[,] LT'
};

  if (calendar) {
    return(
      <Moment calendar={ momentCalendarStrings } parse={ momentParse }>
        { children }
      </Moment>
    );
  }
  else {
    var momentFormat = '';

    switch (format) {
      case 'short':
        momentFormat = 'DD/MM/YY h:mm a';
        break;
      case 'medium':
        momentFormat = 'ddd DD MMM[,] h:mm a';
        break;
      case 'long':
        momentFormat = 'dddd DD MMMM YYYY[,] h:mm a';
        break;
      case 'date':
        momentFormat = 'ddd DD MMMM';
        break;
    default:
      momentFormat = 'ddd DD/MM/YY [at] h:mm a';
    }

    return(
      <Moment format={ momentFormat } parse={ momentParse }>
        { children }
      </Moment>
    );
  }
};

FormatDate.propTypes = {
  children: PropTypes.any.isRequired,
  format: PropTypes.string.isRequired,
  calendar: PropTypes.bool.isRequired,
}

FormatDate.defaultProps = {
  format: 'long',
  calendar: false,
}

export default FormatDate;
