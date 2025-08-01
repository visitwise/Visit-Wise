import React from 'react';
import Hero from '../components/sections/Hero';
import ProblemStatement from '../components/sections/ProblemStatement';
import Features from '../components/sections/Features';
import Benefits from '../components/sections/Benefits';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <Features />
      <Benefits />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
    </main>
  );
};

export default HomePage;