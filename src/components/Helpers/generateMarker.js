function generateMarker(sighting) {
  /* Generates a Google Map formatted marker when passed a Sighting object */
  var point_location = sighting.point_location || sighting.sighting__point_location;
  return {
    position: {
      lng: point_location.coordinates[0],
      lat: point_location.coordinates[1]
    },
    key: sighting.id
  };
}

export default generateMarker;
