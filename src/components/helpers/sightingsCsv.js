export const csvHeader = [
  'id', 'get_quality_display', 'contributor', 'get_sighting_type_display',
  'date_sighted', 'time_sighted', 'region', 'comments', 'quality',
  'date_created', 'date_updated', 'sighting_type', 'longitude', 'latitude',
  'behaviour', 'favourite', 'geocode',
];

export const getCsvData = sightings => sightings.map(sighting => ([
  sighting.id, sighting.get_quality_display, sighting.contributor,
  sighting.get_sighting_type_display, sighting.date_sighted,
  sighting.time_sighted, sighting.region, sighting.comments,
  sighting.quality, sighting.date_created, sighting.date_updated,
  sighting.sighting_type, sighting.point_location.coordinates[0],
  sighting.point_location.coordinates[1], sighting.behaviour,
  sighting.favourite, sighting.geocode
]));
