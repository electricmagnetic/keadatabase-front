import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QualityIndicator extends Component {
  render() {
    const { quality } = this.props;
    var indicator = '';
    var indicator_verbose = '';

    if (quality === 0) {
      indicator = 'remove';
      indicator_verbose = 'Bad';
    }
    else if (quality >= 1) {
      indicator = 'ok';
      indicator_verbose = 'OK';
    }
    else {
      indicator = 'hourglass';
      indicator_verbose = 'Unverified';
    }

    return(
      <span className="QualityIndicator">
        <span className={("glyphicon glyphicon-" + indicator)} aria-hidden="true"></span><span className="sr-only">{ indicator_verbose }</span>
      </span>
    );
  }
}

QualityIndicator.propTypes = {
  quality: PropTypes.number.isRequired
}

export default QualityIndicator;
