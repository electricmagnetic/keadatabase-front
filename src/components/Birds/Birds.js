import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBandCombosIfNeeded } from '../../actions/bandcombos.js';
import BirdCard from '../Bird/BirdCard';

class Birds extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBandCombosIfNeeded());
  }

  render() {
    const { bandcombos, isFetching } = this.props;
    return(
      <div className="Birds">
        {isFetching
            ? <div className="loader"></div>
            : !bandcombos.length && <p>No Results</p>
        }
        <div className="row is-flex">
          {bandcombos.map(bandcombo =>
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

const mapStateToProps = (state, ownProps) => {
  const { bandcombosStore } = state;

  const {
      query,
      isFetching,
      lastUpdated,
      items: bandcombos
  } = bandcombosStore || {
    isFetching: true,
    items: []
  }

  return {
    query,
    isFetching,
    lastUpdated,
    bandcombos,
  }
}

export default connect(mapStateToProps)(Birds);
