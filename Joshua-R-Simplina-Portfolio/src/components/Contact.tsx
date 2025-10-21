import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your testing needs? Let's connect and explore how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in-left">
            <div className="glass rounded-xl p-8 glow-hover">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass border-white/20 focus:border-primary resize-none"
                    placeholder="Tell me about your project or testing requirements..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 glow-hover"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="/joshuasimplinaresume.pdf"
                  download="joshuasimplinaresume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 
                           glass border border-primary/50 rounded-lg
                           hover:bg-primary/10 transition-all duration-300 font-medium
                           transform hover:scale-105"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="fade-in-right">
            <div className="space-y-8">
              <div className="glass rounded-xl p-8 glow-hover">
                <h3 className="text-2xl font-semibold text-primary mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in discussing new opportunities, 
                  collaborating on testing projects, or sharing insights about 
                  quality assurance practices.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:im.joshuasimplina@gmail.com"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary 
                             transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center 
                                  group-hover:bg-primary/30 transition-colors">
                      <Mail size={18} />
                    </div>
                    <span>im.joshuasimplina@gmail.com</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/joshua-simplina-978011348/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary 
                             transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center 
                                  group-hover:bg-primary/30 transition-colors">
                      <Linkedin size={18} />
                    </div>
                    <span>LinkedIn Profile</span>
                  </a>
                  
                  <a
                    href="https://github.com/imjoshuasimplina-unique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary 
                             transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center 
                                  group-hover:bg-primary/30 transition-colors">
                      <Github size={18} />
                    </div>
                    <span>GitHub Portfolio</span>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;