import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Star, TrendingUp, Users, Globe2, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import CTASection from '../sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        name: "Technology & IT",
        clients: ["Infosys", "Wipro", "TCS", "Tech Mahindra", "HCL", "Cognizant"]
    },
    {
        name: "Banking & Finance",
        clients: ["HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra", "SBI", "Bajaj Finserv"]
    },
    {
        name: "Automotive",
        clients: ["Maruti Suzuki", "Tata Motors", "Mahindra", "Hyundai India", "Hero MotoCorp", "TVS"]
    },
    {
        name: "FMCG & Retail",
        clients: ["ITC", "HUL", "Nestle India", "Britannia", "Dabur", "Godrej"]
    }
];

const testimonials = [
    {
        text: "Zest Activation doesn't just manage events; they engineer experiences. Their deep understanding of the Indian corporate ecosystem makes them our go-to partner for every major launch.",
        author: "Rakesh Sharma",
        role: "Marketing Director, Tech giant",
        image: "/images/testimonial_1.jpg"
    },
    {
        text: "The level of professionalism and the sheer scale they can handle is astounding. Managing a 3000+ delegate conference requires precision, and Zest delivered flawlessly.",
        author: "Sneha Kapoor",
        role: "VP Corporate Communications, Leading Bank",
        image: "/images/testimonial_2.jpg"
    },
    {
        text: "From creative conception to on-ground execution, the Zest team is phenomenal. They brought an unmatched energy and premium quality to our annual awards night.",
        author: "Vikram Malhotra",
        role: "CEO, Retail Chain",
        image: "/images/testimonial_3.jpg"
    }
];

const ClientsPage = () => {
    const [activeIndustry, setActiveIndustry] = useState(0);
    const headerRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const countersRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo('.header-content > *',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
            );

            // Stats Animation
            if (statsRef.current) {
                countersRef.current.forEach((counter) => {
                    if (!counter) return;
                    const target = parseInt(counter.getAttribute('data-target') || '0', 10);

                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        ease: 'power3.out',
                        snap: { innerHTML: 1 },
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: 'top 80%',
                        },
                        onUpdate() {
                            if (counter.innerHTML === target.toString()) {
                                counter.innerHTML = target + '+';
                            }
                        }
                    });
                });
            }

            // Fade up elements
            gsap.utils.toArray('.fade-up').forEach((el: any) => {
                gsap.fromTo(el,
                    { y: 40, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                        scrollTrigger: { trigger: el, start: 'top 85%' }
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-navy-900 text-white selection:bg-orange selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section ref={headerRef} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 bg-navy-800 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 noise-overlay pointer-events-none" />
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 blur-[100px] pointer-events-none bg-orange" />

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 header-content">
                    <span className="font-accent text-orange text-sm tracking-[0.2em] uppercase mb-4 block">Our Partners</span>
                    <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
                        Trusted by <span className="text-gradient">Industry Leaders.</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                        We are proud to be the preferred experiential marketing and event management agency for India's most prestigious corporate brands.
                    </p>
                </div>
            </section>

            {/* Success Metrics */}
            <section ref={statsRef} className="py-20 bg-navy-900 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Users, target: "150", label: "Enterprise Clients" },
                            { icon: TrendingUp, target: "98", label: "Retention Rate (%)" },
                            { icon: Globe2, target: "50", label: "Cities Covered" },
                            { icon: Award, target: "25", label: "Industry Awards" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange/50 transition-colors group">
                                <stat.icon className="w-8 h-8 text-orange mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                <div
                                    ref={el => { countersRef.current[i] = el; }}
                                    data-target={stat.target}
                                    className="text-4xl font-heading font-bold text-white mb-2"
                                >
                                    0
                                </div>
                                <div className="text-xs text-white/50 uppercase tracking-widest font-accent">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Logo Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 fade-up">
                    <h2 className="text-4xl font-heading font-bold mb-4">Industries We Serve</h2>
                    <p className="text-white/60 text-lg">Deep domain expertise across diverse corporate sectors.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 fade-up">
                    {/* Industry Sidebar */}
                    <div className="w-full lg:w-1/4 space-y-2">
                        {industries.map((ind, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndustry(i)}
                                className={`w-full text-left px-6 py-4 rounded-xl font-heading font-bold text-lg transition-all ${activeIndustry === i
                                        ? 'bg-orange text-white shadow-lg shadow-orange/20'
                                        : 'bg-transparent text-white/50 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {ind.name}
                            </button>
                        ))}
                    </div>

                    {/* Logo Grid */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {industries[activeIndustry].clients.map((client, i) => (
                                <div
                                    key={i}
                                    className="aspect-[3/2] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-6 hover:bg-white/10 transition-colors group"
                                >
                                    {/* Placeholder for actual logos - using text for now */}
                                    <span className="font-heading font-bold text-2xl text-white/40 group-hover:text-white/80 transition-colors tracking-wide">
                                        {client}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Testimonial Section */}
            <section className="py-24 bg-navy-800 relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="fade-up">
                            <span className="font-accent text-orange text-sm tracking-widest uppercase mb-4 block">Client Spotlight</span>
                            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Hear from the leaders.</h2>
                            <p className="text-xl text-white/70 leading-relaxed mb-8">
                                Discover why India's top CMOs and HR Heads trust Zest Activation to deliver their most critical corporate events year after year.
                            </p>
                            <button className="flex items-center gap-3 text-orange font-bold uppercase tracking-widest text-sm hover:text-white transition-colors group">
                                <span className="w-10 h-10 rounded-full border border-orange flex items-center justify-center group-hover:bg-orange transition-colors">
                                    <Play className="w-4 h-4 ml-1" />
                                </span>
                                Watch More Stories
                            </button>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer fade-up shadow-2xl shadow-orange/10">
                            <img
                                src="/images/indian_video_testimonial.png"
                                alt="Client Video Testimonial"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-orange/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-white ml-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24 bg-navy-900 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 fade-up">
                    <h2 className="text-4xl font-heading font-bold mb-4">Words of Appreciation</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((test, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl fade-up relative">
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-orange fill-orange" />)}
                            </div>
                            <p className="text-white/80 leading-relaxed italic mb-8 relative z-10">"{test.text}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <img src={test.image} alt={test.author} className="w-12 h-12 rounded-full object-cover border-2 border-orange/50" />
                                <div>
                                    <div className="font-bold font-heading">{test.author}</div>
                                    <div className="text-xs text-white/50">{test.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default ClientsPage;
