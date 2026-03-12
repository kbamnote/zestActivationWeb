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
      title: 'Event Planning',
      description: 'End-to-end event planning and execution for corporate conferences, product launches, and award ceremonies.'
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: 'Sports Management',
      description: 'Comprehensive sports event management including marathons, walkathons, IPL meets, and Commonwealth Games events.'
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: 'Stall Designing',
      description: 'Creative exhibition stall design, fabrication, and setup for trade shows and expos across India.'
    },
    {
      icon: <Puzzle className="w-7 h-7" />,
      title: 'Rural Marketing',
      description: 'Strategic rural marketing campaigns and on-ground activations to connect with tier-3 markets effectively.'
    },
    {
      icon: <Megaphone className="w-7 h-7" />,
      title: 'Content Solutions',
      description: 'Creative content development for events including scripting, storytelling, and brand narrative creation.'
    },
    {
      icon: <Monitor className="w-7 h-7" />,
      title: 'Innovation & Technology',
      description: 'Cutting-edge technology integration for immersive event experiences and digital engagement solutions.'
    },
    {
      icon: <Store className="w-7 h-7" />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to amplify event reach and drive audience engagement.'
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Brand Activations',
      description: 'Impactful brand activation campaigns that create meaningful connections between brands and consumers.'
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: 'Outdoor Solutions',
      description: 'OOH advertising and outdoor event solutions with strategic placement and creative execution.'
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
            Comprehensive Event Solutions
          </h2>
          <p className="text-white/60 text-base lg:text-lg">
            From concept to execution—we deliver creativity, innovation, and flawless results.
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
