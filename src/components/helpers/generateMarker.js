import React from 'react';
import { Link } from 'react-router-dom';

import SightingsDate from '../helpers/SightingsDate';

function generateMarker(sighting) {
  /* Generates a Google Map formatted marker when passed a Sighting object */

  // Picks variables depending on whether a sighting or a birdSighting was passed through
  var sighting_id = sighting.sighting || sighting.id;
  var point_location = sighting.point_location || sighting.sighting__point_location;
  var date_sighted = sighting.date_sighted || sighting.sighting__date_sighted;
  var time_sighted = sighting.time_sighted || sighting.sighting__time_sighted;

  var infoContent =
    <div>
      <strong>
        <Link to={ '/sightings/' + sighting_id }>
          <SightingsDate format="medium">
            { date_sighted } { time_sighted }
          </SightingsDate>
          &nbsp;&raquo;
        </Link>
      </strong><br />
    </div>;

  return {
    position: {
      lng: point_location.coordinates[0],
      lat: point_location.coordinates[1]
    },
    key: sighting.id,
    showInfo: false,
    infoContent: infoContent
  };
}

export default generateMarker;
