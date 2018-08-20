import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBirdSightings } from '../../actions/birdSightings';

import FormatDate from '../helpers/FormatDate';
import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

class BirdSightingsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getBirdSightings());
  }

  render() {
    const { birdSightings } = this.props;

    if (birdSightings.pending) return <Loader />;
    else if (birdSightings.rejected) return <Error reason={ birdSightings.value.message }/>;
    else if (birdSightings.fulfilled) {
      return (
        <div className="BirdSightingsList">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Bird</th>
                <th>When</th>
              </tr>
            </thead>
            <tbody>
              { birdSightings.value.results.map((birdSighting) => (
                <React.Fragment key={ birdSighting.id }>
                  {birdSighting.bird &&
                    <tr>
                      <td>
                        <Link to={ '/birds/' + birdSighting.bird.slug }>
                          { birdSighting.bird.name }
                        </Link>
                      </td>
                      <td>
                        <Link to={ '/sightings/' + birdSighting.sighting }>
                          <FormatDate format="date">
                            { birdSighting.sighting__date_sighted }
                          </FormatDate>
                        </Link>
                      </td>
                    </tr>
                  }
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    else return null;
  }
};

const mapStateToProps = (state) => {
  return { birdSightings: state.birdSightings };
};

export default connect(mapStateToProps)(BirdSightingsList);
