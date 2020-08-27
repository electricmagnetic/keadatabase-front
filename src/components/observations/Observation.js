import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';

import ObservationPage from './Observation/ObservationPage';
import ObservationCard from './Observation/ObservationCard';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const API_URL = `${process.env.REACT_APP_API_BASE}/observations/`;

/**
  Observation either:
  - Renders a given observation as a specified type (e.g. card, page)
  - Fetches a observation using the given id and renders as a specified type
  */
class Observation extends Component {
  constructor(props) {
    super(props);
    this.renderObservation = this.renderObservation.bind(this);
  }

  renderObservation(observation) {
    const { type, ...others } = this.props;
    switch (type) {
      case 'card':
        return <ObservationCard observation={observation} {...others} />;
      default:
        return <ObservationPage observation={observation} {...others} />;
    }
  }

  componentDidMount() {
    if (this.props.id) this.props.lazyFetchObservation(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) this.props.lazyFetchObservation(this.props.id);
  }

  render() {
    if (this.props.observationFetch) {
      const { observationFetch } = this.props;
      if (observationFetch.pending) {
        return <Loader />;
      } else if (observationFetch.rejected) {
        return <Error message="Observation invalid" />;
      } else if (observationFetch.fulfilled) {
        return this.renderObservation(observationFetch.value);
      }
    } else if (this.props.observation) {
      return this.renderObservation(this.props.observation);
    } else return null;
  }
}

Observation.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  observation: PropTypes.object,
};

Observation.defaultProps = {
  type: 'page',
};

export default connect(props => ({
  lazyFetchObservation: id => ({
    observationFetch: `${API_URL}${props.id}/`,
  }),
}))(Observation);
