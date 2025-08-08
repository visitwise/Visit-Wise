
import { Heart, TrendingUp, ShoppingBag, Shield, Zap, Users } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 text-4xl lg:text-5xl font-bold text-center mb-16">
          Why VisitWise?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-10 h-10" />,
              title: "Stronger Relationships",
              description: "Greet customers personally without awkward questions.",
              gradient: "from-red-500 to-pink-500"
            },
            {
              icon: <TrendingUp className="w-10 h-10" />,
              title: "Higher Repeat Visits", 
              description: "Recognize and reward loyal customers instantly.",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              icon: <ShoppingBag className="w-10 h-10" />,
              title: "Smarter Sales",
              description: "Offer timely discounts, upsells, and better service.",
              gradient: "from-blue-500 to-indigo-500"
            },
            {
              icon: <Shield className="w-10 h-10" />,
              title: "Privacy First",
              description: "No mobile numbers or personal data needed to greet better.",
              gradient: "from-sky-500 to-blue-500"
            },
            {
              icon: <Zap className="w-10 h-10" />,
              title: "Easy Setup",
              description: "Install and go — Wi-Fi based and non-intrusive.",
              gradient: "from-yellow-500 to-orange-500"
            },
            {
              icon: <Users className="w-10 h-10" />,
              title: "Team Collaboration",
              description: "Share customer insights across your entire team.",
              gradient: "from-cyan-500 to-teal-500"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group hover:scale-105 transform "
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
