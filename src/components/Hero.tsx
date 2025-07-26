import { Button } from "@/components/ui/button";
import { Star, Play, ArrowRight, Code, Smartphone, Globe, Palette } from "lucide-react";
import heroImage from "@/assets/hero-developer.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-10 text-primary/30 w-8 h-8 float-pulse stagger-1" />
        <Smartphone className="absolute top-32 right-20 text-primary/30 w-6 h-6 float-delayed stagger-2" />
        <Globe className="absolute bottom-40 left-20 text-primary/30 w-7 h-7 float stagger-3" />
        <Palette className="absolute bottom-60 right-10 text-primary/30 w-6 h-6 float-pulse stagger-4" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/20 rounded-full float stagger-5"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full float-delayed stagger-6"></div>
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-left">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3 fade-in-scale stagger-1">
              <div className="w-10 h-10 tech-gradient rounded-lg flex items-center justify-center glow-pulse">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">NeuWare</span>
            </div>

            {/* Experience Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full magnetic stagger-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 text-primary fill-current stagger-${i + 1}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-primary">1+ Year Experience</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 stagger-3">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight fade-in-up">
                <span className="inline-block">Empowering</span> <span className="inline-block text-wave">Brands</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block fade-in-rotate">
                  Through Creative Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg fade-in-up stagger-4">
                From web development to branding, we transform ideas into impactful digital experiences 
                that drive growth and deliver exceptional results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 stagger-5">
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

          {/* Right Image */}
          <div className="relative fade-in-right">
            <div className="relative rounded-3xl overflow-hidden tech-shadow-glow">
              <img 
                src={heroImage} 
                alt="Professional developer working" 
                className="w-full h-[600px] object-cover hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-sm rounded-xl p-4 tech-shadow hover-glow">
              <div className="text-2xl font-bold text-primary">2000+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;