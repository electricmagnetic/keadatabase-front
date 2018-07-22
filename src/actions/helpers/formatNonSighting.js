import moment from 'moment';

export function formatNonSighting(values={}) {
  const sighting = {};

  // Add challenge (basic spam prevention)
  sighting.challenge = 'kea';

  // Format date and time sighted
  if (values.dateTimeSighted) {
    sighting.date_sighted = moment(sighting.dateTimeSighted).format('YYYY-MM-DD');
    sighting.time_sighted = moment(sighting.dateTimeSighted).format('HH:mm');
  }

  if (values.contributor) {
    sighting.contributor = {};
    Object.keys(values.contributor).forEach(key => {
      if (values.contributor[key]) sighting.contributor[key] = values.contributor[key];
    });
  }

  // Copy other parameters if exist
  [
    'location_details',
    'expectations',
    'comments'
  ].forEach(key => {
    if (values[key]) { sighting[key] = values[key]; }
  });

  return JSON.stringify(sighting);
};
