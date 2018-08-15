import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Cluster, Marker } from "react-mapbox-gl";
import { Link } from 'react-router-dom';

import Map from '../map/Map';
import './BirdSightingsMap.css';

const clusterMarker = (coordinates, pointCount) => (
  <Marker coordinates={ coordinates }>
    <div className='cluster-marker'>
      <div className='number'>{ pointCount }</div>
    </div>
  </Marker>
);

const BirdSightingsMap = ({ sightings, selectedFeature, selectFeature }) => (
  <div className='BirdSightingsMap mb-4'>
    <Map
      height='480px'
      center={ sightings[0].sighting__point_location.coordinates }
      zoom={ [12] }
    >
      <Cluster
        ClusterMarkerFactory={ clusterMarker }
        zoomOnClick
      >
        {sightings.map(sighting => (
          <Marker
            key={ sighting.id }
            coordinates={ sighting.sighting__point_location.coordinates }
            onClick={ () => selectFeature({ sighting_id: sighting.sighting, ...sighting }) }
          >
            <i className="fas fa-map-marker-alt"></i>
          </Marker>
        ))}
      </Cluster>

      {selectedFeature &&
        <Popup
          coordinates={ selectedFeature.sighting__point_location.coordinates }
        >
          <span className="badge badge-primary">{ selectedFeature.sighting_id }</span>
          <Link to={ '/sightings/' + selectedFeature.sighting_id }>
            { selectedFeature.sighting__date_sighted }
          </Link>
        </Popup>
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
