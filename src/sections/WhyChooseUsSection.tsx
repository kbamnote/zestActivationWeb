import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CheckCircle2, 
  Lightbulb, 
  Globe, 
  Users2, 
  Wallet, 
  Cpu 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(card,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-navy-800/50 rounded-2xl p-6 lg:p-8 border border-white/5 
                 hover:bg-navy-800 hover:border-orange/30 transition-all duration-500"
    >
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/20 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Icon with animation */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center
                        group-hover:bg-orange/20 group-hover:scale-110 transition-all duration-300">
          <div className="text-orange">{icon}</div>
        </div>
        {/* Pulse effect */}
        <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-orange/20 animate-ping opacity-0 group-hover:opacity-100" 
             style={{ animationDuration: '2s' }} />
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-white text-xl mb-3 group-hover:text-orange transition-colors">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;

    if (!section || !header) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(header.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'End-to-End Execution',
      description: 'From initial concept to final wrap-up, we handle every detail so you can focus on your guests and objectives.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Creative Concept Design',
      description: 'Our creative team brings fresh, innovative ideas that align with your brand and captivate your audience.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'PAN India Operations',
      description: 'With presence in major cities across India, we deliver consistent quality wherever your event takes place.'
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: 'Professional Event Crew',
      description: 'Our experienced team of event professionals ensures flawless execution with attention to every detail.'
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: 'Budget Optimization',
      description: 'We maximize your investment, delivering exceptional events that meet your goals without exceeding your budget.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Technology Integration',
      description: 'Cutting-edge AV, lighting, and digital solutions that elevate your event to the next level.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-navy-900 z-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-[8vw]">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-sm tracking-[0.18em] text-orange uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl xl:text-5xl mb-6">
            The Zest Advantage
          </h2>
          <p className="text-white/60 text-base lg:text-lg">
            What sets us apart in the world of corporate event management
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
