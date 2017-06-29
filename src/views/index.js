import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Blog from '../components/WordPress/Blog';
import Page from '../components/WordPress/Page';
import Banner from '../components/Banner/Banner';
import BirdFeatured from '../components/Birds/BirdFeatured';
import Sightings from '../components/Sightings/Sightings';

import banner from '../assets/img/banners/home.jpg';

class BannerButtons extends Component {
  render() {
    return(
      <div className="BannerButtons">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 banner-button button-birds">
              <Link to="/birds">Search Birds &raquo;</Link>
            </div>
            <div className="col-sm-4 banner-button button-sightings">
              <Link to="/report">Report Sightings &raquo;</Link>
            </div>
            <div className="col-sm-4 banner-button button-non-sightings">
              <Link to="/report">Report Non-Sightings &raquo;</Link>
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
        <Helmet title="Kea Database" />
        <section>
          <Banner noMargin size="huge" backgroundImage={ banner }>
            <Page id={34} hideTitle />
          </Banner>
          <BannerButtons />
        </section>
        <section>
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
        </section>
        <section>
          <BirdFeatured />
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Blog />
              </div>
              <div className="col-md-6">
                <Sightings />
              </div>
            </div>
          </div>
        </section>
        <section>
          <Sponsors />
        </section>
      </div>
    );
  }
}

export default HomePage;
