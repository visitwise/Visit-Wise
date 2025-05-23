import React from 'react';
import { benefits } from '../../data/benefits';
import Container from '../ui/Container';
import * as LucideIcons from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-accent" id="benefits">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Drive Business Growth with Customer Recognition
          </h2>
          <p className="text-lg text-secondary/80">
            Our customers experience significant improvements in key retail metrics
            after implementing our recognition system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => {
            // Dynamically get the icon from Lucide
            const IconComponent = LucideIcons[benefit.icon as keyof typeof LucideIcons];
            
            return (
              <div 
                key={index} 
                className="flex items-start gap-6 transition-all duration-300 hover:translate-x-1"
              >
                <div className="bg-white shadow-sm rounded-lg p-4 flex-shrink-0">
                  {IconComponent && <IconComponent size={24} className="text-primary" />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-secondary/80">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Read our customer success stories
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;