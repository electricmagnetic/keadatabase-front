import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import Error from '../Helpers/Error';
import Loader from '../Helpers/Loader';
import { fetchSightingsIfNeeded } from '../../actions/sightings.js';

class Sighting extends Component {
  render() {
    const { sighting } = this.props;

    return(
      <div className="Sighting">
        <p>
          <Link to={ '/sightings/' + sighting.id }>
            { sighting.id }:
            <Moment format="dddd DD MMMM YYYY [at] h:mm a" parse="YYYY-MM-DD HH:mm:ss">
              { sighting.date_sighted } { sighting.time_sighted }
            </Moment>
          </Link>
        </p>
      </div>
    );
  }
}

class Sightings extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSightingsIfNeeded());
  }

  render() {
    if (this.props.isFetching) {
      return (<Loader />);
    }
    else if (this.props.isError) {
      return (<Error />);
    }
    else {
      return(
        <div className="Sightings">
          <section>
            <h2>Sightings</h2>
            {this.props.items.map(sighting =>
              <Sighting key={ sighting.id } sighting={ sighting } />
            )}
          </section>
        </div>
      );
    }
  }
}

Sightings.propTypes = {
  items: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  const { sightingsReducer } = state;

  const {
      isFetching,
      items,
      isError
  } = sightingsReducer || {
    isFetching: true,
    items: [],
    isError: false
  }

  return {
    isFetching,
    items,
    isError
  }
}

export default connect(mapStateToProps)(Sightings);
