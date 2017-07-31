import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { Link } from 'react-router-dom';

import { fetchBirdIfNeeded } from '../../actions/birds.js';

import Error from '../helpers/Error';
import Loader from '../helpers/Loader';
import ProfilePicture from '../helpers/ProfilePicture';

import './BirdFeatured.css';

class BirdFeatured extends Component {
  componentDidMount() {
    const { dispatch, slug } = this.props;
    dispatch(fetchBirdIfNeeded(slug));
  }

  componentDidUpdate() {
    // Here if page is 'reloaded' without the component being re-rendered
    const { dispatch, slug } = this.props;
    dispatch(fetchBirdIfNeeded(slug));
  }

  render() {
    const bird = this.props.item;

    if (this.props.isFetching) {
      return (<div className="container"><Loader /></div>);
    }
    else if (this.props.isError) {
      return (<div className="container"><Error /></div>);
    }
    else {
      return(
        <div className="BirdFeatured">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-2 col-md-offset-2 featured-img">
                <p>
                  <Link to={ '/birds/' + bird.slug }>
                    <ProfilePicture
                      profilePicture={ bird.bird_extended.profile_picture }
                      alt={ bird.name }
                      size="large"
                      isCircle
                    />
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
          </div>
        </div>
      );
    }
  }
}

BirdFeatured.propTypes = {
  slug: PropTypes.string.isRequired,
  item: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  const { slug } = ownProps;
  const { birdsReducer } = state;

  const {
    isFetching,
    item,
    isError
  } = birdsReducer[slug] || {
    isFetching: true,
    item: {},
    isError: false
  };

  return {
    slug,
    isFetching,
    item,
    isError
  }
}

export default connect(mapStateToProps)(BirdFeatured);
