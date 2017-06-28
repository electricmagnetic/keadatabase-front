import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBirdsIfNeeded } from '../../actions/birds.js';
import BirdCard from './Bird';

import './Birds.css';

class Birds extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBirdsIfNeeded());
  }

  render() {
    return(
      <div className="Birds">
        {!this.props.birds.length &&
          <p><div className="loader"></div></p>
        }
        <div className="row">
          {this.props.birds.map(bird =>
            <div key={ bird.slug } className="col-xs-6 col-sm-4">
              <BirdCard bird={ bird } />
            </div>
          )}
        </div>
      </div>
    );
  }
}

Birds.propTypes = {
  birds: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { birdsStore } = state;

  const {
      isFetching,
      lastUpdated,
      items: birds
  } = birdsStore || {
    isFetching: true,
    items: []
  }

  return {
    isFetching,
    lastUpdated,
    birds,
  }
}

export default connect(mapStateToProps)(Birds);
