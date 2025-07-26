import { CheckCircle } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-tech-light-foreground">
                Turning Ideas Into
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Masterpieces
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We bring our passion from tech innovation and the creative services 
                we provide today. Guiding brands to connect their goals and provide 
                outstanding solutions to support their organization.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Custom software solutions tailored to your needs",
                "Cutting-edge technology stack and frameworks",
                "Agile development process with regular updates",
                "24/7 support and maintenance services"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="space-y-6 fade-in-right">
            <div className="relative rounded-2xl overflow-hidden tech-shadow hover-lift">
              <img 
                src={teamImage} 
                alt="Team collaboration" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Creative badge */}
            <div className="bg-primary/10 rounded-2xl p-6 hover-glow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 tech-gradient rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-tech-light-foreground">A CREATIVE DESIGN</div>
                  <div className="text-primary font-bold">AGENCY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;