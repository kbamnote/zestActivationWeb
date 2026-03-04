import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Cpu, Factory, Landmark, Rocket, ShoppingBag, Smartphone, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const clients = [
    { name: 'TechVenture', icon: <Cpu className="w-8 h-8" />, category: 'Technology' },
    { name: 'Global Finance', icon: <Landmark className="w-8 h-8" />, category: 'Banking' },
    { name: 'IndiMart', icon: <ShoppingBag className="w-8 h-8" />, category: 'Retail' },
    { name: 'AutoTech India', icon: <Truck className="w-8 h-8" />, category: 'Automotive' },
    { name: 'StartUp Hub', icon: <Rocket className="w-8 h-8" />, category: 'Startup' },
    { name: 'SteelWorks', icon: <Factory className="w-8 h-8" />, category: 'Manufacturing' },
    { name: 'MobileFirst', icon: <Smartphone className="w-8 h-8" />, category: 'Telecom' },
    { name: 'BuildCorp', icon: <Building2 className="w-8 h-8" />, category: 'Real Estate' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

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

      const items = grid.querySelectorAll('.client-logo');
      gsap.fromTo(items,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-navy-900 z-20"
    >
      <div className="w-full px-6 lg:px-[8vw]">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-sm tracking-[0.18em] text-orange uppercase mb-4 block">
            Trusted By
          </span>
          <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl xl:text-5xl mb-6">
            Teams That Move Fast
          </h2>
          <p className="text-white/60 text-base lg:text-lg">
            Enterprise, startups, and institutions—across India and APAC
          </p>
        </div>

        {/* Client Logos Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-logo group relative bg-navy-800/50 rounded-2xl p-6 lg:p-8 
                         border border-white/5 hover:border-orange/30 hover:bg-navy-800
                         transition-all duration-500 flex flex-col items-center justify-center gap-4
                         cursor-pointer"
            >
              {/* Icon */}
              <div className="text-white/50 group-hover:text-orange transition-colors duration-300">
                {client.icon}
              </div>
              
              {/* Company Name */}
              <div className="text-center">
                <div className="font-heading font-semibold text-white group-hover:text-orange transition-colors">
                  {client.name}
                </div>
                <div className="text-white/40 text-xs mt-1">
                  {client.category}
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/10 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading font-bold text-3xl lg:text-4xl text-orange mb-2">500+</div>
              <div className="text-white/60 text-sm">Events Delivered</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl lg:text-4xl text-orange mb-2">98%</div>
              <div className="text-white/60 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl lg:text-4xl text-orange mb-2">50+</div>
              <div className="text-white/60 text-sm">Corporate Clients</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl lg:text-4xl text-orange mb-2">10+</div>
              <div className="text-white/60 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
