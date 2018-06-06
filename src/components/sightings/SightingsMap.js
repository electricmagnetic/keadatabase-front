import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layer, Feature } from "react-mapbox-gl";
import { Link } from 'react-router-dom';

import getSightings from '../../actions/sightings';

import Map from '../map/Map';
import { TopBox, BottomBox } from '../map/InformationBox';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

class SightingsMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFeature: this.props.selectedFeature || null
    }

    this.markerClick = this.markerClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getSightings());
  }

  markerClick(e) {
    const { feature } = e;

    this.setState({
      selectedFeature: feature.properties
    });
  }

  render() {
    const { sightings } = this.props;
    const { selectedFeature } = this.state;

    if (sightings.pending) return <Loader />;
    else if (sightings.rejected) return <Error reason={ sightings.value.message }/>;
    else if (sightings.fulfilled) {
      return (
        <div className="SightingsMap mb-4">
          <Map>
            <TopBox>
              <div className="container">
                <h1 className="mt-4">Sightings</h1>
              </div>
            </TopBox>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "circle-11" }}>
              { sightings.value.results.map((sighting) =>
                <Feature
                  key={ sighting.id }
                  properties={{ sighting_id: sighting.id, ...sighting }}
                  coordinates={ sighting.point_location.coordinates }
                  onClick={ this.markerClick }
                />
              )}
            </Layer>
            { selectedFeature &&
              <BottomBox>
                <span className="badge badge-primary">{ selectedFeature.sighting_id }</span>
                <Link to={ '/sightings/' + selectedFeature.sighting_id }>
                  <p>{ selectedFeature.date_sighted }</p>
                </Link>
              </BottomBox>
            }
          </Map>
        </div>
      );
    }
    else return null;
  }
};

SightingsMap.propTypes = {
  selectedSighting: PropTypes.object
}

const mapStateToProps = (state) => {
  return { sightings: state.sightings };
}

export default connect(mapStateToProps)(SightingsMap);
