import React from 'react';
import { footerColumns } from '../../data/footer';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <img 
                src="/Logo Website.png"
                alt="VisitWise"
                className="h-14"
              />
            </a>
            <p className="text-white/70 mb-6 max-w-md">
              Our mission is to help retailers create personalized shopping experiences 
              that drive customer loyalty and increase revenue.
            </p>
          </div>
          
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} VisitWise. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer