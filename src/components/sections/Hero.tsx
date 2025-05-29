import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className="bg-accent pt-[120px] pb-20 md:pt-[132px] md:pb-28" id="hero">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Recognize</span> and{" "}
              <span className="text-primary">reward</span> your{" "}
              <span className="relative inline-block">
                loyal customers
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10"></span>
              </span>
            </h1>
            
            <p className="text-lg text-secondary/80 mb-8 leading-relaxed">
              Our retail recognition system helps you identify returning customers,
              personalize their experience, and build lasting relationships that
              drive repeat business and brand loyalty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => handleNavigation('/contact')}>
                Contact Us
              </Button>
              <Button variant="ghost" size="lg" onClick={() => handleNavigation('/contact')}>
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/device.jpg" 
                alt="Retail store employee assisting a customer" 
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