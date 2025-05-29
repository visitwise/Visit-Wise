import React from 'react';
import { features } from '../../data/features';
import Container from '../ui/Container';
import Card from '../ui/Card';
import * as LucideIcons from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 md:py-28" id="features">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful Features for Modern Retail
          </h2>
          <p className="text-lg text-secondary/80">
            Our comprehensive system provides everything you need to recognize,
            engage, and reward your customers across all touchpoints.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Dynamically get the icon from Lucide
            const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons];

            const isValidIcon = !!IconComponent;

            return (
              <Card key={index} hoverEffect className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {isValidIcon && (
                      // @ts-ignore
                      <IconComponent size={24} className="text-primary" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-secondary/80">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Features;