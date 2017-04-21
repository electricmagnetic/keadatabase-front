import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BirdCard from './Bird';

import './Birds.css';

class Birds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birds: []
    };
  }

  getBirds() {
    fetch(`${this.context.keadatabase_api}/birds`)
    .then(response => {
      response.json()
      .then(data => {
        this.setState({ birds: data.results });
      })
      .catch(error => {
        console.error(error);
      });
    });
  }

  componentDidMount() {
    this.getBirds();
  }

  render() {
    return(
      <div className="Birds">
        <div className="row">
          {this.state.birds.map(bird =>
            <div key={ bird.id } className="col-xs-6 col-sm-4">
              <BirdCard  bird={ bird } />
            </div>
          )}
        </div>
      </div>
    );
  }
}

Birds.contextTypes = {
  keadatabase_api: PropTypes.string.isRequired
};

export default Birds;
