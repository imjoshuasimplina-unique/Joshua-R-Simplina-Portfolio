import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollAnimations from '@/components/ScrollAnimations';

const Index = () => {
  return (
    <>
      <ScrollAnimations />
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
