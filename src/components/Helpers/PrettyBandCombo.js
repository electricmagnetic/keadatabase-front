import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PrettyBandCombo extends Component {
  // Someday use this function to make the bands easier to read

  render() {
    return(
      <span className="bandcombo-pretty">
        { this.props.band }
      </span>
    );
  }
}

PrettyBandCombo.propTypes = {
  band: PropTypes.string.isRequired
}


export default PrettyBandCombo;
