import { Button } from "@/components/ui/button";
import { Star, Play, ArrowRight, Code, Smartphone, Globe, Palette } from "lucide-react";
import heroImage from "@/assets/web_design.avif";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional developer working" 
          className="w-full h-full object-cover object-center blur-sm"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Code className="absolute top-20 left-10 text-white/30 w-8 h-8 float-pulse stagger-1" />
        <Smartphone className="absolute top-32 right-20 text-white/30 w-6 h-6 float-delayed stagger-2" />
        <Globe className="absolute bottom-40 left-20 text-white/30 w-7 h-7 float stagger-3" />
        <Palette className="absolute bottom-60 right-10 text-white/30 w-6 h-6 float-pulse stagger-4" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full float stagger-5"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full float-delayed stagger-6"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <div className="space-y-8 fade-in-up">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  <span className="block">Building Tomorrow's</span>
                  <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-white">
                    Digital Solutions Today
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  A passionate startup transforming innovative ideas into powerful digital experiences 
                  that help businesses grow and succeed in the modern world.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button variant="hero" size="lg" className="group bounce-in touch-feedback magnetic">
                  Let's Build
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroSecondary" size="lg" className="group bounce-in touch-feedback magnetic stagger-1">
                  <Play className="w-5 h-5" />
                  Start Collaboration
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            {/* <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white">2000+</div>
              <div className="text-sm sm:text-base text-white/80">Happy Clients</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
