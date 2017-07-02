import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { Link } from 'react-router-dom';

import { fetchBirdIfNeeded } from '../../actions/birds.js';

import placeholder from '../../assets/img/placeholder_large.png';
import './BirdFeatured.css';

class BirdFeatured extends Component {
  componentDidMount() {
    const { dispatch, slug } = this.props;
    dispatch(fetchBirdIfNeeded(slug));
  }

  render() {
    const { bird } = this.props;
    return(
      <div className="BirdFeatured">
        <div className="container">
          {!bird.slug &&
            <div className="loader"></div>
          }
          { bird.slug &&
            <div className="row">
              <div className="col-sm-3 col-md-2 col-md-offset-2 featured-img">
                <p>
                  <Link to={ '/birds/' + bird.slug }>
                    { bird.bird_extended.profile_picture
                      ? <img src={ bird.bird_extended.profile_picture.large } alt={ bird.name } className="img-circle img-responsive" />
                      : <img src={ placeholder } alt="placeholder" className="img-thumbnail img-responsive" />
                    }
                  </Link>
                </p>
              </div>
              <div className="col-sm-9 col-md-6 featured-details">
                <h2>Featured Bird</h2>
                <h1>Meet { bird.name }</h1>
                <p>
                  <Truncate lines={2}>
                    { bird.bird_extended.description }
                  </Truncate>
                </p>
                <p className="read-more">
                  <Link to={ '/birds/' + bird.slug }>Read about { bird.name } &raquo;</Link>
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

BirdFeatured.propTypes = {
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

export default connect(mapStateToProps)(BirdFeatured);
