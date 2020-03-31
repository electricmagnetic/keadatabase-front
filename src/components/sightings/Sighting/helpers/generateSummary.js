/**
  Generates a summary string from a given sighting.
  */
const generateSummary = sighting => {
  return `${sighting.get_sighting_type_display} ${sighting.number} ${
    sighting.number === 1 ? 'bird' : 'birds'
  }`;
};

export default generateSummary;
