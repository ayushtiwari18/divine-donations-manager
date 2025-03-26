
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      const animatedElements = heroElement.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (heroElement) {
        const animatedElements = heroElement.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#f0f9ff,_transparent)]"></div>
      
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <span className="animate-on-scroll inline-block px-4 py-1.5 mb-6 rounded-full border border-border bg-background text-sm text-primary shadow-sm">
          ✨ Modern Temple Management System
        </span>
        
        <h1 className="animate-on-scroll text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-4xl leading-tight">
          Temple management reimagined for the
          <span className="text-gradient"> digital age</span>
        </h1>
        
        <p className="animate-on-scroll mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          An elegant, intuitive platform for temples to manage donors, 
          process online donations, and generate comprehensive reports.
        </p>
        
        <div className="animate-on-scroll mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button size="lg" className="hover-lift px-8 py-6">
            Get Started
            <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="hover-lift px-8 py-6">
            Learn More
          </Button>
        </div>
        
        <div className="animate-on-scroll mt-20 w-full max-w-5xl mx-auto glass rounded-2xl overflow-hidden shadow-lg">
          <div className="aspect-[16/9] bg-gradient-to-br from-accent/20 to-primary/5 flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-xl md:text-2xl font-medium">Dashboard Preview</h3>
              <p className="text-muted-foreground mt-2">Temple management dashboard visualization</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" aria-label="Scroll to features">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary/50"
          >
            <path 
              d="M12 4L12 20M12 20L18 14M12 20L6 14" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
