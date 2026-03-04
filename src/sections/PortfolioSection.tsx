import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Category = 'all' | 'conferences' | 'awards' | 'activations' | 'exhibitions';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: Category;
  location: string;
}

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: '/images/hero_conference_hall.jpg',
      title: 'Tech Summit 2024',
      category: 'conferences',
      location: 'Mumbai'
    },
    {
      id: 2,
      image: '/images/portfolio_awards.jpg',
      title: 'Excellence Awards Night',
      category: 'awards',
      location: 'Delhi'
    },
    {
      id: 3,
      image: '/images/portfolio_activation.jpg',
      title: 'Brand Launch Activation',
      category: 'activations',
      location: 'Bangalore'
    },
    {
      id: 4,
      image: '/images/mosaic_stage_presentation.jpg',
      title: 'Leadership Conference',
      category: 'conferences',
      location: 'Hyderabad'
    },
    {
      id: 5,
      image: '/images/mosaic_panel_table.jpg',
      title: 'Industry Roundtable',
      category: 'conferences',
      location: 'Chennai'
    },
    {
      id: 6,
      image: '/images/portfolio_launch.jpg',
      title: 'Product Unveiling',
      category: 'activations',
      location: 'Pune'
    },
    {
      id: 7,
      image: '/images/mosaic_crowd_wide.jpg',
      title: 'Annual Gala Dinner',
      category: 'awards',
      location: 'Kolkata'
    },
    {
      id: 8,
      image: '/images/standard_crowd_lighting.jpg',
      title: 'Trade Show Booth',
      category: 'exhibitions',
      location: 'Mumbai'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Work' },
    { key: 'conferences', label: 'Conferences' },
    { key: 'awards', label: 'Award Nights' },
    { key: 'activations', label: 'Activations' },
    { key: 'exhibitions', label: 'Exhibitions' },
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

      // Grid items animation
      const items = grid.querySelectorAll('.portfolio-item');
      items.forEach((item, index) => {
        gsap.fromTo(item,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [filteredItems]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-navy-900 z-20"
    >
      <div className="w-full px-6 lg:px-[8vw]">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <span className="font-accent text-sm tracking-[0.18em] text-orange uppercase mb-4 block">
            Selected Work
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl xl:text-5xl">
              Moments We've Built
            </h2>
            <p className="text-white/60 text-base lg:text-lg max-w-md">
              A showcase of our finest work—lighting, staging, crowd, and detail.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.key
                  ? 'bg-orange text-white'
                  : 'bg-navy-800 text-white/70 hover:bg-navy-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-item group relative rounded-2xl overflow-hidden cursor-pointer
                         ${index === 0 || index === 5 ? 'md:col-span-2 lg:col-span-2' : ''}
                         ${index === 3 ? 'lg:row-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden ${index === 3 ? 'h-full min-h-[400px]' : 'aspect-[4/3]'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent 
                              opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-orange/80 rounded-full text-white text-xs font-medium mb-3 capitalize">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-white text-xl mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
                                flex items-center justify-center opacity-0 group-hover:opacity-100 
                                transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
