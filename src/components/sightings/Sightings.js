import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { CSVLink } from 'react-csv';

import { getSightings, getAllSightings } from '../../actions/sightings';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import SightingsMap from './SightingsMap';
import SightingsSearchForm from './SightingsSearchForm';
import SightingCard from './SightingCard';
import { getFilteredSightings } from '../helpers/getFilteredSightings';
import { csvHeader, getCsvData } from '../helpers/sightingsCsv';

class Sightings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeature: null
    };

    this.selectFeature = this.selectFeature.bind(this);
  }

  componentDidMount() {
    const { dispatch, location } = this.props;
    if (location.search) {
      // Get all records if query is set
      dispatch(getAllSightings());
    } else {
      // Get 250 records by default
      dispatch(getSightings());
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatch, location } = this.props;
    if (location.search && location.search !== prevProps.location.search) {
      dispatch(getAllSightings());
    }
  }

  filterIsSet() {
    return Object.keys(this.props.sightingsFilter).length > 0;
  }

  selectFeature(feature) {
    this.setState({
      selectedFeature: feature
    });
  }

  render() {
    const { sightings, sightingsFilter } = this.props;
    const { selectedFeature } = this.state;

    if (sightings.pending) return <Loader />;
    else if (sightings.rejected) return <Error reason={ sightings.value.message }/>;
    else if (sightings.fulfilled) {

      const filteredSightings = this.filterIsSet()
        ? getFilteredSightings(sightings.value.results, sightingsFilter)
        : sightings.value.results;

      const resultsCountMessage = filteredSightings.length === 250
        ? 'Showing most recent 250 results'
        : `Showing ${filteredSightings.length} results`;

      return (
        <React.Fragment>
          <SightingsMap
            sightings={ filteredSightings }
            selectedFeature={ selectedFeature }
            selectFeature={ this.selectFeature }
          />

          <SightingsSearchForm />

          <div className='container'>
            <div className="row align-items-center mb-3">
              <div className="col-auto mr-auto">
                <span>{ resultsCountMessage }</span>
              </div>
              <div className="col-auto">
                <CSVLink headers={ csvHeader } data={ getCsvData(filteredSightings) } filename="kea-sightings.csv">
                  <button className="btn btn-secondary">Download CSV</button>
                </CSVLink>
              </div>
            </div>

            <div className='row'>
              {filteredSightings.map(sighting => (
                <div className='col-sm-6 col-lg-4 col-xl-3' key={ sighting.id }>
                  <SightingCard
                    sighting={ sighting }
                    selectFeature={ this.selectFeature }
                  />
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
    else return null;
  }
}

Sightings.propTypes = {
  sightings: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sightings: state.sightings,
  sightingsFilter: state.sightingsFilter,
});

export default compose(withRouter, connect(mapStateToProps))(Sightings);
