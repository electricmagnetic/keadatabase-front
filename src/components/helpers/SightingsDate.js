import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class SightingsDate extends Component {
  /* Consistently formats Sighting dates */
  render() {
    const { format } = this.props;
    var momentFormat = '';

    switch (format) {
      case 'short':
        momentFormat = 'DD/MM/YY [at] h:mm a';
        break;
      case 'long':
        momentFormat = 'dddd DD MMMM YYYY [at] h:mm a';
        break;
    default:
      momentFormat = 'ddd DD/MM/YY [at] h:mm a';
    }

    return(
      <Moment format={ momentFormat } parse="YYYY-MM-DD HH:mm:ss">
        { this.props.children }
      </Moment>
    );
  }
}

SightingsDate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.array.isRequired
  ]),
  format: PropTypes.string.isRequired
}

SightingsDate.defaultProps = {
  format: 'long'
}

export default SightingsDate;
