import { Wind } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Vayu Sahayog</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              India's National Air Quality Nexus connecting governance, industry, and citizens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Portals</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/governance" className="hover:text-white transition-colors">National Governance</Link></li>
              <li><Link to="/regulator" className="hover:text-white transition-colors">State & City Regulator</Link></li>
              <li><Link to="/industry" className="hover:text-white transition-colors">Industrial Portal</Link></li>
              <li><Link to="/citizen" className="hover:text-white transition-colors">Citizen Portal</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Materials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">NCAP Initiative</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CPCB Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div>
              © {currentYear} Central Pollution Control Board. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span>Powered by Satellite Data Downscaling • Real-time Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
