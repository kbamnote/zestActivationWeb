import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, CheckCircle2, Award, Zap, Users, Globe, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import CTASection from '../sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        id: 'event-planning',
        title: 'Event Planning',
        icon: Users,
        image: '/images/hero_conference_hall.jpg',
        desc: 'Planning and execution of corporate events, product launches, exhibitions, brand activations, promotional campaigns, and large-scale public events.',
        features: ['Corporate Events', 'Product Launches', 'Exhibitions', 'Brand Activations', 'Promotional Campaigns', 'Public Events']
    },
    {
        id: 'sports-management',
        title: 'Sports Management',
        icon: Zap,
        image: '/images/mosaic_crowd_wide.jpg',
        desc: 'Complete sports event management including tournaments, marathons, sports leagues, athlete events, and sports promotions.',
        features: ['Tournaments', 'Marathons & Walkathons', 'Sports Leagues', 'Athlete Events', 'Sports Promotions', 'IPL Meet & Greet']
    },
    {
        id: 'outdoor-solutions',
        title: 'Outdoor Solutions',
        icon: Globe,
        image: '/images/stage_beams_wide.jpg',
        desc: 'Outdoor advertising and branding solutions including hoardings, billboards, road shows, outdoor promotions, and campaign visibility setups.',
        features: ['Hoardings & Billboards', 'Road Shows', 'Outdoor Promotions', 'Campaign Visibility', 'OOH Advertising', 'Street Branding']
    },
    {
        id: 'stall-designing',
        title: 'Stall Designing',
        icon: Building2,
        image: '/images/precision_stage_beams.jpg',
        desc: 'Creative design and fabrication of exhibition stalls, booths, product display setups, and trade show installations.',
        features: ['Exhibition Stalls', 'Booth Design', 'Product Displays', 'Trade Show Setups', 'Fabrication', 'Custom Installations']
    },
    {
        id: 'rural-marketing',
        title: 'Rural Marketing',
        icon: Award,
        image: '/images/mosaic_audience_closeup.jpg',
        desc: 'Rural marketing campaigns and brand outreach programs through activation vans, field promotions, and grassroots marketing initiatives.',
        features: ['Activation Vans', 'Field Promotions', 'Grassroots Marketing', 'Rural Outreach', 'On-Ground Campaigns', 'Village Melas']
    },
    {
        id: 'content-solutions',
        title: 'Content Solutions',
        icon: Users,
        image: '/images/indian_video_testimonial.png',
        desc: 'Development of promotional content including marketing creatives, event visuals, video production, branding materials, and campaign storytelling.',
        features: ['Marketing Creatives', 'Event Visuals', 'Video Production', 'Branding Materials', 'Campaign Storytelling', 'Content Strategy']
    },
    {
        id: 'innovation-technology',
        title: 'Innovation Technology',
        icon: Zap,
        image: '/images/indian_corporate_stage_setup.png',
        desc: 'Integration of modern event technology such as LED walls, interactive displays, digital installations, projection mapping, and immersive experiences.',
        features: ['LED Walls', 'Interactive Displays', 'Digital Installations', 'Projection Mapping', 'Immersive Experiences', 'AR/VR Integration']
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        icon: Globe,
        image: '/images/indian_blog_tech.png',
        desc: 'Online marketing strategies including social media campaigns, digital advertising, influencer promotions, and brand engagement across digital platforms.',
        features: ['Social Media Campaigns', 'Digital Advertising', 'Influencer Promotions', 'Brand Engagement', 'Content Marketing', 'SEO/SEM']
    },
    {
        id: 'brand-activations',
        title: 'Brand Activations',
        icon: Users,
        image: '/images/portfolio_activation.jpg',
        desc: 'On-ground brand activation campaigns designed to engage audiences, increase brand awareness, and create memorable customer experiences.',
        features: ['On-Ground Activations', 'Audience Engagement', 'Brand Awareness', 'Customer Experiences', 'Mall Activations', 'Corporate Park Events']
    }
];

const processSteps = [
    { num: '01', title: 'Consultation', desc: 'Understanding your objectives, audience, and ROI metrics.' },
    { num: '02', title: 'Ideation', desc: 'Crafting the event theme, stage design, and engagement strategy.' },
    { num: '03', title: 'Planning', desc: 'Detailed logistics, vendor management, and technical mapping.' },
    { num: '04', title: 'Execution', desc: 'Flawless on-ground production run by our expert shadow teams.' },
];

const faqs = [
    { q: "What scale of events does Zest Activation handle?", a: "We specialize in mid-to-large scale B2B events, typically ranging from 100 to 5000+ attendees." },
    { q: "Do you operate PAN India?", a: "Yes, we execute events across all major tier 1 and tier 2 cities in India." },
    { q: "Can you handle international offsites?", a: "Absolutely. We have strong vendor networks in Dubai, Singapore, and Southeast Asia." },
    { q: "How much lead time do you need?", a: "While we've pulled off miracles in 2 weeks, we recommend 8-12 weeks for large-scale conferences or launches." }
];

const ServicesPage = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const processRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo('.hero-text > *',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
            );

            // Scroll Down Indicator
            gsap.to('.scroll-indicator', {
                y: 10, repeat: -1, yoyo: true, duration: 1.5, ease: 'power1.inOut'
            });

            // Process Steps Animation
            if (processRef.current) {
                gsap.fromTo(processRef.current.querySelectorAll('.process-card'),
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.6, stagger: 0.15,
                        scrollTrigger: { trigger: processRef.current, start: 'top 80%' }
                    }
                );
            }

            // Services Stagger Animation
            if (servicesRef.current) {
                const serviceItems = servicesRef.current.querySelectorAll('.service-item');
                serviceItems.forEach((item, index) => {
                    const isEven = index % 2 === 0;
                    gsap.fromTo(item,
                        { x: isEven ? -50 : 50, opacity: 0 },
                        {
                            x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                            scrollTrigger: { trigger: item, start: 'top 85%' }
                        }
                    );
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-navy-900 text-white selection:bg-orange selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/indian_corporate_stage_setup.png"
                        alt="Premium Stage Event"
                        className="w-full h-full object-cover animate-kenburns origin-center opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/40 to-navy-900" />
                </div>

                <div className="relative z-10 text-center px-6 lg:px-12 max-w-5xl mx-auto hero-text">
                    <span className="font-accent text-orange text-sm xl:text-base tracking-[0.2em] uppercase mb-6 block">What We Do</span>
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
                        Premium <span className="text-gradient">Experiences.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
                        From highly confidential boardroom strategies to massive arena product launches, we engineer every detail.
                    </p>
                    <a href="#all-services" className="inline-block">
                        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors mx-auto scroll-indicator cursor-pointer">
                            <ChevronDown className="w-6 h-6 text-orange" />
                        </div>
                    </a>
                </div>
            </section>

            {/* Services List Section */}
            <section id="all-services" ref={servicesRef} className="py-24 bg-navy-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <span className="font-accent text-orange tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">OUR SERVICES</h2>
                        <p className="text-xl text-white/60">Comprehensive event solutions tailored to your brand's unique needs.</p>
                    </div>

                    <div className="space-y-32">
                        {servicesData.map((service, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={service.id} className={`service-item flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                                    <div className="flex-1 w-full relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
                                        <div className="absolute inset-0 bg-orange/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                                            <service.icon className="w-8 h-8 text-orange" />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-6">{service.title}</h3>
                                        <p className="text-lg text-white/70 leading-relaxed mb-8">{service.desc}</p>

                                        <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-orange shrink-0" />
                                                    <span className="text-white/80">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button className="bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
                                            Request Proposal
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Website Link */}
                    <div className="text-center mt-20 pt-12 border-t border-white/10">
                        <a 
                            href="http://www.maverickactivations.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block text-orange hover:text-orange-light text-lg font-semibold transition-colors"
                        >
                            www.maverickactivations.com
                        </a>
                    </div>
                </div>
            </section>

            {/* The Zest Process */}
            <section ref={processRef} className="py-24 bg-navy-800 relative border-y border-white/5">
                <div className="absolute inset-0 noise-overlay" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <span className="font-accent text-orange tracking-widest uppercase text-sm mb-4 block">Methodology</span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold">The Process</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, i) => (
                            <div key={i} className="process-card bg-navy-900 border border-white/10 p-8 rounded-2xl hover:border-orange/50 transition-colors relative overflow-hidden group">
                                <div className="absolute -right-4 -top-4 text-9xl font-heading font-bold text-white/[0.03] group-hover:text-orange/[0.05] transition-colors pointer-events-none">
                                    {step.num}
                                </div>
                                <div className="text-3xl font-heading font-bold text-orange mb-6">{step.num}.</div>
                                <h3 className="text-xl font-heading font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-white/60">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-navy-900">
                <div className="max-w-3xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-bold">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                                <p className="text-white/60 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
};

export default ServicesPage;
