import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { getBirdSightingsByBird } from '../../actions/birdSightings';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

class BirdSightings extends Component {
  componentDidMount() {
    const { slug, dispatch } = this.props;
    dispatch(getBirdSightingsByBird(slug));
  }

  render() {
    const { birdSightings } = this.props;

    if (birdSightings.pending) return <Loader />;
    else if (birdSightings.rejected) return <Error reason={ birdSightings.value.message }/>;
    else if (birdSightings.fulfilled) {
      if (!birdSightings.value.results || birdSightings.value.results.length === 0) {
        return <span className='no-sightings'></span>;
      }

      return (
        <div className='BirdSightings container'>
          <h2>Sightings</h2>
          {birdSightings.value.results.map(birdSighting => (
            <p key={ birdSighting.id }>{ birdSighting.sighting }</p>
          ))}
        </div>
      );
    }
    else return null;
  }
}

BirdSightings.propTypes = {
  slug: PropTypes.string.isRequired,
  birdSightings: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  birdSightings: state.birdSightings,
});

export default connect(mapStateToProps)(BirdSightings);
