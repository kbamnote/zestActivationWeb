import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, MapPin, Clock, ArrowRight, HeartPulse, GraduationCap, Plane, Coffee, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const perks = [
    { icon: HeartPulse, title: 'Health First', desc: 'Comprehensive medical insurance for you and your dependents.' },
    { icon: GraduationCap, title: 'Continuous Learning', desc: 'Sponsorship for industry certifications and skill workshops.' },
    { icon: Plane, title: 'Travel & Exposure', desc: 'Opportunities to travel across India and internationally for major events.' },
    { icon: Coffee, title: 'Dynamic Culture', desc: 'Monthly mixers, fully stocked pantries, and a vibrant workspace.' }
];

const openPositions = [
    {
        id: 1,
        title: 'Senior Event Producer',
        department: 'Production',
        location: 'Mumbai, India',
        type: 'Full-time',
        experience: '5-8 Years'
    },
    {
        id: 2,
        title: 'Client Servicing Director',
        department: 'Account Management',
        location: 'Delhi NCR',
        type: 'Full-time',
        experience: '8+ Years'
    },
    {
        id: 3,
        title: '3D Set Designer',
        department: 'Creative',
        location: 'Bangalore, India',
        type: 'Full-time',
        experience: '3-5 Years'
    },
    {
        id: 4,
        title: 'Marketing & PR Executive',
        department: 'Growth',
        location: 'Mumbai, India',
        type: 'Full-time',
        experience: '1-3 Years'
    }
];

const CareersPage = () => {
    const [selectedRole, setSelectedRole] = useState<number | null>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo('.header-content > *',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
            );

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

    const handleApplyClick = (id: number) => {
        setSelectedRole(id);
        setTimeout(() => {
            const element = document.getElementById('application-form');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white selection:bg-orange selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section ref={headerRef} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 w-full relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group order-2 lg:order-1">
                        <div className="absolute inset-0 bg-orange/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                        <img
                            src="/images/indian_careers_hero.png"
                            alt="Zest Culture"
                            className="w-full h-full object-cover animate-kenburns scale-110"
                        />
                    </div>
                    <div className="header-content flex-1 z-10 order-1 lg:order-2">
                        <span className="font-accent text-orange text-sm tracking-[0.2em] uppercase mb-4 block">Careers</span>
                        <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                            Build the <span className="text-gradient">Extraordinary.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
                            Join India's most dynamic event management agency. We are always looking for passionate creators, meticulous planners, and strategic thinkers.
                        </p>
                        <a href="#openings" className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
                            View Openings <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Values & Perks */}
            <section className="py-24 bg-navy-800 relative border-y border-white/5">
                <div className="absolute inset-0 noise-overlay pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16 fade-up">
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Life at Zest</h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">We work hard to create unforgettable experiences for our clients, but we also ensure our team thrives.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, i) => (
                            <div key={i} className="fade-up bg-white/5 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-14 h-14 bg-orange/20 rounded-full flex items-center justify-center mb-6">
                                    <perk.icon className="w-7 h-7 text-orange" />
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-4">{perk.title}</h3>
                                <p className="text-white/60">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="openings" className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 fade-up">
                    <span className="font-accent text-orange tracking-widest uppercase text-sm mb-4 block">Join the team</span>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Open Positions</h2>
                </div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {openPositions.map((job) => (
                        <div key={job.id} className="fade-up bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-orange/50 transition-colors group">
                            <div>
                                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-orange transition-colors">{job.title}</h3>
                                <div className="flex flex-wrap items-center gap-4 lg:gap-8 text-sm text-white/60">
                                    <span className="flex items-center gap-2 font-accent tracking-wider uppercase"><Briefcase className="w-4 h-4 text-orange" /> {job.department}</span>
                                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange" /> {job.location}</span>
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange" /> {job.type}</span>
                                    <span className="flex items-center gap-2 bg-navy-800 px-3 py-1 rounded-full text-white/80 border border-white/10">{job.experience}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleApplyClick(job.id)}
                                className="w-full md:w-auto bg-white/10 hover:bg-orange text-white px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap"
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Application Form */}
            <section id="application-form" className={`py-24 bg-navy-800 border-t border-white/5 transition-opacity duration-500 ${selectedRole ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                <div className="max-w-3xl mx-auto px-6 lg:px-12">
                    <div className="mb-12">
                        <h2 className="text-3xl font-heading font-bold mb-4">Submit Your Application</h2>
                        {selectedRole ? (
                            <p className="text-orange font-accent uppercase tracking-widest text-sm">
                                Applying for: {openPositions.find(j => j.id === selectedRole)?.title}
                            </p>
                        ) : (
                            <p className="text-white/50">Please select a role above to apply.</p>
                        )}
                    </div>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Application submitted successfully!"); }}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">First Name</label>
                                <input type="text" required disabled={!selectedRole} className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors disabled:opacity-50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Last Name</label>
                                <input type="text" required disabled={!selectedRole} className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors disabled:opacity-50" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Email Address</label>
                                <input type="email" required disabled={!selectedRole} className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors disabled:opacity-50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Phone Number</label>
                                <input type="tel" required disabled={!selectedRole} className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors disabled:opacity-50" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">LinkedIn URL</label>
                            <input type="url" required disabled={!selectedRole} className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors disabled:opacity-50" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Resume / Portfolio Link</label>
                            <input type="url" required disabled={!selectedRole} placeholder="Google Drive, Dropbox, Portfolio Website..." className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors disabled:opacity-50" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Cover Letter (Optional)</label>
                            <textarea disabled={!selectedRole} rows={4} className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors resize-none disabled:opacity-50" />
                        </div>

                        <button
                            type="submit"
                            disabled={!selectedRole}
                            className="w-full bg-orange hover:bg-orange-dark text-white py-4 rounded-xl font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;
