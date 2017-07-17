import React from 'react';

function generateMarker(sighting) {
  /* Generates a Google Map formatted marker when passed a Sighting object */
  return {
    position: {
      lng: sighting.point_location.coordinates[0],
      lat: sighting.point_location.coordinates[1]
    },
    key: sighting.id,
    showInfo: false,
    infoContent: (
      sighting.date + sighting.time
    )
  };
}

export default generateMarker;
