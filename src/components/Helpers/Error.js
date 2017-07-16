import React, { Component } from 'react';

import './Error.css';

class Error extends Component {
  render() {
    return(
      <div className="Error">
        <p>
          <span className="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
          { this.props.children
            ? <span>{ this.props.children }</span>
            : <span>Hmm, something went wrong here. Try refreshing?</span>
          }
        </p>
      </div>
    );
  }
}

export default Error;
