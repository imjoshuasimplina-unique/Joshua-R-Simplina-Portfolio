import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Bot, Code2, Layers, Briefcase } from 'lucide-react';

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skills = [
    {
      icon: CheckCircle2,
      title: "Manual Testing",
      description: "Comprehensive manual testing strategies and methodologies",
      technologies: ["Test Case Creation", "Test Execution", "Bug Reporting", "Exploratory Testing"]
    },
    {
      icon: Bot,
      title: "Automation Testing",
      description: "Modern test automation frameworks and tools",
      technologies: ["Selenium WebDriver", "Playwright", "Test Scripts", "Framework Design"]
    },
    {
      icon: Code2,
      title: "API Testing",
      description: "RESTful API testing and validation with Postman",
      technologies: ["Postman", "GET/POST/PUT/DELETE", "Assertions", "Collections"]
    },
    {
      icon: Layers,
      title: "Testing Types",
      description: "Various testing methodologies and approaches",
      technologies: ["Functional", "Regression", "Smoke", "Integration", "UAT", "Exploratory"]
    },
    {
      icon: Briefcase,
      title: "Bug Tracking & Processes",
      description: "Project management and software development lifecycle",
      technologies: ["JIRA", "Redmine", "SDLC", "STLC", "Agile/Scrum"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive testing expertise across multiple platforms and technologies
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass rounded-xl p-8 glow-hover max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                        <skill.icon size={32} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{skill.title}</h3>
                      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {skill.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {skill.technologies.map((tech, techIndex) => (
                        <div 
                          key={techIndex}
                          className="glass rounded-lg p-3 text-center text-sm font-medium 
                                   hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 
                     glass rounded-full p-2 text-primary hover:bg-primary/10 
                     transition-colors glow-hover"
            aria-label="Previous skill"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 
                     glass rounded-full p-2 text-primary hover:bg-primary/10 
                     transition-colors glow-hover"
            aria-label="Next skill"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to skill ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;