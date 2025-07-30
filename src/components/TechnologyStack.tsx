import React, { useState, useMemo } from 'react';

interface TechItem {
  name: string;
  icon: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
}

const TechnologyStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: Category[] = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'database', name: 'Database' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'design', name: 'Design' },
    { id: 'language', name: 'Languages' },
    { id: 'cms', name: 'CMS' }
  ];

  const memoizedTechStack = useMemo((): TechItem[] => {
    const techStack: TechItem[] = [
      { 
        name: 'React', 
        icon: '/images/index/react-original.svg',
        category: 'frontend'
      },
      { 
        name: 'Next.js', 
        icon: '/images/index/nextjs-original.svg',
        category: 'frontend'
      },
      { 
        name: 'TypeScript', 
        icon: '/images/index/typescript-original.svg',
        category: 'language'
      },
      { 
        name: 'Node.js', 
        icon: '/images/index/nodejs-original.svg',
        category: 'backend'
      },
      { 
        name: 'Python', 
        icon: '/images/index/python-original.svg',
        category: 'language'
      },
      { 
        name: 'AWS', 
        icon: '/images/index/aws.svg',
        category: 'cloud'
      },
      { 
        name: 'Flutter', 
        icon: '/images/index/flutter-original.svg',
        category: 'mobile'
      },
      { 
        name: 'Figma', 
        icon: '/images/index/figma-original.svg',
        category: 'design'
      },
      { 
        name: 'WordPress', 
        icon: '/images/index/wordpress-original.svg',
        category: 'cms'
      },
      { 
        name: 'MongoDB', 
        icon: '/images/index/mongodb-original.svg',
        category: 'database'
      },
      { 
        name: 'MySQL', 
        icon: '/images/index/mysql-original.svg',
        category: 'database'
      },
      { 
        name: 'Firebase', 
        icon: '/images/index/firebase-plain.svg',
        category: 'backend'
      }
    ];
    return techStack;
  }, []);

  const filteredTechStack = useMemo((): TechItem[] => {
    if (activeCategory === 'all') {
      return memoizedTechStack;
    }
    return memoizedTechStack.filter(tech => tech.category === activeCategory);
  }, [memoizedTechStack, activeCategory]);

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <span className="text-primary font-semibold tracking-wider uppercase">
            POWERFUL TECHNOLOGIES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white bounce-in">
            Our <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto fade-in-scale stagger-2">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions for our clients
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in-up stagger-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium tech-transition magnetic touch-feedback ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md tech-glow'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredTechStack.map((tech, index) => (
            <div
              key={`tech-${tech.name}-${index}`}
              className={`flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover-glow hover-lift tech-transition group cursor-pointer magnetic touch-feedback fade-in-scale stagger-${index % 6 + 1}`}
            >
              <div className="relative mb-4 p-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 tech-transition">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="h-12 w-12 object-contain tech-transition hover:scale-110 hover:rotate-[360deg] duration-[800ms] ease-in-out"
                />
              </div>
              <span className="font-medium text-center text-white group-hover:text-primary tech-transition">
                {tech.name}
              </span>
              <span className="text-xs text-gray-400 mt-1 capitalize">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;

