import Hero from "../components/Hero";
import ProblemStatement from "../components/ProblemStatement";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";

const Home: React.FC = () => {

  return (
    <div>
      <Hero />             {/* Hero section */}
      <ProblemStatement /> {/* Features section */}
      <HowItWorks  />       {/* Benefits section */}
      <Benefits  />         {/* Contact section */}
    </div>
  );
};

export default Home;
