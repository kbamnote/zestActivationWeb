import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, 
  Rocket, 
  Award, 
  Puzzle, 
  Megaphone, 
  Store, 
  Monitor,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(card,
      { y: 50, opacity: 0 },
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
      className="group relative bg-navy-800 rounded-2xl p-6 lg:p-8 border border-white/5 
                 hover:border-orange/40 transition-all duration-500 
                 hover:-translate-y-2 hover:shadow-card"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6
                      group-hover:bg-orange/20 transition-colors duration-300">
        <div className="text-orange">{icon}</div>
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-white text-xl mb-3 group-hover:text-orange transition-colors">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Learn More Link */}
      <button className="flex items-center gap-2 text-orange text-sm font-medium 
                         opacity-0 group-hover:opacity-100 transform translate-y-2 
                         group-hover:translate-y-0 transition-all duration-300">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/5 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Corporate Conferences',
      description: 'Seamlessly executed conferences that foster knowledge sharing, networking, and brand positioning for your organization.'
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: 'Product Launch Events',
      description: 'Create buzz and excitement around your new products with impactful launch events that leave lasting impressions.'
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: 'Annual Day & Award Nights',
      description: 'Celebrate achievements and milestones with elegantly orchestrated award ceremonies that honor excellence.'
    },
    {
      icon: <Puzzle className="w-7 h-7" />,
      title: 'Team Building Activities',
      description: 'Strengthen team bonds through engaging, thoughtfully designed activities that boost morale and collaboration.'
    },
    {
      icon: <Megaphone className="w-7 h-7" />,
      title: 'Brand Activation Campaigns',
      description: 'Bring your brand to life with immersive experiences that connect with your audience on a deeper level.'
    },
    {
      icon: <Store className="w-7 h-7" />,
      title: 'Exhibition & Trade Shows',
      description: 'Stand out at industry events with captivating booth designs and flawless execution that drives engagement.'
    },
    {
      icon: <Monitor className="w-7 h-7" />,
      title: 'Virtual & Hybrid Events',
      description: 'Extend your reach with professionally produced virtual and hybrid events that deliver seamless experiences.'
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-navy-900 z-20"
    >
      <div className="w-full px-6 lg:px-[8vw]">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-sm tracking-[0.18em] text-orange uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl xl:text-5xl mb-6">
            Strategy to Screen—Built for Live Impact
          </h2>
          <p className="text-white/60 text-base lg:text-lg">
            Comprehensive event solutions tailored to your brand's unique needs and objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-orange hover:bg-orange-dark text-white px-8 py-6 text-base font-semibold rounded-xl group"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
