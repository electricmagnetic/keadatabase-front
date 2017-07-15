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
    const { items, isFetching } = this.props;
    return(
      <div className="Birds">
        {isFetching
            ? <div className="loader"></div>
            : !items.length && <p>No Results</p>
        }
        <div className="row is-flex">
          {items.map(bandcombo =>
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
  items: PropTypes.array.isRequired,
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
      items,
  } = bandcombosStore || {
    isFetching: true,
    items: []
  }

  return {
    query,
    isFetching,
    lastUpdated,
    items,
  }
}

export default connect(mapStateToProps)(Birds);
