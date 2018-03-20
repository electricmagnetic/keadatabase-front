import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Blog from '../components/wordpress/Blog';
import Page from '../components/wordpress/Page';
import Banner from '../components/presentation/Banner/Banner';
import BirdFeatured from '../components/birds/BirdFeatured';
import SightingsTable from '../components/sightings/SightingsTable';

import banner from '../assets/img/banners/home.jpg';

class BannerButtons extends Component {
  render() {
    return(
      <div className="BannerButtons">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 banner-button">
              <Link to="/birds" className="btn btn-lg btn-transparent">
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>Search Birds
              </Link>
            </div>
            <div className="col-sm-4 banner-button">
              <Link to="/report/sighting" className="btn btn-lg btn-transparent">
                <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Report Sighting
              </Link>
            </div>
            <div className="col-sm-4 banner-button">
              <Link to="/report/non-sighting" className="btn btn-lg btn-transparent">
                <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>Report Non-Sighting
              </Link>
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
          <h2 className="sr-only">Sponsors & Supporters</h2>
          <p>Thank you very much for the generous support of our sponsors. This project simply wouldn't be possible without them!</p>
          <h3>Sponsors</h3>
          <div className="row">
            <div className="col-sm-4">
              <ul>
                <li><a href="http://activeadventures.com" rel="noopener noreferrer" target="_blank">Active Adventures</a></li>
                <li><a href="http://thebealeyhotel.co.nz" rel="noopener noreferrer" target="_blank">The Bealey</a></li>
                <li><a href="http://timezoneone.com" rel="noopener noreferrer" target="_blank">TimeZoneOne</a></li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul>
                <li><a href="http://placemakers.co.nz" rel="noopener noreferrer" target="_blank">PlaceMakers Riccarton</a></li>
                <li><a href="http://hirepool.co.nz" rel="noopener noreferrer" target="_blank">Hirepool</a></li>
                <li><a href="http://engco.co.nz" rel="noopener noreferrer" target="_blank">ENGCO</a></li>
                <li><a href="http://catalyst.net.nz" rel="noopener noreferrer" target="_blank">Catalyst</a></li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul>
                <li><a href="http://kathmandu.co.nz" rel="noopener noreferrer" target="_blank">Kathmandu</a></li>
                <li><a href="https://builderscrack.co.nz/tradies/r9b36vw/jamie-ward-builder-limited" rel="noopener noreferrer" target="_blank">Jamie Ward Builder</a></li>
                <li><a href="http://orillion.com" rel="noopener noreferrer" target="_blank">Orillion</a></li>
              </ul>
            </div>
          </div>
          <h3>Supporters</h3>
          <div className="row">
            <div className="col-sm-4">
              <ul>
                <li><a href="http://doc.govt.nz" rel="noopener noreferrer" target="_blank">Department of Conservation</a></li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul>
                <li><a href="http://keaconservation.co.nz" rel="noopener noreferrer" target="_blank">Kea Conservation Trust</a></li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul>
                <li><a href="http://apwt.org.nz/" rel="noopener noreferrer" target="_blank">Arthur's Pass Wildlife Trust</a></li>
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
      const featuredBirds = ['hohoro', 'schist', 'aroha', 'tuhura', 'captain-sanderson'];
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
          {/*<div className="container">
            <div className="messages">
              <Page id={131} hideTitle />
            </div>
          </div>*/}
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
                <a href="https://blog.keadatabase.nz/">More posts</a>
              </div>
              <div className="col-md-6">
                <h2>Recent Sightings</h2>
                <SightingsTable limit={5} />
                <Link to={ '/sightings/' }>More sightings</Link>
              </div>
            </div>
          </div>
        </section>
        <Sponsors />
      </div>
    );
  }
}

export default HomePage;
