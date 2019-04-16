import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSightings } from '../../actions/sightings';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import SightingsMap from './SightingsMap';
import SightingCard from './SightingCard';

class Sightings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeature: null,
    };

    this.selectFeature = this.selectFeature.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getSightings());
  }

  selectFeature(feature) {
    this.setState({
      selectedFeature: feature,
    });
  }

  render() {
    const { sightings } = this.props;
    const { selectedFeature } = this.state;

    if (sightings.pending) return <Loader />;
    else if (sightings.rejected) return <Error reason={sightings.value.message} />;
    else if (sightings.fulfilled) {
      return (
        <React.Fragment>
          <SightingsMap
            sightings={sightings.value.results}
            selectedFeature={selectedFeature}
            selectFeature={this.selectFeature}
          />

          <div className="container">
            <div className="row">
              {sightings.value.results.map(sighting => (
                <div className="col-sm-6 col-lg-4 col-xl-3" key={sighting.id}>
                  <SightingCard sighting={sighting} selectFeature={this.selectFeature} />
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    } else return null;
  }
}

Sightings.propTypes = {
  sightings: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sightings: state.sightings,
});

export default connect(mapStateToProps)(Sightings);
