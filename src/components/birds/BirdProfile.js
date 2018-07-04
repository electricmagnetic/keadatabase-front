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

import './BirdProfile.css';

class BirdProfile extends Component {
  componentDidMount() {
    const { slug, dispatch } = this.props;
    dispatch(getBird(slug));
  }

  render() {
    const { slug, birds } = this.props;

    if (birds[slug]) {
      if (birds[slug].birdPending) return <Loader />;
      else if (birds[slug].birdRejected) return <Error reason={ birds.birdValue.message }/>;
      else if (birds[slug].birdFulfilled) {
        const bird = birds[slug].birdValue;
        const extended = bird.bird_extended ? bird.bird_extended : null;

        return (
          <div className="BirdProfile">
            <Helmet title={ bird.name } />
            <Banner>
              <h1>{ bird.name }</h1>
              <ProfilePicture bird={ bird } classNames={ ['img-fluid'] } size="large" />
              <PrettyBandCombo bandCombo={ bird.band_combo } />
            </Banner>
            <ul>
              <li>{ bird.sex }</li>
              <li>{ bird.status }</li>
              <li>{ bird.get_life_stage }</li>
              <li>{ bird.study_area }</li>
              <li>{ bird.primary_band }</li>
              <li>{ bird.band_combo }</li>
            </ul>
            { extended &&
              <ul>
                <li>{ extended.description }</li>
                <li>{ extended.sponsor_name } { extended.sponsor_website }</li>
                <li>{ extended.profile_picture_attribution }</li>
              </ul>
            }
          </div>
        );
      }
    }
    else return null;
  }
};

BirdProfile.propTypes = {
  slug: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return { birds: state.birds };
}

export default connect(mapStateToProps)(BirdProfile);
