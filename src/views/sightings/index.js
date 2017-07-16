import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Error from '../../components/Helpers/Error';
import Loader from '../../components/Helpers/Loader';
import { fetchSightingsIfNeeded } from '../../actions/sightings.js';

import Banner from '../../components/Banner/Banner';
import SightingsTable from '../../components/Sightings/SightingsTable';
import SightingsMap from '../../components/Sightings/SightingsMap';

class SightingsPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSightingsIfNeeded());
  }

  render() {
    if (this.props.isFetching) {
      return (<div className="container"><Loader /></div>);
    }
    else if (this.props.isError) {
      return (<div className="container"><Error /></div>);
    }
    else {
      const sightings = this.props.items;
      return (
        <div className="SightingsPage">
          <Helmet title="Sightings" />
          <Banner size="small">
            <h1>Sightings</h1>
          </Banner>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-7">
                <SightingsTable sightings={ sightings } />
              </div>
              <div className="col-md-6 col-lg-5">
                <SightingsMap sightings={ sightings } />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

SightingsPage.propTypes = {
  items: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  const { sightingsReducer } = state;

  const {
      isFetching,
      items,
      isError
  } = sightingsReducer || {
    isFetching: true,
    items: [],
    isError: false
  }

  return {
    isFetching,
    items,
    isError
  }
}

export default connect(mapStateToProps)(SightingsPage);
