import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import CTASection from '../sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Conferences', 'Product Launches', 'Award Nights', 'Activations'];

const portfolioData = [
    {
        id: 1,
        title: 'Nexus Auto V8 Launch',
        category: 'Product Launches',
        client: 'Nexus Automotive India',
        image: '/images/portfolio_launch.jpg',
        objective: 'To unveil the new flagship V8 model to 500 top dealers and national media, positioning it as the premium choice in the luxury segment.',
        strategy: 'We designed a 270-degree immersive projection mapping sequence that simulated the car driving through varied Indian terrains, culminating in a dramatic physical reveal using a synchronized kabuki drop and kinetic lighting.',
        outcome: 'Generated 15,000+ PR mentions within 24 hours. The immersive experience resulted in a 40% increase in spot bookings from dealers compared to the previous year.',
        testimonial: {
            text: "The execution was nothing short of cinematic. Zest Activation didn't just launch our car; they created a spectacle that our dealers are still talking about.",
            author: "Rajiv Menon",
            role: "CMO, Nexus Automotive"
        }
    },
    {
        id: 2,
        title: 'Global Tech Leadership Summit',
        category: 'Conferences',
        client: 'Stellar Tech Solutions',
        image: '/images/hero_conference_hall.jpg',
        objective: 'Host a 3-day leadership summit for 1,200 global directors in Bangalore, fostering cross-border collaboration and unveiling the 2030 vision.',
        strategy: 'Managed end-to-end logistics including chartered flights, 5-star accommodations, and a custom-built 100ft curved LED stage. We integrated an RFID-based networking app to facilitate seamless interaction among delegates.',
        outcome: 'Achieved a 98% delegate satisfaction rate. The seamless tech integration led to a record number of cross-departmental initiatives being formed during the summit.',
        testimonial: {
            text: "Managing 1,200 leaders from 40 countries is an operational nightmare, but Zest made it look effortless. Their attention to detail and VIP protocol management is unmatched.",
            author: "Anita Desai",
            role: "VP Human Resources, Stellar Tech"
        }
    },
    {
        id: 3,
        title: 'Excellence Awards 2025',
        category: 'Award Nights',
        client: 'Pinnacle Financial Services',
        image: '/images/indian_award_night.png',
        objective: 'Celebrate the annual achievements of 800 top-performing employees with a highly prestigious, Hollywood-style gala dinner.',
        strategy: 'Transformed a luxury hotel ballroom into a vintage Gatsby-themed arena. Featuring a grand red carpet entrance, paparazzi simulation, live orchestral performances, and a bespoke gourmet dining experience.',
        outcome: 'Substantially boosted employee morale, reflecting in the highest measurable post-event engagement scores in the company’s history.',
        testimonial: {
            text: "The sheer elegance of the evening was breathtaking. Zest Activation knows how to make people feel truly valued and celebrated.",
            author: "Sanjay Gupta",
            role: "CEO, Pinnacle Financial"
        }
    },
    {
        id: 4,
        title: 'Urban Sound Campus Tour',
        category: 'Activations',
        client: 'Urban Sound Audio',
        image: '/images/portfolio_activation.jpg',
        objective: 'Drive brand awareness and product trials for the new noise-canceling headphones among Gen-Z consumers across 15 premium college campuses.',
        strategy: 'Created a mobile "Silent Disco" truck that transformed into an interactive gaming and music experiential zone. We integrated QR-code-based instant discount codes for immediate conversions.',
        outcome: 'Engaged over 45,000 students across 15 cities over 30 days, resulting in a 300% spike in regional online sales during the activation period.',
        testimonial: {
            text: "Zest understood our target audience perfectly. The ground-level energy they brought was phenomenal, directly impacting our bottom line.",
            author: "Karan Johar",
            role: "Marketing Head, Urban Sound"
        }
    }
];

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const heroRef = useRef<HTMLDivElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const filteredProjects = activeCategory === 'All'
        ? portfolioData
        : portfolioData.filter(project => project.category === activeCategory);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo('.hero-content > *',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
            );

            // Filter Animation
            if (filterRef.current) {
                gsap.fromTo(filterRef.current,
                    { y: 30, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
                        scrollTrigger: { trigger: filterRef.current, start: 'top 85%' }
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    // Animate projects on category change
    useEffect(() => {
        if (!projectsRef.current) return;

        gsap.fromTo(projectsRef.current.querySelectorAll('.project-card'),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
        );
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-navy-900 text-white selection:bg-orange selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 bg-navy-800 border-b border-white/5">
                <div className="absolute inset-0 noise-overlay pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center relative z-10 hero-content">
                    <span className="font-accent text-orange text-sm tracking-[0.2em] uppercase mb-4 block">Our Work</span>
                    <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
                        Case <span className="text-gradient">Studies.</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Explore how we've transformed corporate objectives into unforgettable, immersive experiences for India's leading enterprises.
                    </p>
                </div>
            </section>

            {/* Portfolio Content */}
            <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">

                {/* Category Filter */}
                <div ref={filterRef} className="flex flex-wrap items-center justify-center gap-4 mb-20">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-orange text-white shadow-lg shadow-orange/20'
                                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div ref={projectsRef} className="space-y-32">
                    {filteredProjects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={project.id} className={`project-card flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16`}>

                                {/* Image Side */}
                                <div className="flex-1 relative group w-full lg:w-1/2">
                                    <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                                        <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-6 left-6 z-20 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest font-accent">
                                            {project.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 flex flex-col justify-center w-full lg:w-1/2">
                                    <span className="text-orange font-bold text-lg mb-2 block">{project.client}</span>
                                    <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-10">{project.title}</h2>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-white/40 font-bold uppercase tracking-widest text-sm mb-3 font-accent">The Objective</h4>
                                            <p className="text-lg text-white/80 leading-relaxed border-l-2 border-white/10 pl-6 py-1">
                                                {project.objective}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-white/40 font-bold uppercase tracking-widest text-sm mb-3 font-accent">The Strategy</h4>
                                            <p className="text-lg text-white/80 leading-relaxed border-l-2 border-orange pl-6 py-1">
                                                {project.strategy}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-white/40 font-bold uppercase tracking-widest text-sm mb-3 font-accent">The Outcome</h4>
                                            <p className="text-lg text-white/80 leading-relaxed border-l-2 border-green-500/50 pl-6 py-1">
                                                {project.outcome}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Testimonial Box */}
                                    <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 relative">
                                        <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                                        <p className="text-lg italic text-white/90 mb-6 relative z-10">"{project.testimonial.text}"</p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center">
                                                <span className="font-bold text-white text-sm">{project.testimonial.author.charAt(0)}</span>
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{project.testimonial.author}</div>
                                                <div className="text-sm text-white/50">{project.testimonial.role}</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default PortfolioPage;
