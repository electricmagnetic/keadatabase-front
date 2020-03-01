import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBirdSightings } from '../../actions/birdSightings';

import ProfilePicture from '../helpers/ProfilePicture';
import FormatDate from '../helpers/FormatDate';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

import './BirdSightingsList.scss';

class BirdSightingsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getBirdSightings());
  }

  render() {
    const { birdSightings } = this.props;

    if (birdSightings.pending) return <Loader />;
    else if (birdSightings.rejected) return <Error reason={birdSightings.value.message} />;
    else if (birdSightings.fulfilled) {
      return (
        <div className="BirdSightingsList">
          <div className="row">
            {birdSightings.value.results.map(birdSighting => (
              <React.Fragment key={birdSighting.id}>
                {birdSighting.bird && (
                  <div className="col-6 col-md-3 mb-3">
                    <ProfilePicture
                      bird={birdSighting.bird}
                      asLink
                      size="large"
                      classNames={['img-fluid', 'rounded-circle', 'mb-3']}
                    />
                    <Link to={'/birds/' + birdSighting.bird.slug}>
                      <h3 className="h5 mb-0">{birdSighting.bird.name}</h3>
                    </Link>
                    <FormatDate calendar>
                      {birdSighting.sighting__date_sighted} {birdSighting.sighting__time_sighted}
                    </FormatDate>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { birdSightings: state.birdSightings };
};

export default connect(mapStateToProps)(BirdSightingsList);
