import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Banner from '../Banner/Banner';
import TooltipText from '../Helpers/TooltipText';
import PrettyBandCombo from '../Helpers/PrettyBandCombo';

import { fetchBirdIfNeeded } from '../../actions/birds.js';
import placeholder from '../../assets/img/placeholder_large.png';
import './BirdProfile.css';

class BirdProfile extends Component {
  componentDidMount() {
    const { dispatch, slug } = this.props;
    dispatch(fetchBirdIfNeeded(slug));
  }

  render() {
    const { bird } = this.props;
    return(
      <div className="BirdProfile">
        <Helmet title={ bird.name } />
        <Banner size="medium">
          {!bird.slug &&
            <div className="loader"></div>
          }
          <div className="row">
            <div className="col-sm-4 col-sm-push-8">
              <div className="profile-picture">
                { bird.bird_extended && bird.bird_extended.is_featured && <span className="featured glyphicon glyphicon-star"></span>}
                { bird.bird_extended && bird.bird_extended.profile_picture
                  ? <img src={ bird.bird_extended.profile_picture.large } alt={ bird.name } className="img-thumbnail img-responsive" />
                  : <img src={ placeholder } alt="placeholder" className="img-thumbnail img-responsive" />
                }
              </div>
            </div>
            <div className="col-sm-8 col-sm-pull-4">
              <p className="introducing">Kia Ora, my name is:</p>
              <h1>{ bird.name }</h1>
              <p className="bandcombo">
                <PrettyBandCombo band={bird.band_combo} />
              </p>
            </div>
          </div>
        </Banner>
        <div className="container">
          {!bird.slug &&
            <div className="loader"></div>
          }
          <div className="row">
            <div className="col-sm-7">
              <section>
                <h2>My Details</h2>
                <table className="table table-condensed table-responsive details-table">
                  <tbody>
                    <tr>
                      <th>Status</th>
                      <td>
                        { bird.status }
                        <TooltipText text="NB: This is the bird's last known status, it may since have changed." />
                      </td>
                    </tr>
                    <tr>
                      <th>Life Stage</th>
                      <td>
                        { bird.get_life_stage }
                        <TooltipText text="NB: This is estimated based on age." />
                      </td>
                    </tr>
                    <tr>
                      <th>Age</th>
                      <td>
                        { bird.get_age }
                      </td>
                    </tr>
                    <tr>
                      <th>Birthday</th>
                      <td>
                        { bird.birthday }
                        <TooltipText text="NB: In most cases this was estimated when the bird was added to the database." />
                      </td>
                    </tr>
                    <tr>
                      <th>Sex</th>
                      <td>
                        { bird.sex }
                      </td>
                    </tr>
                    <tr>
                      <th>Study Area</th>
                      <td>
                        { bird.study_area }
                        <TooltipText text="NB: This kea may be found in other places!" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              { bird.bird_extended &&
                <div className="bird-extended">
                  { bird.bird_extended.description &&
                    <section>
                      <h2>About Me</h2>
                      <p>{ bird.bird_extended.description }</p>
                    </section>
                  }
                  { bird.bird_extended.sponsor_name &&
                    <section>
                      <h2>Sponsor</h2>
                      <p>
                        I'm sponsored by { bird.bird_extended.sponsor_name }.
                      </p>
                    </section>
                    }
                </div>
              }
            </div>
            <div className="col-sm-4 col-sm-offset-1">
              {/* Placeholder for image (with negative margins) */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BirdProfile.propTypes = {
  slug: PropTypes.string.isRequired,
  bird: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  const { slug } = ownProps;
  const { birdsStore } = state;
  const {
    isFetching,
    lastUpdated,
    item: bird,
  } = birdsStore[slug] || {
    isFetching: true,
    item: {}
  };

  return {
    slug,
    bird,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(BirdProfile);
