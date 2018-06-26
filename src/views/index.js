import React from 'react';
import Helmet from 'react-helmet';

import Page from '../components/presentation/Page';
import Posts from '../components/presentation/Posts';
import Banner from '../components/presentation/Banner';
import BannerButtons from '../components/presentation/BannerButtons';
import BirdSightingsList from '../components/sightings/BirdSightingsList';

import banner from '../assets/img/banners/home.jpg';

const HomePage = props => {
  return (
    <div className="HomePage">
      <Helmet title="Kea Database" />
      <Banner backgroundImage={ banner }>
        <Page id={34} hideTitle />
      </Banner>
      <BannerButtons additionalClasses="mb-4" />
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
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-3">Blog</h2>
            <Posts />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">Recently Sighted</h2>
            <BirdSightingsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
