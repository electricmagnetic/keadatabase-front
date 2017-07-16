import React, { Component } from 'react';

import SightingDetail from '../../components/Sighting/SightingDetail';

class SightingDetailPage extends Component {
  render() {
    return (
      <div className="SightingDetailPage">
        <SightingDetail id={this.props.match.params.id} />
      </div>
    );
  }
}

export default SightingDetailPage;
