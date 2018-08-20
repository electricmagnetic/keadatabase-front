import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';

import { getFeaturedBirds } from '../../actions/birds';

import ProfilePicture from '../helpers/ProfilePicture';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

import './BirdsFeatured.css';

class BirdsFeatured extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getFeaturedBirds());
  }

  render() {
    const { featuredBirds } = this.props;

    if (featuredBirds.pending) return <Loader />;
    else if (featuredBirds.rejected) return <Error reason={ featuredBirds.value.message }/>;
    else if (featuredBirds.fulfilled) {
      return (
        <div className="BirdsFeatured py-4">
          <div className="container">
            <h2 className="text-center mb-3 mt-0 h4">Featured Bird</h2>
            <div className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                { featuredBirds.value.results.map((bird, index) =>
                  <div key={ bird.slug } className={ 'carousel-item ' + (index === 0 ? 'active' : '')}>
                    <div className="row justify-content-md-center align-items-center">
                      <div className="col col-md-3 title">
                        <h3 className="mt-0">{ bird.name }</h3>
                        <p className="mb-0">{ bird.band_combo }</p>
                        <p className="mb-0">{ bird.get_life_stage } { bird.sex }</p>
                      </div>
                      <div className="col-md-auto image my-2">
                        <ProfilePicture bird={ bird } classNames={ ['img-fluid', 'rounded-circle'] } size="large" asLink />
                      </div>
                      <div className="col col-md-3 text">
                        <p className="mb-0">
                          <Truncate lines={3}>
                            { bird.bird_extended.description }
                          </Truncate>
                          &nbsp;
                          <Link to={ '/birds/' + bird.slug }>
                            read more
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    else return null;
  }
};

const mapStateToProps = (state) => {
  return { featuredBirds: state.featuredBirds };
}

export default connect(mapStateToProps)(BirdsFeatured);
