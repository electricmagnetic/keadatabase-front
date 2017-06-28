import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { BirdProfile } from '../../components/Birds/Bird';

class BirdDetailPage extends Component {
  render() {
    return (
      <div className="BirdDetailPage">
        <Helmet title="Bird" />
        <div className="container">
          <BirdProfile id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

export default BirdDetailPage;
