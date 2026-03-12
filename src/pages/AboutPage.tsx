import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Shield, Briefcase, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import CTASection from '../sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const leadershipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo('.hero-content > *',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
            );

            // Section Fade-ins
            const sections = [storyRef.current, timelineRef.current, leadershipRef.current];
            sections.forEach(section => {
                if (!section) return;
                gsap.fromTo(section.querySelectorAll('.fade-up'),
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                        }
                    }
                );
            });

            // Timeline Animation
            const timelineItems = gsap.utils.toArray<HTMLElement>('.timeline-item');
            timelineItems.forEach((item) => {
                gsap.fromTo(item,
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                        }
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    const timelineData = [
        { year: '2009', title: 'The Foundation', desc: 'Founded with a vision to redefine event management in India.' },
        { year: '2015', title: 'Expansion Phase', desc: 'Opened multiple offices across Maharashtra, MP, and Chhattisgarh.' },
        { year: '2018', title: '100+ Employees', desc: 'Grew into a 100+ strong team of event professionals.' },
        { year: '2022', title: '₹100+ Crore Milestone', desc: 'Achieved billing strength of over ₹100 Crore across events and OOH.' },
        { year: '2026', title: 'Industry Leadership', desc: 'Recognized as India\'s largest and most reputable event management company.' },
    ];

    const leadershipTeam = [
        { name: 'Rahul Sharma', role: 'Founder & CEO', image: '/images/testimonial_1.jpg' },
        { name: 'Priya Patel', role: 'Head of Operations', image: '/images/testimonial_2.jpg' },
        { name: 'Vikram Singh', role: 'Creative Director', image: '/images/testimonial_3.jpg' },
    ];

    return (
        <div className="min-h-screen bg-navy-900 text-white selection:bg-orange selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="hero-content flex-1 z-10">
                        <span className="font-accent text-orange text-sm tracking-[0.2em] uppercase mb-4 block">Our Story</span>
                        <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                            We are <span className="text-gradient">Zest.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
                            Zest Activation is the largest and most reputable event management company in India, 
                            known for our professionalism and exceptional service. With over 15 years of experience, 
                            we have established ourselves as a premier event management company.
                        </p>
                        <p className="text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
                            Our team of talented professionals specializes in Above The Line (ATL) and Below The Line (BTL) 
                            activities, catering to all aspects of event requirements. We pride ourselves on exhibition planning, 
                            event production, and seamless execution across sports events, concerts, government events, 
                            medical conferences, corporate exhibitions, and promotional campaigns.
                        </p>
                    </div>
                    <div className="flex-1 w-full relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-orange/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                        <img
                            src="/images/indian_team_planning.png"
                            alt="Zest Team Planning"
                            className="w-full h-full object-cover animate-kenburns scale-110"
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision (Glassmorphism Cards) */}
            <section className="py-20 bg-navy-800 relative">
                <div className="absolute inset-0 noise-overlay" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-8 relative z-10">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl hover:border-orange/50 transition-colors">
                        <Target className="w-12 h-12 text-orange mb-6" />
                        <h3 className="text-3xl font-heading font-bold mb-4">Our Mission</h3>
                        <p className="text-white/70 leading-relaxed text-lg">
                            Learn from every event we participate in, take ownership of client campaigns, and deliver results that generate repeat business. We aim to achieve top-of-mind recall and become synonymous with customer delight.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl hover:border-orange/50 transition-colors">
                        <Lightbulb className="w-12 h-12 text-orange mb-6" />
                        <h3 className="text-3xl font-heading font-bold mb-4">Our Vision</h3>
                        <p className="text-white/70 leading-relaxed text-lg">
                            With a view to change the dynamics of the industry, we aim to be seen as a solution provider achieving sustainable growth. We nurture a dedicated, creative, and energetic workforce to set benchmarks in the industry globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section ref={storyRef} className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden fade-up">
                        <img
                            src="/images/indian_boardroom_meeting.png"
                            alt="Boardroom Strategy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Built on Trust. Driven by Excellence.</h2>
                        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                            <p>
                                What started in 2009 as a passionate team has now grown into a 100+ strong team across 8 offices 
                                spanning Maharashtra, Madhya Pradesh, Chhattisgarh, Delhi (NCR), Telangana, Rajasthan, and Gujarat.
                            </p>
                            <p>
                                We understand the Indian market deeply. Our network and presence across major cities including 
                                Mumbai, Ahmedabad, Hyderabad, Nagpur, Raipur, Indore, Bhopal, and Noida enables us to deliver 
                                flawless events pan-India.
                            </p>
                            <p>
                                With a billing strength of over ₹100+ Crore (₹65+ Crore in Events & OOH, ₹35+ Crore in Post Production), 
                                Zest Activation has become synonymous with reliability, creativity, and premium quality execution.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div className="border-l-2 border-orange pl-6">
                                <div className="text-4xl font-heading font-bold text-white mb-2">100+</div>
                                <div className="text-sm text-white/50 uppercase tracking-widest font-accent">Employees</div>
                            </div>
                            <div className="border-l-2 border-orange pl-6">
                                <div className="text-4xl font-heading font-bold text-white mb-2">8</div>
                                <div className="text-sm text-white/50 uppercase tracking-widest font-accent">Offices Pan India</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline of Growth */}
            <section ref={timelineRef} className="py-24 bg-navy-800">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16 fade-up">
                        <span className="font-accent text-orange tracking-widest uppercase text-sm mb-4 block">Our Journey</span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold">A Decade of Excellence</h2>
                    </div>

                    <div className="relative border-l border-white/20 ml-4 lg:ml-8">
                        {timelineData.map((item, index) => (
                            <div key={index} className="timeline-item mb-12 ml-8 relative">
                                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-orange border-4 border-navy-800" />
                                <div className="text-orange font-accent font-bold text-xl mb-1">{item.year}</div>
                                <h3 className="text-2xl font-heading font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-white/60 text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Philosophy */}
            <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="text-center mb-16 fade-up">
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Our Work Philosophy</h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">The core principles that guide every project we undertake.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 fade-up">
                    {[
                        { icon: Shield, title: 'Uncompromising Quality', desc: 'No shortcuts. We use the best technology, the finest materials, and the most rigorous QA processes.' },
                        { icon: Briefcase, title: 'Business-First Approach', desc: 'We align our creative ideation directly with your ROI metrics and corporate objectives.' },
                        { icon: Award, title: 'Flawless Execution', desc: 'With a dedicated project manager for every event, we ensure precision down to the very last detail.' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-orange/20 rounded-full flex items-center justify-center mb-6">
                                <item.icon className="w-8 h-8 text-orange" />
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                            <p className="text-white/60">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Leadership Team */}
            <section ref={leadershipRef} className="py-24 bg-navy-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16 fade-up">
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Leadership Team</h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">The visionaries steering Zest towards global excellence.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {leadershipTeam.map((member, i) => (
                            <div key={i} className="fade-up group">
                                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-navy-900">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-center">{member.name}</h3>
                                <p className="text-orange font-accent text-center mt-2 uppercase tracking-widest text-sm">{member.role}</p>
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

export default AboutPage;
