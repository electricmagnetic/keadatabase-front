import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TooltipText.css';

class TooltipText extends Component {
  componentDidMount() {
    window.$('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return(
      <span className={"TooltipText glyphicon glyphicon-" + this.props.icon }
            data-toggle="tooltip"
            data-placement={ this.props.placement }
            title={ this.props.text }>
      </span>
    );
  }
}

TooltipText.defaultProps = {
  placement: "right",
  icon: "option-horizontal"
}

TooltipText.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired
}


export default TooltipText;
