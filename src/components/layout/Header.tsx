import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
      
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
  
  const handleGetStartedClick = () => {
    navigate('/contact');
  };
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
      style={{ height: isOpen ? 'auto' : '72px' }}
    >
      <Container>
        <div className="flex items-center justify-between h-[72px] md:h-[72px]">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={handleScrollToTop}>
              <img 
                src="/Logo Website.png"
                alt="VisitWise"
                className="h-14"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-base transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary font-medium' 
                    : 'text-secondary/80 hover:text-primary'
                }`}
                aria-current={location.pathname === item.href ? 'page' : undefined}
                onClick={item.href === '/' ? handleScrollToTop : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <button onClick={handleGetStartedClick}>
              <Button>Get Started</Button>
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-secondary p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 pb-6">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-base transition-colors px-2 py-2 ${
                    location.pathname === item.href
                      ? 'text-primary font-medium' 
                      : 'text-secondary/80 hover:text-primary'
                  }`}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <button onClick={handleGetStartedClick}>
                  <Button className="w-full">Get Started</Button>
                </button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;