import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Joshua R. Simplina</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Software QA Tester
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-justify tracking-normal">

            Passionate QA professional with 4 years of hands-on experience in manual testing, 
            growing automation skills with Selenium and Playwright, and comprehensive API testing 
            expertise using Postman. Dedicated to delivering exceptional software quality.
          </p>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                   animate-bounce text-primary hover:text-primary/80 transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;