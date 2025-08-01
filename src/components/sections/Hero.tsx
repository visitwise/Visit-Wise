import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate=useNavigate();
  return (
    <section className="bg-accent pt-[120px] pb-20 md:pt-[132px] md:pb-28" id="hero">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-7xl sm:text-7xl md:text-5xl font-bold mb-6 ">
              <span className="text-secondary">Know Your Customers</span>{" "}
              <br className="hidden lg:block" />
              <span className="text-primary">the Moment They </span>{" "}
              <span className="text-secondary">Walk In</span>
              <br className="hidden lg:block" />
            </h1>
            
            <p className="text-xl text-secondary/80 mb-8 leading-relaxed">
              Smart customer recognition for smarter retail experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={()=>{
                navigate("/request-demo")
              }}>Request a Demo</Button>
              <Button variant="ghost" size="lg"onClick={()=>{
                navigate("/request-demo")
              }}>
                How It Works
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/device.jpg" 
                alt="Happy customer entering a store" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;