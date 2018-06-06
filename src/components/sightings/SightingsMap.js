import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature, Source } from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

import getSightings from '../../actions/sightings';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
  minZoom: 5.2,
  maxZoom: 15
});

const RASTER_SOURCE_OPTIONS = {
  "type": "raster",
  "tiles": [
    `https://tiles-a.data-cdn.linz.govt.nz/services;key=${process.env.REACT_APP_LINZ_API_KEY}/tiles/v4/layer=50767/EPSG:3857/{z}/{x}/{y}.png`
  ],
  "tileSize": 256
};

class SightingsMap extends Component {
  constructor(props) {
    super(props);

    this.markerClick = this.markerClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getSightings());
  }

  markerClick(e) {
    console.log('marker clicked');
    console.log(e);
  }

  render() {
    const { sightings } = this.props;

    if (sightings.pending) return <Loader />;
    else if (sightings.rejected) return <Error reason={ sightings.value.message }/>;
    else if (sightings.fulfilled) {
      return (
        <div className="SightingsMap">
          <Map
            style="mapbox://styles/mapbox/outdoors-v9"
            containerStyle={{
              height: "520px",
              width: "100%"
            }}
            center={ [170.45, -43.983333] }
            zoom={ [5.2] }
            >
            <Source
              id="topo50"
              tileJsonSource={RASTER_SOURCE_OPTIONS}
            />
            <Layer
              id="topo50"
              type="raster"
              sourceId="topo50"
            />
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "circle-11" }}>
              { sightings.value.results.map((sighting) =>
                <Feature
                  key={ sighting.id }
                  coordinates={ sighting.point_location.coordinates }
                  onClick={ this.markerClick }
                />
              )}
            </Layer>
          </Map>
        </div>
      );
    }
    else return null;
  }
};

const mapStateToProps = (state) => {
  return { sightings: state.sightings };
}

export default connect(mapStateToProps)(SightingsMap);
