import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Blog from '../components/WordPress/Blog';
import Page from '../components/WordPress/Page';
import FeaturedBird from '../components/Birds/FeaturedBird';
import LatestSightings from '../components/Sightings/LatestSightings';

class BannerButtons extends Component {
  render() {
    return(
      <div className="BannerButtons">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 button-report">
              <Link to="/report">Report Sightings &raquo;</Link>
            </div>
            <div className="col-sm-6 button-birds">
              <Link to="/birds">Search Birds &raquo;</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Banner extends Component {
  render() {
    return(
      <div className="Banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Page id={34} hideTitle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Sponsors extends Component {
  render() {
    return(
      <div className="Sponsors">
        <div className="container">
          <h2>Sponsors</h2>
          <p>sponsors</p>
        </div>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Banner />
        <BannerButtons />
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Page id={24} />
          </div>
          <div className="col-md-6">
            <Page id={27} />
          </div>
        </div>
        </div>
        <FeaturedBird />
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Blog number={3} />
          </div>
          <div className="col-md-6">
            <LatestSightings />
          </div>
        </div>
        </div>
        <Sponsors />
      </div>
    );
  }
}

export default HomePage;
