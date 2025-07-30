import { Smartphone, Globe, Palette, Cloud, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps with cutting-edge features and seamless user experiences."
    },
    {
      icon: Globe,
      title: "Web Application Development", 
      description: "Responsive web applications built with modern frameworks and optimized performance."
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions that create intuitive and engaging digital experiences."
    },
    {
      icon: Cloud,
      title: "Backend & Cloud Integration",
      description: "Scalable backend solutions with cloud infrastructure for enterprise-grade applications."
    }
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white bounce-in">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto fade-in-scale stagger-2">
            We offer a range of creative and digital services designed to help 
            your business stand out in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 hover-glow hover-lift tech-transition group cursor-pointer magnetic touch-feedback fade-in-scale stagger-${index + 1}`}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center group-hover:scale-110 tech-transition glow-pulse fade-in-rotate">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary tech-transition fade-in-up">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed fade-in-up stagger-1">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-end slide-in-bottom stagger-2">
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 tech-transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;