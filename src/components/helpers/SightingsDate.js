import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class SightingsDate extends Component {
  /* Consistently formats Sighting dates */ 
  render() {
    return(
      <Moment format="dddd DD MMMM YYYY [at] h:mm a" parse="YYYY-MM-DD HH:mm:ss">
        { this.props.children }
      </Moment>
    );
  }
}

SightingsDate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.array.isRequired
  ])
}

export default SightingsDate;
