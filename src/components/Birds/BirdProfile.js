import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBirdIfNeeded } from '../../actions/birds.js';
import './Bird.css';

class BirdProfile extends Component {
  componentDidMount() {
    const { dispatch, slug } = this.props;
    dispatch(fetchBirdIfNeeded(slug));
  }

  render() {
    const { bird } = this.props;
    return(
      <div className="BirdProfile">
        <div className="container">
          {!bird.slug &&
            <div className="loader"></div>
          }
          <h2>{ bird.name }</h2>
          <p>{ bird.band_combo }</p>
        </div>
      </div>
    );
  }
}

BirdProfile.propTypes = {
  slug: PropTypes.string.isRequired,
  bird: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  const { slug } = ownProps;
  const { birdsStore } = state;
  const {
    isFetching,
    lastUpdated,
    item: bird,
  } = birdsStore[slug] || {
    isFetching: true,
    item: {}
  };

  return {
    slug,
    bird,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(BirdProfile);
