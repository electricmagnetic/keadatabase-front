import React, { Component } from 'react';

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
    //fetch(`${this.context.keadatabase_api}/birds`)
    this.setState({ birds: [] });
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

export default Birds;
