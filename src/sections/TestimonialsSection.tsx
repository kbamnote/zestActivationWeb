import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Menon',
      role: 'CMO',
      company: 'Northwind India',
      image: '/images/testimonial_1.jpg',
      quote: 'Zest turned our launch into a moment the industry still talks about. Calm team, bold output, zero surprises on the day. Their attention to detail and creative vision exceeded all our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'VP Marketing',
      company: 'TechVenture Solutions',
      image: '/images/testimonial_2.jpg',
      quote: 'Working with Zest was a game-changer for our annual conference. They understood our vision perfectly and delivered an experience that our attendees are still raving about months later.',
      rating: 5
    },
    {
      id: 3,
      name: 'Anita Sharma',
      role: 'Head of Events',
      company: 'Global Finance Corp',
      image: '/images/testimonial_3.jpg',
      quote: 'The professionalism and creativity Zest brings to every project is unmatched. They have become our go-to partner for all corporate events, from intimate dinners to large-scale conferences.',
      rating: 5
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const carousel = carouselRef.current;

    if (!section || !header || !carousel) return;

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

      gsap.fromTo(carousel,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: carousel,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
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
            Client Testimonials
          </span>
          <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl xl:text-5xl mb-6">
            What Our Clients Say
          </h2>
          <p className="text-white/60 text-base lg:text-lg">
            Hear from the brands we've had the privilege to work with
          </p>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="relative max-w-4xl mx-auto">
          {/* Quote Card */}
          <div className="relative bg-navy-800 rounded-3xl p-8 lg:p-12 border border-white/5 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-orange" />
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange/5 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-lg lg:text-xl leading-relaxed mb-8 min-h-[120px]">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange/30"
                />
                <div>
                  <div className="font-heading font-bold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-white/20 text-white hover:bg-orange hover:border-orange hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-orange w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-white/20 text-white hover:bg-orange hover:border-orange hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
