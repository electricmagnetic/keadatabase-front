import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Banner.css';

class Banner extends Component {
  render() {
    return(
      <div className={ 'Banner ' + (this.props.noMargin ? 'no-margin ' : '') + (this.props.size) }
           style={ this.props.background && {
             background: this.props.background
           }}>
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

Banner.defaultProps = {
  size: 'large',
  noMargin: false
};

Banner.propTypes = {
  size: PropTypes.string.isRequired,
  noMargin: PropTypes.bool.isRequired,
  background: PropTypes.string
};

export default Banner;
