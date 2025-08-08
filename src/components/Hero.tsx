
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-15">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-sky-600/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Know Your Customers
            <span className="block bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              the Moment They
            </span>
            Walk In
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Smart customer recognition powered by AI for smarter retail experiences. 
            Transform every visit into a personalized journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 rounded-xl hover:from-blue-500 hover:to-sky-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center">
                <Link to="/request-demo" className="mr-2">Request a Demo</Link>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
              <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              How It Works
            </button>
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 delay-300">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-sky-600 rounded-xl opacity-20 animate-pulse"></div>
            <img 
              src="/device.jpg"
              alt="Smart retail device"
              className="relative z-10 w-full rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              AI Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
