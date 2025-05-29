import React from 'react';
import { benefits } from '../../data/benefits';
import Container from '../ui/Container';
import {
  Percent,
  DollarSign,
  Clock,
  Users,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Percent,
  DollarSign,
  Clock,
  Users,
};

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
            const IconComponent = iconMap[benefit.icon];

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
      </Container>
    </section>
  );
};

export default Benefits;
