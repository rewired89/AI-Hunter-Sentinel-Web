// src/components/Footer.tsx
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/aihs-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border text-card-foreground"> {/* was bg-card */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="AI Hunter Sentinel"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
                AI Hunter Sentinel
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Advanced AI-powered cybersecurity solutions protecting your digital assets
              with cutting-edge threat detection and real-time monitoring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-muted-foreground hover:text-primary transition-colors">
                  Subscription
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                info@aihuntersentinel.com
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Miami, FL
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AI Hunter Sentinel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
