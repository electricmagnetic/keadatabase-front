import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBandCombosIfNeeded } from '../../actions/bandcombos.js';
import BirdCard from '../Bird/BirdCard';

import './Birds.css';

class Birds extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBandCombosIfNeeded());
  }

  render() {
    return(
      <div className="Birds">
        {!this.props.bandcombos.length &&
          <div className="loader"></div>
        }
        <div className="row is-flex">
          {this.props.bandcombos.map(bandcombo =>
            <div key={ bandcombo.bird.slug } className="col-xs-6 col-sm-4">
              <BirdCard bird={ bandcombo.bird } />
            </div>
          )}
        </div>
      </div>
    );
  }
}

Birds.propTypes = {
  bandcombos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { bandcombosStore } = state;

  const {
      isFetching,
      lastUpdated,
      items: bandcombos
  } = bandcombosStore || {
    isFetching: true,
    items: []
  }

  return {
    isFetching,
    lastUpdated,
    bandcombos,
  }
}

export default connect(mapStateToProps)(Birds);
