import React, { Component } from 'react';

import './Error.css';

class Error extends Component {
  render() {
    return(
      <div className="Error">
        <p>
          <span className="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
          Hmm, something went wrong here. Try refreshing?
        </p>
      </div>
    );
  }
}

export default Error;
