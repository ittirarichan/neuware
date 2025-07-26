const Stats = () => {
  const stats = [
    { number: "15+", label: "Companies", sublabel: "Trusted by industry leaders" },
    { number: "1+", label: "Year Exp.", sublabel: "Proven track record" },
    { number: "800+", label: "Hours of Digital", sublabel: "Creative excellence" },
    { number: "150M+", label: "in Tracked Revenue", sublabel: "Measurable growth" }
  ];

  return (
    <section className="tech-dark py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center space-y-2 slide-in-bottom hover-glow rounded-xl p-6 tech-transition magnetic touch-feedback stagger-${index + 1}`}
            >
              <div className="text-4xl lg:text-5xl font-bold text-white count-up">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-300 fade-in-up">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400 fade-in-up stagger-1">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;