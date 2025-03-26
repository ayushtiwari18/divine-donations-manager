
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px' 
      }
    );

    const aboutElement = aboutRef.current;
    if (aboutElement) {
      const animatedElements = aboutElement.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (aboutElement) {
        const animatedElements = aboutElement.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <Container id="about" ref={aboutRef} className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              About Dutt Mandir
            </h2>
            
            <p className="text-muted-foreground mb-4">
              Dutt Mandir is more than just a temple; it's a spiritual sanctuary where 
              tradition meets modernity. Our management system is designed to honor 
              these traditions while embracing the advantages of technology.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Our mission is to simplify administrative tasks, allowing temple 
              authorities to focus on spiritual guidance and community service. 
              By streamlining donor management and facilitating online donations, 
              we're helping temples thrive in the digital age.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-primary">
                  Built with modern technology for reliability and performance
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-primary">
                  Designed with user experience as the primary focus
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-primary">
                  Regularly updated with new features based on community feedback
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Button className="hover-lift">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="animate-on-scroll relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-xl md:text-2xl font-medium">Temple Image</h3>
                <p className="text-muted-foreground mt-2">Visualization of the temple</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-video rounded-xl glass-dark bg-gradient-to-br from-primary/10 to-accent/5 z-10 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-sm font-medium">Community Events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
