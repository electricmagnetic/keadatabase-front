import React, { Component } from 'react';

import BirdProfile from '../../components/Bird/BirdProfile';

class BirdDetailPage extends Component {
  render() {
    return (
      <div className="BirdDetailPage">
        <BirdProfile slug={this.props.match.params.slug} />
      </div>
    );
  }
}

export default BirdDetailPage;
