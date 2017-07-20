import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './QualityIndicator.css';

class QualityIndicator extends Component {
  /* Renders a tick, hourglass or cross depending on quality state given (-1 to 2). SR friendly. */

  render() {
    const { verbose, quality } = this.props;
    var indicator = '';
    var indicator_verbose = '';

    if (quality === '-1') {
      indicator = 'hourglass';
      indicator_verbose = 'Unverified';
    }
    else if (quality === '0') {
      indicator = 'remove';
      indicator_verbose = 'Bad';
    }
    else {
      indicator = 'ok';
      indicator_verbose = 'OK';
    }

    return(
      <span className="QualityIndicator">
        <span className={("glyphicon glyphicon-" + indicator)} aria-hidden="true"></span>
        <span className={ verbose ? 'verbose' : 'sr-only' }>{ indicator_verbose }</span>
      </span>
    );
  }
}

QualityIndicator.propTypes = {
  quality: PropTypes.string.isRequired,
  verbose: PropTypes.bool.isRequired
}

QualityIndicator.defaultProps = {
  verbose: false
}

export default QualityIndicator;
