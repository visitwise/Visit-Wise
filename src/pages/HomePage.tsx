import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Benefits from '../components/sections/Benefits';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Pricing />
    </main>
  );
};

export default HomePage;