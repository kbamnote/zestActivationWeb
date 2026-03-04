import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content.children,
        { y: 40, opacity: 0 },
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 z-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/stage_beams_wide.jpg"
          alt="Event Stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/80" />
        
        {/* Orange spotlight */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,106,0,0.15) 0%, rgba(255,106,0,0) 50%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative w-full px-6 lg:px-[8vw]">
        <div 
          ref={contentRef}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-accent text-sm tracking-[0.18em] text-orange uppercase mb-6 block">
            Let's Create Together
          </span>
          
          <h2 className="font-heading font-bold text-white text-3xl lg:text-5xl xl:text-6xl mb-6 leading-tight">
            Ready to Plan Your Next{' '}
            <span className="text-gradient">Corporate Event?</span>
          </h2>
          
          <p className="text-white/70 text-base lg:text-lg max-w-2xl mx-auto mb-10">
            From concept to execution, we'll bring your vision to life with creativity, 
            precision, and passion. Let's create an experience that inspires.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-orange hover:bg-orange-dark text-white px-8 py-6 text-base font-semibold rounded-xl group animate-pulse-glow"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="mailto:hello@zestactivation.in">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-8 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange">✓</span>
                Free Consultation
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange">✓</span>
                Custom Quotes
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange">✓</span>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
