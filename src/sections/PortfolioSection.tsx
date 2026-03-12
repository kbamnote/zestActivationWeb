import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Category = 'all' | 'corporate' | 'government' | 'academic' | 'public' | 'concerts' | 'sports' | 'exhibitions';

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
    // Corporate & Brand Events
    {
      id: 1,
      image: '/images/indian_corporate_stage_setup.png',
      title: 'Dainik Bhaskar Event – Hotel Sayaji',
      category: 'corporate',
      location: 'Indore | 2025'
    },
    {
      id: 2,
      image: '/images/indian_award_night.png',
      title: 'RADA Auto Expo 2025',
      category: 'exhibitions',
      location: 'Mumbai | 2025'
    },
    {
      id: 3,
      image: '/images/portfolio_launch.jpg',
      title: 'Maruti E Vitara Launch',
      category: 'corporate',
      location: 'Mumbai | 2025'
    },
    {
      id: 4,
      image: '/images/mosaic_stage_presentation.jpg',
      title: 'Naya Swaraj Mera Swaraj – Raipur',
      category: 'corporate',
      location: 'Raipur | 2025'
    },
    {
      id: 5,
      image: '/images/indian_careers_hero.png',
      title: 'Naya Swaraj Mera Swaraj – Ahmedabad',
      category: 'corporate',
      location: 'Ahmedabad | 2025'
    },
    {
      id: 6,
      image: '/images/portfolio_activation.jpg',
      title: 'Naya Swaraj Mera Swaraj – Ooty',
      category: 'corporate',
      location: 'Ooty | 2025'
    },
    {
      id: 7,
      image: '/images/mosaic_crowd_wide.jpg',
      title: 'Naya Swaraj Mera Swaraj – Gujarat',
      category: 'corporate',
      location: 'Gujarat | 2025'
    },
    {
      id: 8,
      image: '/images/precision_stage_beams.jpg',
      title: 'Naya Swaraj Mera Swaraj – Haryana',
      category: 'corporate',
      location: 'Haryana | 2025'
    },
    {
      id: 9,
      image: '/images/indian_boardroom_meeting.png',
      title: 'Naya Swaraj Mera Swaraj – Hyderabad',
      category: 'corporate',
      location: 'Hyderabad | 2025'
    },
    {
      id: 10,
      image: '/images/mosaic_audience_closeup.jpg',
      title: 'Naya Swaraj Mera Swaraj – Karnataka',
      category: 'corporate',
      location: 'Karnataka | 2025'
    },
    {
      id: 11,
      image: '/images/stage_beams_wide.jpg',
      title: 'Naya Swaraj Mera Swaraj – Maharashtra',
      category: 'corporate',
      location: 'Maharashtra | 2025'
    },
    {
      id: 12,
      image: '/images/standard_crowd_lighting.jpg',
      title: 'Naya Swaraj Mera Swaraj – MP',
      category: 'corporate',
      location: 'Madhya Pradesh | 2025'
    },
    {
      id: 13,
      image: '/images/about_team.jpg',
      title: 'Naya Swaraj Mera Swaraj – Pune',
      category: 'corporate',
      location: 'Pune | 2025'
    },
    {
      id: 14,
      image: '/images/hero_conference_hall.jpg',
      title: 'CIPLA Event',
      category: 'corporate',
      location: 'Mumbai | 2025'
    },
    {
      id: 15,
      image: '/images/testimonial_1.jpg',
      title: 'CIPLA Conference',
      category: 'corporate',
      location: 'Hyderabad | 2025'
    },
    
    // Government Events
    {
      id: 16,
      image: '/images/mosaic_panel_table.jpg',
      title: 'International Elephant Day',
      category: 'government',
      location: 'Chhattisgarh | Aug 2024'
    },
    {
      id: 17,
      image: '/images/indian_video_testimonial.png',
      title: 'Defence & Aero Innovation Summit',
      category: 'government',
      location: 'Hyderabad'
    },
    {
      id: 18,
      image: '/images/portfolio_awards.jpg',
      title: 'Dainik Bhaskar Health Awards',
      category: 'government',
      location: 'Chhattisgarh'
    },
    {
      id: 19,
      image: '/images/indian_blog_tech.png',
      title: 'Ek Ped Maa Ke Nam',
      category: 'government',
      location: 'Raipur Vidhansabha'
    },
    {
      id: 20,
      image: '/images/indian_blog_trends.png',
      title: 'Mahatari Niyay Rath',
      category: 'government',
      location: 'Chhattisgarh'
    },
    {
      id: 21,
      image: '/images/indian_team_planning.png',
      title: 'Shri Ram Van Gaman Paripath',
      category: 'government',
      location: 'Chhattisgarh'
    },
    
    // Academic Events
    {
      id: 22,
      image: '/images/stage_backlight_silhouette.jpg',
      title: '13th Convocation – IIM Raipur',
      category: 'academic',
      location: 'Raipur'
    },
    {
      id: 23,
      image: '/images/indian_corporate_hero.png',
      title: 'HNLU Convocation',
      category: 'academic',
      location: 'Raipur'
    },
    {
      id: 24,
      image: '/images/testimonial_2.jpg',
      title: 'Convocation Ceremony – Amarkantak',
      category: 'academic',
      location: 'Amarkantak'
    },
    
    // Public Events
    {
      id: 25,
      image: '/images/testimonial_3.jpg',
      title: 'Millet Carnival',
      category: 'public',
      location: 'Subhash Stadium, Raipur'
    },
    {
      id: 26,
      image: '/images/indian_award_night.png',
      title: 'Shala Pravesh Utsav',
      category: 'public',
      location: 'Chhattisgarh'
    },
    {
      id: 27,
      image: '/images/mosaic_stage_presentation.jpg',
      title: 'School Jatan Yojna',
      category: 'public',
      location: 'Chhattisgarh'
    },
    {
      id: 28,
      image: '/images/precision_stage_beams.jpg',
      title: 'Rajya Utsav - CG Tourism Stall',
      category: 'exhibitions',
      location: 'Chhattisgarh'
    },
    {
      id: 29,
      image: '/images/mosaic_audience_closeup.jpg',
      title: 'Walk a Cause',
      category: 'public',
      location: 'Chhattisgarh'
    },
    
    // Live Concerts
    {
      id: 30,
      image: '/images/stage_beams_wide.jpg',
      title: 'Mohit Chauhan Live Concert',
      category: 'concerts',
      location: 'NIT Raipur'
    },
    {
      id: 31,
      image: '/images/standard_crowd_lighting.jpg',
      title: 'Sunidhi Chauhan Live Concert',
      category: 'concerts',
      location: 'AIIMS Raipur'
    },
    {
      id: 32,
      image: '/images/about_team.jpg',
      title: 'Sonu Nigam Live Concert',
      category: 'concerts',
      location: 'Raipur'
    },
    {
      id: 33,
      image: '/images/hero_conference_hall.jpg',
      title: 'Euphoria Band Concert',
      category: 'concerts',
      location: 'Raipur'
    },
    {
      id: 34,
      image: '/images/testimonial_1.jpg',
      title: 'Amaal Malik Concert',
      category: 'concerts',
      location: 'Raipur'
    },
    
    // Sports Management
    {
      id: 35,
      image: '/images/portfolio_activation.jpg',
      title: 'Commonwealth Games Queen Baton Relay',
      category: 'sports',
      location: 'Chhattisgarh'
    },
    {
      id: 36,
      image: '/images/mosaic_crowd_wide.jpg',
      title: 'Walkathon - Women\'s Day',
      category: 'sports',
      location: 'Bhopal | 25,000+ Participants'
    },
    {
      id: 37,
      image: '/images/indian_blog_tech.png',
      title: 'Marathon Mumbai',
      category: 'sports',
      location: 'Mumbai'
    },
    {
      id: 38,
      image: '/images/indian_blog_trends.png',
      title: 'IPL Players Meet & Greet',
      category: 'sports',
      location: 'Mumbai'
    },
    {
      id: 39,
      image: '/images/mosaic_panel_table.jpg',
      title: '54th Nehru Gold Cup Hockey Tournament',
      category: 'sports',
      location: 'India'
    },
    
    // Conferences
    {
      id: 40,
      image: '/images/indian_boardroom_meeting.png',
      title: 'IU KAN International Conference',
      category: 'corporate',
      location: 'Hyderabad'
    },
    {
      id: 41,
      image: '/images/indian_careers_hero.png',
      title: 'AMASICON Medical Conference',
      category: 'corporate',
      location: 'Hyderabad | 2023'
    },
    
    // Exhibitions & Stall Design
    {
      id: 42,
      image: '/images/stage_backlight_silhouette.jpg',
      title: 'Exhibition Dome Setup',
      category: 'exhibitions',
      location: 'India'
    },
    {
      id: 43,
      image: '/images/indian_corporate_hero.png',
      title: 'Audi Showroom Launch - Quattro Series',
      category: 'corporate',
      location: 'Mumbai'
    },
    {
      id: 44,
      image: '/images/testimonial_2.jpg',
      title: 'Tata Motors Power of 6 Expo',
      category: 'exhibitions',
      location: 'India Tour'
    },
    {
      id: 45,
      image: '/images/testimonial_3.jpg',
      title: 'JR Seamless Stall Design',
      category: 'exhibitions',
      location: 'Mumbai'
    },
    {
      id: 46,
      image: '/images/indian_video_testimonial.png',
      title: 'T-Hub Launch Event',
      category: 'corporate',
      location: 'Hyderabad'
    },
    
    // Award Ceremonies
    {
      id: 47,
      image: '/images/indian_award_night.png',
      title: 'Corporate Award Ceremonies',
      category: 'corporate',
      location: 'Pan India'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Work' },
    { key: 'corporate', label: 'Corporate Events' },
    { key: 'government', label: 'Government Events' },
    { key: 'academic', label: 'Academic Events' },
    { key: 'public', label: 'Public Events' },
    { key: 'concerts', label: 'Concerts' },
    { key: 'sports', label: 'Sports' },
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
            Portfolio
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl xl:text-5xl">
              Our Work
            </h2>
            <p className="text-white/60 text-base lg:text-lg max-w-md">
              Some of the major events, exhibitions, conferences, and campaigns successfully executed by Zest Activation.
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
