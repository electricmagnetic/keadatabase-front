import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Feature } from "react-mapbox-gl";
import { Link } from 'react-router-dom';

import Map from '../map/Map';
import { BottomBox } from '../map/InformationBox';

const BirdSightingsMap = ({ sightings, selectedFeature, selectFeature }) => (
  <div className='BirdSightingsMap mb-4'>
    <Map
      height='480px'
      center={ sightings[0].sighting__point_location.coordinates }
      zoom={ [12] }
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{ "icon-image": "circle-11" }}
      >
        {sightings.map(sighting => (
          <Feature
            key={ sighting.id }
            properties={{ sighting_id: sighting.sighting, ...sighting }}
            coordinates={ sighting.sighting__point_location.coordinates }
            onClick={ e => selectFeature(e.feature.properties) }
          />
        ))}
      </Layer>

      { selectedFeature &&
        <BottomBox>
          <span className="badge badge-primary">{ selectedFeature.sighting_id }</span>
          <Link to={ '/sightings/' + selectedFeature.sighting_id }>
            <p>{ selectedFeature.sighting__date_sighted }</p>
          </Link>
        </BottomBox>
      }
    </Map>
  </div>
);

BirdSightingsMap.propTypes = {
  sightings: PropTypes.array.isRequired,
  selectedFeature: PropTypes.object,
  selectFeature: PropTypes.func.isRequired,
};

export default BirdSightingsMap;