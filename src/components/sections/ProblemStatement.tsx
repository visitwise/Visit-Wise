import React from 'react';
import Container from '../ui/Container';

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Most Stores Only Know Their Customers at Checkout.{" "}
            <span className="text-primary">We Change That.</span>
          </h2>
          
          <div className="text-lg text-secondary/80 leading-relaxed space-y-6">
            <p>
              Today, most retail stores greet their customers blindly — without knowing 
              whether they are first-timers, regular visitors, or valuable loyalists.
            </p>
            
            <p className="text-xl font-medium text-secondary">
              VisitWise helps you recognize, engage, and delight your customers 
              from the moment they step in — automatically.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemStatement;