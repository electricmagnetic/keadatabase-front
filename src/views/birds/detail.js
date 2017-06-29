import React, { Component } from 'react';
import Helmet from 'react-helmet';

import BirdProfile from '../../components/Birds/BirdProfile';

class BirdDetailPage extends Component {
  render() {
    return (
      <div className="BirdDetailPage">
        <Helmet title="Bird" />
        <div className="container">
          <BirdProfile slug={this.props.match.params.slug} />
        </div>
      </div>
    );
  }
}

export default BirdDetailPage;
