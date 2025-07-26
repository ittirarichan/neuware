import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 tech-gradient rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">NeuWare</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-primary tech-transition">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary tech-transition">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary tech-transition">
              Services
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary tech-transition">
              Portfolio
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary tech-transition">
              Contact
            </a>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted tech-transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-muted-foreground hover:text-primary tech-transition">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary tech-transition">
                About
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary tech-transition">
                Services
              </a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary tech-transition">
                Portfolio
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary tech-transition">
                Contact
              </a>
              <Button variant="default" size="sm" className="w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;