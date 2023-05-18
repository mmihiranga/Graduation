import React from 'react';
import CarouselView from './views/CarouselView';
import SponsorView from './views/SponsorView';
import DiscoverView from './views/DiscoverView';

const Home = () => {
  return (
    <div>
      <CarouselView />
      <SponsorView />
      <DiscoverView />
    </div>
  );
};

export default Home;
