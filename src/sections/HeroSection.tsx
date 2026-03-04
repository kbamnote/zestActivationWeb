import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const cta = ctaRef.current;
    const eyebrow = eyebrowRef.current;
    const spotlight = spotlightRef.current;
    const bg = bgRef.current;

    if (!section || !headline || !subheadline || !cta || !eyebrow || !spotlight || !bg) return;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(bg, { scale: 1.08, opacity: 0 });
      gsap.set(spotlight, { opacity: 0 });
      gsap.set(eyebrow, { y: -12, opacity: 0 });
      gsap.set(headline, { y: 40, opacity: 0 });
      gsap.set(subheadline, { y: 18, opacity: 0 });
      gsap.set(cta, { y: 18, opacity: 0 });

      // Entrance animation timeline
      const entranceTl = gsap.timeline({ delay: 0.3 });

      entranceTl
        .to(bg, { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' })
        .to(spotlight, { opacity: 1, duration: 0.6 }, '-=0.8')
        .to(eyebrow, { y: 0, opacity: 1, duration: 0.5 }, '-=0.5')
        .to(headline, { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }, '-=0.3')
        .to(subheadline, { y: 0, opacity: 1, duration: 0.6 }, '-=0.5')
        .to(cta, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.to([headline, subheadline, cta, eyebrow], {
              opacity: 1, x: 0, y: 0, scale: 1, duration: 0.3
            });
            gsap.to(spotlight, { opacity: 1, duration: 0.3 });
            gsap.to(bg, { scale: 1, duration: 0.3 });
          }
        }
      });

      // SETTLE (0% - 70%): Hold position
      // EXIT (70% - 100%): Elements exit
      scrollTl
        .fromTo(headline,
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(subheadline,
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo(cta,
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.74
        )
        .fromTo(eyebrow,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(spotlight,
          { opacity: 1 },
          { opacity: 0.08, ease: 'power2.in' },
          0.7
        )
        .fromTo(bg,
          { scale: 1 },
          { scale: 1.06, ease: 'power2.out' },
          0.7
        );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-10"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/images/hero_conference_hall.jpg"
          alt="Corporate Event"
          className="w-full h-full object-cover animate-kenburns origin-center"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-900/60" />

      {/* Orange Spotlight Overlay */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(255,106,0,0.22) 0%, rgba(255,106,0,0) 55%)',
          willChange: 'opacity'
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-[8vw]">
        {/* Eyebrow */}
        <span
          ref={eyebrowRef}
          className="font-accent text-xs lg:text-sm tracking-[0.18em] text-white/70 uppercase mb-6"
          style={{ willChange: 'transform, opacity' }}
        >
          Corporate Events & Activations
        </span>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl leading-[0.95] tracking-tight mb-8"
          style={{ willChange: 'transform, opacity' }}
        >
          We create corporate experiences that{' '}
          <span className="text-gradient">inspire.</span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-white/80 text-base lg:text-lg max-w-xl leading-relaxed mb-10"
          style={{ willChange: 'transform, opacity' }}
        >
          From product launches to award nights—end-to-end production, bold creative,
          and flawless execution across India.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-wrap gap-4"
          style={{ willChange: 'transform, opacity' }}
        >
          <Link to="/signup">
            <Button
              size="lg"
              className="bg-orange hover:bg-orange-dark text-white px-8 py-6 text-base font-semibold rounded-xl group transition-all duration-300 hover:shadow-glow"
            >
              Explore our work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300"
            >
              Start a project
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator & Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex flex-col items-center gap-2 text-white/50 mb-8">
          <span className="text-xs font-accent tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>

        {/* Awards & Stats Strip */}
        <div className="w-full bg-navy-900/40 backdrop-blur-md border-t border-white/5 flex flex-wrap justify-between items-center px-6 lg:px-[8vw] py-4">
          <div className="flex items-center gap-4 hidden md:flex">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-900 bg-orange/20 flex items-center justify-center">
                  <span className="text-[10px] text-orange font-bold">★</span>
                </div>
              ))}
            </div>
            <div className="text-xs text-white/70">
              <span className="font-bold text-white block">Award Winning</span>
              Event Management
            </div>
          </div>
          <div className="flex justify-around w-full md:w-auto gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-2xl font-bold font-heading text-white">500+</div>
              <div className="text-[10px] text-orange uppercase tracking-wider font-accent">Events Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-heading text-white">50+</div>
              <div className="text-[10px] text-orange uppercase tracking-wider font-accent">Cities Pan India</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-heading text-white">10Y+</div>
              <div className="text-[10px] text-orange uppercase tracking-wider font-accent">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
