import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { getBird } from '../../actions/birds';

import PrettyBandCombo from '../helpers/PrettyBandCombo';
import ProfilePicture from '../helpers/ProfilePicture';
import Banner from '../presentation/Banner';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

import './BirdProfile.scss';

class BirdProfile extends Component {
  componentDidMount() {
    const { slug, dispatch } = this.props;
    dispatch(getBird(slug));
  }

  render() {
    const { slug, birds } = this.props;

    if (birds[slug]) {
      if (birds[slug].birdPending) return <Loader />;
      else if (birds[slug].birdRejected) return <Error reason={birds[slug].birdValue.message} />;
      else if (birds[slug].birdFulfilled) {
        const bird = birds[slug].birdValue;
        const extended = bird.bird_extended ? bird.bird_extended : null;

        var details = [];
        const isDead = bird.status === 'Dead' ? true : false;

        if (isDead) {
          details.push('Deceased');
        }

        details.push(bird.get_life_stage);
        details.push(bird.sex);

        if (bird.primary_band) {
          details.push('·');
          details.push(bird.primary_band);
        }

        return (
          <div className="BirdProfile">
            <Helmet title={bird.name} />
            <Banner size="small" additionalClasses="mb-4">
              <div className="row">
                <div className="col-md-4 order-md-9 profile-picture">
                  <figure>
                    <ProfilePicture
                      bird={bird}
                      classNames={['img-fluid']}
                      size={extended ? 'large' : 'thumbnail'}
                      isDead={isDead}
                    />
                  </figure>
                </div>

                <div className="col-md-8 order-md-1">
                  <h1 className="mb-3">{bird.name}</h1>
                  <ul className="list-unstyled mb-3">
                    <li>
                      <i className="fas fa-fw fa-info-circle" /> {details.join(' ')}
                    </li>
                    <li>
                      <i className="fas fa-fw fa-map-marker-alt" /> {bird.study_area}
                    </li>
                    {bird.band_combo && (
                      <li>
                        <i className="far fa-fw fa-circle" /> {bird.band_combo}
                      </li>
                    )}
                  </ul>
                  <div className="band-combo">
                    <PrettyBandCombo bandCombo={bird.band_combo} />
                  </div>
                </div>
              </div>
            </Banner>

            <div className="container extended">
              {extended && (
                <div className="row">
                  <div className="col-lg-7">
                    {extended.description && <p className="description">{extended.description}</p>}
                    {extended.sponsor_name && (
                      <p>
                        <strong>Sponsor: </strong>
                        <a href={extended.sponsor_website}>{extended.sponsor_name}</a>
                      </p>
                    )}
                    {extended.profile_picture_attribution && (
                      <p>
                        <i className="fas fa-camera" /> {extended.profile_picture_attribution}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {!extended && <h3>No additional information found for this bird</h3>}
            </div>
          </div>
        );
      }
    } else return null;
  }
}

BirdProfile.propTypes = {
  slug: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return { birds: state.birds };
};

export default connect(mapStateToProps)(BirdProfile);
