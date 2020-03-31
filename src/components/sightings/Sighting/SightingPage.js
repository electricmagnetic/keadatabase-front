import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import FormatDateTime from '../../helpers/FormatDateTime';
import Banner from '../../presentation/Banner';
import generateSummary from './helpers/generateSummary';
import BirdSightings from '../BirdSightings';
import SightingsMap from './SightingsMap';

import './SightingPage.scss';

/**
  Presents a nicely formatted page for a given sighting.
 */
const SightingPage = ({ sighting }) => {
  return (
    <div className="SightingPage">
      <Helmet title={`#${sighting.id} (Observation)`} />
      <section className="mb-5">
        <Banner size="small">
          <h1>{`Observation #${sighting.id}`}</h1>
        </Banner>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5">
            <dl>
              <dt>When</dt>
              <dd>
                <FormatDateTime format="longDateTime">
                  {sighting.date_sighted} {sighting.time_sighted}
                </FormatDateTime>
              </dd>
              <dt>Where</dt>
              <dd>
                {sighting.geocode}, {sighting.region}
              </dd>
              <dt>Who</dt>
              <dd>{sighting.contributor}</dd>
              <dt>What</dt>
              <dd>{generateSummary(sighting)}</dd>
              <dt>Status</dt>
              <dd>{sighting.get_status_display}</dd>
            </dl>
            {sighting.comments && (
              <section>
                <h2>Comments</h2>
                <p className="comments">{sighting.comments}</p>
              </section>
            )}
            {sighting.location_details && (
              <section>
                <h2>Location Details</h2>
                <p className="location">{sighting.location_details}</p>
              </section>
            )}
            {sighting.behaviour && (
              <section>
                <h2>Behaviour</h2>
                <p className="behaviour">{sighting.behaviour}</p>
              </section>
            )}
          </div>
          <div className="col-md-6 mb-5">
            <SightingsMap sightings={[sighting]} single />
          </div>
        </div>
        <section className="mb-5">
          <div className="row">
            <BirdSightings
              queryString={`?sighting=${sighting.id}`}
              className="col-6 col-sm-4 col-lg-3 mb-3"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

SightingPage.propTypes = {
  sighting: PropTypes.object.isRequired,
};

export default SightingPage;
