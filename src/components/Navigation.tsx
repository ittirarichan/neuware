import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -12 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed z-50 transition-all duration-300 mx-auto mt-4 left-0 right-0 
          w-[95%] sm:w-[99%] md:w-[98%] lg:w-[96%] xl:w-[94%] 2xl:w-[92%]
          rounded-xl border-b border-white/10 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-xl transform -translate-y-1' 
            : 'bg-background/70 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="NeuWare Logo" 
                className="h-7 sm:h-8 w-auto"
              />
              <span className="text-xl font-bold text-foreground">NeuWare</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <a 
                    href={link.href} 
                    className="relative py-2 text-sm lg:text-base transition-colors text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="hidden md:flex">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background rounded-lg shadow-lg">
                {navLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    className="block px-3 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-3 pt-2">
                  <Button variant="default" size="sm" className="w-fit">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
