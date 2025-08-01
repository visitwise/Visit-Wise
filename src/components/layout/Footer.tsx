import React, { useEffect, useState } from 'react';
import { footerColumns } from '../../data/footer';
import Container from '../ui/Container';
import api from '../../axios';

const Footer: React.FC = () => {
  const [config, setConfig] = useState<any>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await api.get('/config');
        const configData = res.data?.result?.[0]; // ✅ Extract from result array
        setConfig(configData);
      } catch (err) {
        console.error('Failed to fetch config:', err);
      }
    };

    fetchConfig();
  }, []);

  const social = config?.socialMedia?.[0] || {};

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
<Container>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
    {/* Branding column */}
    <div className="lg:col-span-2">
      <a href="#" className="inline-block mb-4">
        <img
          src={config?.logo?.[0]?.Footerlogo || "/Logo Website.png"}
          alt="VisitWise"
          className="h-14"
        />
      </a>
      <p className="text-white/70 mb-6 max-w-md">
        Our mission is to help retailers create personalized shopping experiences
        that drive customer loyalty and increase revenue.
      </p>
    </div>

    {/* Footer links */}
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

    {/* ✅ Move Social Media to its own column */}
    <div>
      <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
      <ul className="space-y-3">
        {social.facebook && (
          <li>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline"
            >
              Facebook
            </a>
          </li>
        )}
        {social.twitter && (
          <li>
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline"
            >
              Twitter
            </a>
          </li>
        )}
        {social.instagram && (
          <li>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline"
            >
              Instagram
            </a>
          </li>
        )}
        {social.linkedin && (
          <li>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline"
            >
              LinkedIn
            </a>
          </li>
        )}
        {social.youtube && (
          <li>
            <a
              href={social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline"
            >
              YouTube
            </a>
          </li>
        )}
        {social.pinterest && (
          <li>
            <a
              href={social.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline"
            >
              Pinterest
            </a>
          </li>
        )}
      </ul>
    </div>
  </div>

  {/* Footer bottom */}
  <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
    <p>{config?.copyrightMessage || `© ${currentYear} VisitWise. All rights reserved.`}</p>
  </div>
</Container>

    </footer>
  );
};

export default Footer;
