import { useState, useEffect } from "react";
import api from "../../axios";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  const [config, setConfig] = useState<any>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await api.get("/config");
        const configData = res.data?.result?.[0]; // ✅ first item
        setConfig(configData);
      } catch (err) {
        console.error("Failed to fetch config:", err);
      }
    };

    fetchConfig();
  }, []);

  const social = config?.socialMedia?.[0] || {};
  const copyright =
    config?.copyrightMessage || `© ${currentYear} VisitWise. All Rights Reserved.`;

  return (
    <footer
      id="contact"
      className="py-16 px-6 bg-slate-900 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/Icon.png"
                  alt="VisitWise Logo"
                  className="w-8 h-8"
                />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                {config?.appName || "VisitWise"}
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Our mission is to help retailers create personalized shopping
              experiences that drive customer loyalty and increase revenue.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-4 text-blue-400">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
  <h4 className="font-bold mb-4 text-sky-400">Legal</h4>
  <ul className="space-y-2 text-gray-400">
    <li>
      <Link
        to="/legal/privacy"
        className="hover:text-white transition-colors duration-300"
      >
        Privacy Policy
      </Link>
    </li>
    <li>
      <Link
        to="/legal/terms"
        className="hover:text-white transition-colors duration-300"
      >
        Terms of Service
      </Link>
    </li>
    <li>
      <Link
        to="/legal/refund"
        className="hover:text-white transition-colors duration-300"
      >
        Refund
      </Link>
    </li>
    <li>
      <Link
        to="/legal/shipping"
        className="hover:text-white transition-colors duration-300"
      >
        shipping
      </Link>
    </li>
    <li>
      <Link
        to="/legal/about"
        className="hover:text-white transition-colors duration-300"
      >
        about
      </Link>
    </li>
  </ul>
</div>

          {/* Social Links from API */}
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Follow Us</h4>
            <ul className="space-y-2 text-gray-400">
              {social?.facebook && (
                <li>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Facebook
                  </a>
                </li>
              )}
              {social?.twitter && (
                <li>
                  <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Twitter
                  </a>
                </li>
              )}
              {social?.instagram && (
                <li>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {social?.linkedin && (
                <li>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {social?.youtube && (
                <li>
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    YouTube
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
