import React from 'react';
import Helmet from 'react-helmet';

import Page from '../components/presentation/Page';
import Posts from '../components/presentation/Posts';
import Banner from '../components/presentation/Banner';
import BannerButtons from '../components/presentation/BannerButtons';

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
            <Posts />
          </div>
          <div className="col-md-6">
            <p>Recent Sightings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
