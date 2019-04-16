import React from 'react';
import Helmet from 'react-helmet';

import Page from '../components/presentation/Page';
import Posts from '../components/presentation/Posts';
import Banner from '../components/presentation/Banner';
import BannerButtons from '../components/presentation/BannerButtons';
import BirdSightingsList from '../components/sightings/BirdSightingsList';
import BirdsFeatured from '../components/birds/BirdsFeatured';
import Sponsors from '../components/presentation/Sponsors';

import banner from '../assets/img/banners/home.jpg';

const HomePage = props => {
  return (
    <div className="HomePage">
      <Helmet title="Kea Database" />
      <section className="mb-4">
        <Banner backgroundImage={banner}>
          <Page id={34} hideTitle />
        </Banner>
        <BannerButtons />
      </section>
      <section className="mb-4">
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
      <section className="mb-4">
        <BirdsFeatured />
      </section>
      <section className="mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-3">Recently Sighted</h2>
              <BirdSightingsList />
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">Blog</h2>
              <Posts />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Sponsors />
      </section>
    </div>
  );
};

export default HomePage;
