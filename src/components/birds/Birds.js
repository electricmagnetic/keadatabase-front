import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBandCombosIfNeeded } from '../../actions/bandCombos.js';

import Error from '../helpers/Error';
import Loader from '../helpers/Loader';
import BirdCard from './BirdCard';

class Birds extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBandCombosIfNeeded());
  }

  render() {
    const bandCombos = this.props.items;

    if (this.props.isFetching) {
      return (<Loader />);
    }
    else if (this.props.isError) {
      return (<Error />);
    }
    else {
      return(
        <div className="Birds">
          { !bandCombos.length &&
            <p>No Results</p>
          }
          <div className="row is-flex">
            {bandCombos.map(bandCombo =>
              <div key={ bandCombo.bird.slug } className="col-xs-6 col-sm-4">
                <BirdCard bird={ bandCombo.bird } />
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

Birds.propTypes = {
  query: PropTypes.string.isRequired,
  items: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { bandCombosReducer } = state;

  const {
      query,
      isFetching,
      items,
      isError
  } = bandCombosReducer || {
    isFetching: true,
    items: [],
    isError: false
  }

  return {
    query,
    isFetching,
    items,
    isError
  }
}

export default connect(mapStateToProps)(Birds);
