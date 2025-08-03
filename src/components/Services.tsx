import { Smartphone, Globe, Palette, Cloud, ArrowRight, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "Native iOS and Android apps with cutting-edge features and seamless user experiences.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Web Application Development", 
      description: "Responsive web applications built with modern frameworks and optimized performance.",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Backend & Cloud Integration",
      description: "Scalable backend solutions with cloud infrastructure for enterprise-grade applications.",
      gradient: "from-orange-500/20 to-yellow-500/20"
    }
  ];

  return (
    <section className="bg-background py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white bounce-in">
            Premium <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto fade-in-scale stagger-2">
            Crafting exceptional digital experiences with cutting-edge technology 
            and innovative design solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            // const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 
                  hover:border-primary/30 cursor-pointer overflow-hidden
                  transform transition-all duration-500 ease-out
                  hover:scale-105 hover:-translate-y-2 hover:rotate-1
                  fade-in-scale stagger-${index + 1}`}
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                
                {/* Subtle Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{
                       background: 'linear-gradient(135deg, rgba(78, 66, 200, 0.3) 0%, transparent 50%, rgba(78, 66, 200, 0.1) 100%)',
                       padding: '1px',
                       mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       maskComposite: 'xor'
                     }}>
                </div>

                {/* Content */}
                <div className="relative z-10">

                  
                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary 
                      transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 
                      transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Arrow with Enhanced Animation */}
                  <div className="flex justify-end pt-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0
                      transition-all duration-500 ease-out group-hover:bg-primary/20">
                      <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 
                        transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-4 right-4 w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 right-8 w-0.5 h-0.5 bg-primary/80 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up stagger-5">
          <p className="text-gray-400 mb-6">Ready to transform your ideas into reality?</p>
          <button className="px-8 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 
            rounded-full text-primary font-medium transition-all duration-300 
            hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
