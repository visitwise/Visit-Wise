import React, { useState } from 'react';
import { pricingTiers } from '../../data/pricing';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <section className="py-20 md:py-28 bg-accent" id="pricing">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Flexible Plans for Every Store
          </h2>
          <p className="text-lg text-secondary/80 mb-8">
            Choose the plan that fits your business needs
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isAnnual ? 'font-semibold text-primary' : 'text-secondary/70'}`}>
              Monthly
            </span>
            <button
              type="button"
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-secondary/20 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className="sr-only">Use annual billing</span>
              <span
                aria-hidden="true"
                className={`${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-semibold text-primary' : 'text-secondary/70'}`}>
              Annual <span className="text-xs text-green-600 font-medium">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`flex flex-col h-full border ${
                tier.isPopular 
                  ? 'border-primary shadow-md' 
                  : 'border-transparent'
              }`}
              hoverEffect
            >
              {tier.isPopular && (
                <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-secondary/70 mb-4">{tier.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? tier.price.annual : tier.price.monthly}
                  </span>
                  <span className="text-secondary/70">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mb-4">
                    Billed annually (${tier.price.annual * 12}/year)
                  </p>
                )}
              </div>
              
              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-primary flex-shrink-0 mr-2 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant={tier.isPopular ? 'primary' : 'ghost'}
                className="w-full mt-auto"
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
        
        {/* Compare all features section */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-3">Need more details?</h3>
          <a 
            href="#" 
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            Compare all features
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;