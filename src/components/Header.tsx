import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section: string) => {
    setIsMenuOpen(false);

    if (section === "home") {
      // Always go to homepage top
      navigate("/", { state: { section: "home" } });
      return;
    }

    if (location.pathname === "/") {
      // Already on homepage → smooth scroll
      const element = document.getElementById(section);
      if (element) {
        const header = document.querySelector("header");
        const headerHeight = header ? header.getBoundingClientRect().height : 80;
        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      // Navigate to homepage and scroll via state
      navigate("/", { state: { section } });
    }
  };

  const navLinks = [
    { label: "Home", section: "home" },
    { label: "Features", section: "features" },
    { label: "Benefits", section: "benefits" },
  ];

  return (
    <header className="relative z-50 px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Logo Website.png"
            alt="VisitWise Logo"
            className="w-36 h-12"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, section }) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop Get Started */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg hover:from-blue-500 hover:to-sky-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-white/20 p-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {label}
              </button>
            ))}
            <Link to="/contact">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg hover:from-blue-500 hover:to-sky-500 transition-all duration-300"
              >
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
