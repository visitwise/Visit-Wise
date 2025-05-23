import React from 'react';
import { footerColumns } from '../../data/footer';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

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
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
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
        
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-semibold text-lg mb-3">Subscribe to our newsletter</h3>
            <p className="text-white/70 mb-4">
              Get the latest updates, news, and special offers directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email address"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} VisitWise. All rights reserved.</p>
          <p className="mt-1">
            Designed and built with ♥ for retail excellence.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer