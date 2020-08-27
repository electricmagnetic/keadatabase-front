import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';

import Sighting from './Sighting';
import BirdSightingBirdCard from './BirdSighting/BirdSightingBirdCard';
import BirdSightingFeature from './BirdSighting/BirdSightingFeature';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `${process.env.REACT_APP_API_BASE}/bird_observations/`;

/**
  BirdSighting either:
  - Renders a given bird sighting as a specified type (e.g. card)
  - Fetches a bird sighting using the given id and renders as a specified type
  */
class BirdSighting extends Component {
  constructor(props) {
    super(props);
    this.renderBirdSighting = this.renderBirdSighting.bind(this);
  }

  renderBirdSighting(birdSighting) {
    const { type, ...others } = this.props;
    switch (type) {
      case 'sightingCard':
        return <Sighting sighting={birdSighting.sighting} type="card" {...others} />;
      case 'feature':
        return <BirdSightingFeature birdSighting={birdSighting} {...others} />;
      default:
        return <BirdSightingBirdCard birdSighting={birdSighting} {...others} />;
    }
  }

  componentDidMount() {
    if (this.props.id) this.props.lazyFetchBirdSighting(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) this.props.lazyFetchBirdSighting(this.props.id);
  }

  render() {
    if (this.props.birdSightingFetch) {
      const { birdSightingFetch } = this.props;
      if (birdSightingFetch.pending) {
        return <Loader />;
      } else if (birdSightingFetch.rejected) {
        return <Error message="Bird sighting invalid" />;
      } else if (birdSightingFetch.fulfilled) {
        return this.renderBirdSighting(birdSightingFetch.value);
      }
    } else if (this.props.birdSighting) {
      return this.renderBirdSighting(this.props.birdSighting);
    } else return null;
  }
}

BirdSighting.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  birdSighting: PropTypes.object,
};

BirdSighting.defaultProps = {
  type: 'birdCard',
};

export default connect(props => ({
  lazyFetchBirdSighting: id => ({
    birdSightingFetch: `${API_URL}${props.id}/`,
  }),
}))(BirdSighting);
