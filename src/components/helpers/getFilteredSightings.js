import moment from 'moment';

export const MACHINE_DATE_FORMAT = 'YYYY-MM-DD';

export const getFilteredSightings = (sightings, filter) => {
  const date_from = filter.date_from && moment(filter.date_from).startOf('day');
  const date_to = filter.date_to && moment(filter.date_to).endOf('day');
  const geocode = filter.geocode && filter.geocode.toLowerCase();
  const contributor = filter.contributor && filter.contributor.toLowerCase();

  const isValidGroupSize = size => {
    if (!filter.group_size) return true;
    switch (filter.group_size_validator) {
      case '=':
        return size === filter.group_size;
      case '<=':
        return size <= filter.group_size;
      default:
        return size >= filter.group_size;
    }
  };

  return sightings.filter(sighting => {
    const date_sighted = moment(sighting.date_sighted, MACHINE_DATE_FORMAT);
    const withinPeriod =
      (!date_from || date_from <= date_sighted) &&
      (!date_to || date_sighted <= date_to);

    const matchGeocode = !geocode || sighting.geocode.toLowerCase().includes(geocode);
    const matchContributor = !contributor || sighting.contributor.toLowerCase().includes(contributor);

    return withinPeriod && matchGeocode && matchContributor && isValidGroupSize(sighting.number);
  });
};
