import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layer, Feature } from "react-mapbox-gl";
import { Link } from 'react-router-dom';

import { getBirdSightingsByBird } from '../../actions/birdSightings';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import Map from '../map/Map';
import { BottomBox } from '../map/InformationBox';

class BirdSightings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeature: null
    };

    this.markerClick = this.markerClick.bind(this);
  }

  componentDidMount() {
    const { slug, dispatch } = this.props;
    dispatch(getBirdSightingsByBird(slug));
  }

  markerClick(e) {
    const { feature } = e;

    this.setState({
      selectedFeature: feature.properties
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

          <div className='row'>
            <div className='col-md-6'>
              <p>Showing 20 most recent sightings.</p>
              {sightings.map(sighting => (
                <p key={ sighting.id }>{ sighting.sighting }</p>
              ))}
            </div>

            <div className='col-md-6'>
              <Map
                height='480px'
                center={ sightings[0].sighting__point_location.coordinates }
                zoom={ [12] }
              >
                <Layer
                  type="symbol"
                  id="marker"
                  layout={{ "icon-image": "circle-11" }}
                >
                  {sightings.map(sighting => (
                    <Feature
                      key={ sighting.sighting }
                      properties={{ sighting_id: sighting.sighting, ...sighting }}
                      coordinates={ sighting.sighting__point_location.coordinates }
                      onClick={ this.markerClick }
                    />
                  ))}
                </Layer>

                { selectedFeature &&
                  <BottomBox>
                    <span className="badge badge-primary">{ selectedFeature.sighting_id }</span>
                    <Link to={ '/sightings/' + selectedFeature.sighting_id }>
                      <p>{ selectedFeature.sighting__date_sighted }</p>
                    </Link>
                  </BottomBox>
                }
              </Map>
            </div>
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
