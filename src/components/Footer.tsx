import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="tech-dark pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
          <div className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="NeuWare Logo" 
                className="h-7 sm:h-8 w-auto"
              />
              <span className="text-xl font-bold text-foreground">NeuWare</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A passionate startup building innovative digital solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary tech-transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary tech-transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary tech-transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary tech-transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {[
                "Mobile App Development",
                "Web Applications",
                "UI/UX Design",
                "Backend Development",
                "Cloud Integration"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary tech-transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Our Team",
                "Portfolio",
                "Careers",
                "Contact"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary tech-transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              {[
                "Blog",
                "Case Studies",
                "Documentation",
                "Support",
                "Privacy Policy"
              ].map((item, index) => (
                <li key={index}>
                  {item === "Privacy Policy" ? (
                    <Link to="/privacy-policy" className="text-gray-400 hover:text-primary tech-transition">
                      {item}
                    </Link>
                  ) : (
                    <a href="#" className="text-gray-400 hover:text-primary tech-transition">
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 NeuWare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/terms-of-service" className="text-gray-400 hover:text-primary tech-transition text-sm">
                Terms of Service
              </a>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary tech-transition text-sm">
                Privacy Policy
              </Link>
              <a href="/cookie-policy" className="text-gray-400 hover:text-primary tech-transition text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
