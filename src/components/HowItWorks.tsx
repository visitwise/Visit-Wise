
import { Eye, BarChart3, Bell, PlayCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-br from-slate-900/80 to-sky-900/80">
      <div className="max-w-7xl mx-auto">
        <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 text-4xl lg:text-5xl font-bold text-center mb-4">
          How VisitWise Works
        </h2>
        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-300 text-center mb-16">
          Three simple steps to transform your customer experience
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Eye className="w-12 h-12" />,
              step: "1",
              title: "Capture",
              description: "A small smart device at your store entrance captures walk-in visitors.",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: <BarChart3 className="w-12 h-12" />,
              step: "2", 
              title: "Analyze",
              description: "Our AI system instantly identifies if the customer is new or returning and estimates basic demographics like age and gender.",
              gradient: "from-sky-500 to-blue-500"
            },
            {
              icon: <Bell className="w-12 h-12" />,
              step: "3",
              title: "Notify",
              description: "Your sales staff receive real-time customer insights on their mobile app — helping them offer a personal, welcoming experience.",
              gradient: "from-cyan-500 to-teal-500"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8  duration-1000 group hover:scale-105 transform transition-all"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/5">
                  {item.step}
                </div>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 rounded-xl hover:from-blue-500 hover:to-sky-500  transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center mx-auto">
            <PlayCircle className="w-5 h-5 mr-2" />
            Watch the 1-Minute Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
