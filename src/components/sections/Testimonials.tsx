import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../../data/testimonials';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef<number | null>(null);
  
  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      slideInterval.current = window.setInterval(() => {
        setActiveIndex(prevIndex => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isPaused, testimonials.length]);
  
  const handlePrev = () => {
    setActiveIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="py-20 md:py-28" id="testimonials">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Retailers Love VisitWise
          </h2>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <img 
                          src={testimonial.logo} 
                          alt={`${testimonial.company} logo`}
                          className="h-12 w-auto object-contain filter grayscale opacity-70"
                          loading="lazy"
                        />
                      </div>
                      
                      <blockquote className="text-lg italic text-secondary/80 mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center mt-auto">
                        <div className="rounded-full overflow-hidden w-16 h-16 mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-secondary/70">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-sm text-secondary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-primary w-6' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : 'false'}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-sm text-secondary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;