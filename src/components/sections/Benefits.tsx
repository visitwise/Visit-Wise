import React from 'react';
import { benefits } from '../../data/benefits';
import Container from '../ui/Container';
import Card from '../ui/Card';
import * as LucideIcons from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-accent" id="benefits">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why VisitWise?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            // Dynamically get the icon from Lucide
            const IconComponent = LucideIcons[benefit.icon as keyof typeof LucideIcons];
            
            return (
              <Card key={index} hoverEffect className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {IconComponent && <IconComponent size={28} className="text-primary" />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-secondary/80">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;