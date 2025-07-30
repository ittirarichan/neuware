import { ExternalLink, Github } from "lucide-react";
import techAbstract from "@/assets/tech-abstract.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: techAbstract,
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Healthcare App",
      description: "Mobile health monitoring application with real-time data",
      image: techAbstract,
      tags: ["React Native", "Firebase", "ML"]
    },
    {
      title: "FinTech Dashboard",
      description: "Advanced analytics dashboard for financial institutions",
      image: techAbstract,
      tags: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
      title: "AI Chat Platform",
      description: "Intelligent chatbot platform with natural language processing",
      image: techAbstract,
      tags: ["Next.js", "OpenAI", "WebSocket"]
    },
    {
      title: "IoT Management System",
      description: "Comprehensive IoT device management and monitoring platform",
      image: techAbstract,
      tags: ["Angular", "AWS IoT", "Redis"]
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support",
      image: techAbstract,
      tags: ["React", "Web3", "Solidity"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-tech-light-foreground bounce-in">
            Our Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in-scale stagger-2">
            Explore our portfolio of innovative digital solutions that have helped 
            businesses transform and grow in the digital landscape.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative rounded-xl overflow-hidden tech-shadow hover-lift tech-transition magnetic touch-feedback fade-in-scale stagger-${index % 6 + 1}`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 tech-transition parallax"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 tech-transition"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 tech-transition">
                  <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 tech-transition bounce-in touch-feedback">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 tech-transition bounce-in stagger-1 touch-feedback">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-tech-light">
                <h3 className="text-xl font-semibold text-tech-light-foreground mb-2 group-hover:text-primary tech-transition fade-in-up">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 fade-in-up stagger-1">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 bg-primary/10 text-primary text-xs rounded-full magnetic touch-feedback fade-in-scale stagger-${tagIndex + 1}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;