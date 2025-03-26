
import Container from '@/components/ui/Container';
import { useEffect, useRef } from 'react';
import { 
  Users, CreditCard, FileSpreadsheet, Languages, LockKeyhole, BarChart3 
} from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="animate-on-scroll bg-white p-8 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const featuresElement = featuresRef.current;
    if (featuresElement) {
      const animatedElements = featuresElement.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el, i) => {
        // Add staggered delay
        (el as HTMLElement).style.transitionDelay = `${i * 100}ms`;
        observer.observe(el);
      });
    }

    return () => {
      if (featuresElement) {
        const animatedElements = featuresElement.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const features = [
    {
      icon: <Users size={28} />,
      title: "Donor Management",
      description: "Efficiently manage donor details, contributions, and communication history all in one place."
    },
    {
      icon: <CreditCard size={28} />,
      title: "Online Donations",
      description: "Seamlessly accept donations through multiple payment methods including UPI, cards, and net banking."
    },
    {
      icon: <FileSpreadsheet size={28} />,
      title: "Comprehensive Reports",
      description: "Generate detailed financial reports with customizable filters and export options."
    },
    {
      icon: <Languages size={28} />,
      title: "Multilingual Support",
      description: "Engage with your community in their preferred language with full support for English and Hindi."
    },
    {
      icon: <LockKeyhole size={28} />,
      title: "Secure Authentication",
      description: "Role-based access control ensures data security and appropriate permissions for each user."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Analytics Dashboard",
      description: "Visualize donation trends, donor demographics, and other key metrics at a glance."
    }
  ];

  return (
    <Container id="features" ref={featuresRef}>
      <div className="text-center mb-16">
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-medium mb-4">
          Comprehensive Temple Management
        </h2>
        <p className="animate-on-scroll text-lg text-muted-foreground max-w-2xl mx-auto">
          Every feature designed with simplicity and efficiency in mind, 
          helping you focus on what matters most.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Features;
