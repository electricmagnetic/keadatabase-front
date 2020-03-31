import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';

import SightingPage from './Sighting/SightingPage';
import SightingCard from './Sighting/SightingCard';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `${process.env.REACT_APP_API_BASE}/sightings/sightings/`;

/**
  Sighting either:
  - Renders a given sighting as a specified type (e.g. card, page)
  - Fetches a sighting using the given id and renders as a specified type
  */
class Sighting extends Component {
  constructor(props) {
    super(props);
    this.renderSighting = this.renderSighting.bind(this);
  }

  renderSighting(sighting) {
    const { type, ...others } = this.props;
    switch (type) {
      case 'card':
        return <SightingCard sighting={sighting} {...others} />;
      default:
        return <SightingPage sighting={sighting} {...others} />;
    }
  }

  componentDidMount() {
    if (this.props.id) this.props.lazyFetchSighting(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) this.props.lazyFetchSighting(this.props.id);
  }

  render() {
    if (this.props.sightingFetch) {
      const { sightingFetch } = this.props;
      if (sightingFetch.pending) {
        return <Loader />;
      } else if (sightingFetch.rejected) {
        return <Error message="Sighting invalid" />;
      } else if (sightingFetch.fulfilled) {
        return this.renderSighting(sightingFetch.value);
      }
    } else if (this.props.sighting) {
      return this.renderSighting(this.props.sighting);
    } else return null;
  }
}

Sighting.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  sighting: PropTypes.object,
};

Sighting.defaultProps = {
  type: 'page',
};

export default connect(props => ({
  lazyFetchSighting: id => ({
    sightingFetch: `${API_URL}${props.id}/`,
  }),
}))(Sighting);
