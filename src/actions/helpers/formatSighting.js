import moment from 'moment';

export function formatSighting(values={}) {
  const sighting = {};

  // Add challenge (basic spam prevention)
  sighting.challenge = 'kea';

  // Format date and time sighted
  if (values.dateTimeSighted) {
    sighting.date_sighted = moment(sighting.dateTimeSighted).format('YYYY-MM-DD');
    sighting.time_sighted = moment(sighting.dateTimeSighted).format('HH:mm');
  }

  // Format coordinates into numbers with 'Point' type
  if (values.point_location && values.point_location[0] && values.point_location[1]) {
    sighting.point_location = {
      type: 'Point',
      coordinates: values.point_location.map(parseFloat),
    };
  }

  // Copy only defined values
  if (values.birds && values.birds.length > 0) {
    sighting.birds = [];
    values.birds.forEach((bird, i) => {
      const formattedBird = {};
      Object.keys(bird).forEach(key => {
        if (bird[key]) formattedBird[key] = bird[key];
      });
      sighting.birds.push(formattedBird);
    })
  } else {
    // Add empty sighting.birds if none defined as back-end requires it to be at least defined
    sighting.birds = [];
  }

  // For 'sighted' sighting_type only (where number field is not defined), get length of array for number
  if (values.sighting_type) {
    if (values.sighting_type === 'sighted') {
      sighting.number = sighting.birds.length;
    } else {
      sighting.number = values.number;
    }
  }

  if (values.contributor) {
    sighting.contributor = {};
    Object.keys(values.contributor).forEach(key => {
      if (values.contributor[key]) sighting.contributor[key] = values.contributor[key];
    });
  }

  // Copy other parameters if exist
  [
    'precision',
    'location_details',
    'sighting_type',
    'behaviour',
    'comments'
  ].forEach(key => {
    if (values[key]) { sighting[key] = values[key] }
  });

  return JSON.stringify(sighting);
};
