import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}

const Counter = ({ end, suffix, label, isVisible }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, isVisible]);

  return (
    <div ref={countRef} className="text-center">
      <div className="font-heading font-bold text-4xl lg:text-5xl text-orange mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm lg:text-base">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const stats = statsRef.current;

    if (!section || !content || !image || !stats) return;

    const ctx = gsap.context(() => {
      // Content animation
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

      // Image animation
      gsap.fromTo(image,
        { x: -60, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats animation with counter trigger
      ScrollTrigger.create({
        trigger: stats,
        start: 'top 80%',
        onEnter: () => setCountersVisible(true),
        once: true
      });

      gsap.fromTo(stats.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stats,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const stats = [
    { end: 250, suffix: '+', label: 'Corporate Events' },
    { end: 100, suffix: '+', label: 'Brand Activations' },
    { end: 50, suffix: '+', label: 'Corporate Clients' },
    { end: 10, suffix: '+', label: 'Cities Across India' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-navy-900 z-20"
    >
      <div className="w-full px-6 lg:px-[8vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src="/images/about_team.jpg"
              alt="Zest Activation Team"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-orange/90 backdrop-blur-sm rounded-xl px-6 py-4">
              <div className="font-heading font-bold text-white text-2xl">10+</div>
              <div className="text-white/80 text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <span className="font-accent text-sm tracking-[0.18em] text-orange uppercase">
              About Zest Activation
            </span>
            
            <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl xl:text-5xl leading-tight">
              India's Premier Corporate Event Management Partner
            </h2>
            
            <p className="text-white/70 text-base lg:text-lg leading-relaxed">
              At Zest Activation, we transform corporate visions into extraordinary experiences. 
              With over a decade of expertise, we've partnered with India's leading brands to 
              deliver events that captivate, engage, and inspire.
            </p>
            
            <p className="text-white/70 text-base lg:text-lg leading-relaxed">
              From intimate board meetings to grand product launches, our team brings 
              creativity, precision, and passion to every project. We understand the 
              pulse of Indian corporate culture and blend it with global standards 
              of excellence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                  <span className="text-orange text-xl">✓</span>
                </div>
                <div>
                  <div className="text-white font-semibold">End-to-End Service</div>
                  <div className="text-white/60 text-sm">From concept to execution</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                  <span className="text-orange text-xl">✓</span>
                </div>
                <div>
                  <div className="text-white font-semibold">PAN India Presence</div>
                  <div className="text-white/60 text-sm">Major cities covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Counter */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
        >
          {stats.map((stat, index) => (
            <Counter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={countersVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
