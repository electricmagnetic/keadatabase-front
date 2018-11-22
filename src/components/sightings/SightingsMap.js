import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Cluster, Marker } from "react-mapbox-gl";

import Map from '../map/Map';
import { TopBox } from '../map/InformationBox';
import SightingCard from './SightingCard';
import './SightingsMap.css';

const clusterMarker = (coordinates, pointCount) => (
  <Marker coordinates={ coordinates } key={ coordinates.toString() }>
    <div className='cluster-marker'>
      <div className='number'>{ pointCount }</div>
    </div>
  </Marker>
);

const SightingsMap = ({ sightings, selectedFeature, selectFeature }) => (
  <div className='SightingsMap mb-4 py-3 px-3 py-lg-0 px-lg-0'>
    <Map
      onClick={ () => selectFeature() }
      center={ selectedFeature && selectedFeature.point_location.coordinates }
    >
      <TopBox>
        <div className="container">
          <h1 className="mt-4">Sightings</h1>
        </div>
      </TopBox>

      <Cluster
        ClusterMarkerFactory={ clusterMarker }
        zoomOnClick
      >
        {sightings.map(sighting => (
          <Marker
            key={ sighting.id }
            coordinates={ sighting.point_location.coordinates }
            onClick={ () => selectFeature({ sighting_id: sighting.id, ...sighting }) }
          >
            <i className="fas fa-map-marker-alt"></i>
          </Marker>
        ))}
      </Cluster>

      {selectedFeature &&
        <Popup
          coordinates={ selectedFeature.point_location.coordinates }
        >
          <SightingCard
            sighting={ selectedFeature }
            selectFeature={ selectFeature }
          />
        </Popup>
      }
    </Map>
  </div>
);

SightingsMap.propTypes = {
  sightings: PropTypes.array.isRequired,
  selectedFeature: PropTypes.object,
  selectFeature: PropTypes.func.isRequired,
};

export default SightingsMap;
