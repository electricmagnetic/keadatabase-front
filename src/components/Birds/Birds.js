import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <ul className="Birds">
        {this.state.birds.map(bird =>
          <li key={ bird.id }>
            <p>{ bird.name } ({ bird.sex }, { bird.status })</p>
          </li>
        )}
      </ul>
    );
  }
}

Birds.contextTypes = {
  keadatabase_api: PropTypes.string.isRequired
};

export default Birds;
