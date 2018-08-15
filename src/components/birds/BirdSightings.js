import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBirdSightingsByBird } from '../../actions/birdSightings';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import FormatDate from '../helpers/FormatDate';
import BirdSightingsMap from './BirdSightingsMap';
import './BirdSightings.css';

const SightingCard = ({ sighting, selectFeature }) => {
  const feature = { sighting_id: sighting.sighting, ...sighting };
  return (
    <div className='SightingCard card' onClick={ () => selectFeature(feature) }>
      <div className='card-body'>
        <p className='card-text'>
          <FormatDate>{ sighting.sighting__date_sighted } { sighting.sighting__time_sighted }</FormatDate>
        </p>
        <div className='row justify-content-between'>
          <div className='col'>
            <span className="badge badge-primary">{ sighting.sighting }</span>
          </div>
          <div className='col'>
            <Link to={ '/sightings/' + sighting.sighting }>
              <small>View sighting&nbsp;&raquo;</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

class BirdSightings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeature: null
    };

    this.selectFeature = this.selectFeature.bind(this);
  }

  componentDidMount() {
    const { slug, dispatch } = this.props;
    dispatch(getBirdSightingsByBird(slug));
  }

  selectFeature(feature) {
    this.setState({
      selectedFeature: feature
    });
  }

  render() {
    const { birdSightings } = this.props;
    const { selectedFeature } = this.state;

    if (birdSightings.pending) return <Loader />;
    else if (birdSightings.rejected) return <Error reason={ birdSightings.value.message }/>;
    else if (birdSightings.fulfilled) {
      const sightings = birdSightings.value.results;

      if (!sightings || sightings.length === 0) {
        return <span className='no-sightings'></span>;
      }

      return (
        <div className='BirdSightings container'>
          <h2>Sightings</h2>
          <p>Showing 20 most recent sightings.</p>

          <BirdSightingsMap
            sightings={ sightings }
            selectedFeature={ selectedFeature }
            selectFeature={ this.selectFeature }
          />

          <div className='row'>
            {sightings.map(sighting => (
              <div className='col-sm-6 col-lg-4 col-xl-3' key={ sighting.id }>
                <SightingCard
                  sighting={ sighting }
                  selectFeature={ this.selectFeature }
                />
              </div>
            ))}
          </div>
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
