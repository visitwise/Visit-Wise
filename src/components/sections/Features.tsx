import React from 'react';
import { features } from '../../data/features';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import * as LucideIcons from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 md:py-28" id="features">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How VisitWise Works
          </h2>
          <p className="text-lg text-secondary/80 mb-8">
            Three simple steps to transform your customer experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            // Dynamically get the icon from Lucide
            const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons];
            
            return (
              <Card key={index} hoverEffect className="flex flex-col h-full">
                <div className="text-center mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold mb-4">
                    {index + 1}
                  </span>
                </div>
                <div className="mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    {IconComponent && <IconComponent size={24} className="text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                  <p className="text-secondary/80 text-center">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button size="lg">Watch the 1-Minute Demo</Button>
        </div>
      </Container>
    </section>
  );
};

export default Features;