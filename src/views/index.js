import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Blog from '../components/WordPress/Blog';
import Page from '../components/WordPress/Page';
import Banner from '../components/Banner/Banner';
import BirdFeatured from '../components/Bird/BirdFeatured';
import SightingsTable from '../components/Sightings/SightingsTable';

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
          <p>Thank you very much for the generous support of our sponsors. This project simply wouldn't be possible without them!</p>
          <div className="row">
            <div className="col-sm-4">
              <ul>
                <li>Active Adventures</li>
                <li>The Bealey</li>
                <li>TimeZoneOne</li>
                <li>Jamie Ward Building</li>
                <li>Orillion</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul>
                <li>PlaceMakers Riccarton</li>
                <li>Hirepool</li>
                <li>ENGCO</li>
                <li>Kathmandu</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <strong>Supporters</strong>
              <ul>
                <li>Arthur's Pass Wildlife Trust</li>
                <li>Kea Conservation Trust</li>
                <li>Department of Conservation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    // TODO: use 'featured birds' from API rather than hard-coded options
    const getRandomFeaturedBird = function() {
      const featuredBirds = ['schist', 'kauri', 'aroha', 'peggy', 'beryl'];
      return featuredBirds[Math.floor(Math.random()*5)];
    }

    return (
      <div className="HomePage">
        <Helmet title="Kea Database" />
        <section>
          <Banner noMargin size="huge" backgroundImage={'url(' + banner + ')'}>
            <Page id={34} hideTitle />
          </Banner>
          <BannerButtons />
        </section>
        <section>
          <div className="container">
            <div className="messages">
              <Page id={131} hideTitle />
            </div>
          </div>
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
          <BirdFeatured slug={getRandomFeaturedBird()} />
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Blog</h2>
                <Blog />
              </div>
              <div className="col-md-6">
                <h2>Latest Sightings</h2>
                <SightingsTable />
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
