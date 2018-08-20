import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../birds/BirdCard.css';

class SightingBirdCard extends Component {
  render() {
    const { birdSighting } = this.props;

    var matched = false;
    var known = false;
    var banded = false;

    if (birdSighting.band_combo) banded = true;
    if (birdSighting.bird) matched = true;
    else if (birdSighting.life_stage_guess || birdSighting.sex_guess) known = true;

    return(
      <div className="col-xs-6 col-sm-4 col-md-3">
        <div className="BirdCard">
          <div className="card-details">
            <h3>
              { matched &&
                <Link to={ '/birds/' + birdSighting.bird.slug }>
                  { birdSighting.bird.name }&nbsp;&raquo;
                </Link>
              }
              { known &&
                <span>
                  { birdSighting.get_life_stage_guess_display } { birdSighting.get_sex_guess_display }
                </span>
              }
              { (!matched && !known && banded) &&
                <span className="default">
                  Unmatched
                </span>
              }
              { (!matched && !known && !banded) &&
                <span className="default">
                  Unknown
                </span>
              }
            </h3>
            <p className="bandcombo">
              { birdSighting.band_combo ?
                birdSighting.band_combo
                :
                <span className="default">
                  { birdSighting.get_banded_display }
                </span>
              }

            </p>
          </div>
        </div>
      </div>
    );
  }
}

class SightingContainingBirds extends Component {
  /* For sighting detail pages, containing a list of birds in that sighting */
  render() {
    var { result, entities } = this.props;

    return(
      <div className="SightingContainingBirds">
        <div className="row is-flex">
          { result.map(key =>
            <SightingBirdCard key={ key } birdSighting={ entities.birdSightings[key] } />
          ) }
        </div>
      </div>
    );
  }
}

export default SightingContainingBirds;
