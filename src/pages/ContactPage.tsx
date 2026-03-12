import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo('.header-content > *',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
            );

            // Contact Info Animation
            if (infoRef.current) {
                gsap.fromTo(infoRef.current.querySelectorAll('.info-item'),
                    { x: -50, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
                        scrollTrigger: { trigger: infoRef.current, start: 'top 80%' }
                    }
                );
            }

            // Form Animation
            if (formRef.current) {
                gsap.fromTo(formRef.current,
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                        scrollTrigger: { trigger: formRef.current, start: 'top 85%' }
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-navy-900 text-white selection:bg-orange selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section ref={headerRef} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 bg-navy-800 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 noise-overlay pointer-events-none" />
                <div className="absolute left-0 top-0 w-1/2 h-full opacity-10 blur-[100px] pointer-events-none bg-orange" />

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 header-content">
                    <span className="font-accent text-orange text-sm tracking-[0.2em] uppercase mb-4 block">Get In Touch</span>
                    <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
                        Let's <span className="text-gradient">Connect.</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                        Ready to plan your next major corporate milestone? Our team of experiential experts is here to turn your vision into reality.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 lg:items-start">

                    {/* Contact Info */}
                    <div ref={infoRef} className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-heading font-bold mb-4">Contact Information</h2>
                            <p className="text-white/70 text-base leading-relaxed">
                                Ready to plan your next major corporate milestone? Our team of experiential experts is here to turn your vision into reality.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="text-xl font-heading font-bold text-orange">Our Offices</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Main Office - Nagpur */}
                                <div className="info-item flex gap-4 group">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-orange transition-colors">
                                        <MapPin className="w-5 h-5 text-orange" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-heading font-bold text-sm mb-1">Main Office</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">1st Floor Mohota Complex<br />Above State Bank Of India<br />Katol Road, Chhaoni Rd<br />Nagpur, Maharashtra 440013</p>
                                    </div>
                                </div>
                            
                                {/* Head Office - Nagpur */}
                                <div className="info-item flex gap-4 group">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-orange transition-colors">
                                        <MapPin className="w-5 h-5 text-orange" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-heading font-bold text-sm mb-1">Head Office</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">5th Floor Mohota Complex<br />Behind State Bank Of<br />Katol Road, Chhaoni Rd<br />Nagpur, Maharashtra 440013</p>
                                    </div>
                                </div>
                            
                                {/* Mumbai Office */}
                                <div className="info-item flex gap-4 group">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-orange transition-colors">
                                        <MapPin className="w-5 h-5 text-orange" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-heading font-bold text-sm mb-1">Mumbai Office</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">Aphrodite, Lodha paradise<br />Majiwada, Thane west</p>
                                    </div>
                                </div>
                            
                                {/* Raipur Office */}
                                <div className="info-item flex gap-4 group">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-orange transition-colors">
                                        <MapPin className="w-5 h-5 text-orange" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-heading font-bold text-sm mb-1">Raipur Office</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">Modern english school<br />Koma khan house</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="info-item flex gap-4 group">
                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-orange transition-colors">
                                    <Phone className="w-5 h-5 text-orange" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-heading font-bold text-sm mb-1">Direct Lines</h4>
                                    <p className="text-white/60 text-xs leading-relaxed">+91 78419 63153 <br />+91 87883 67629</p>
                                </div>
                            </div>

                            <div className="info-item flex gap-4 group">
                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-orange transition-colors">
                                    <Mail className="w-5 h-5 text-orange" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-heading font-bold text-sm mb-1">Email</h4>
                                    <p className="text-white/60 text-xs">info@eliteassociate.in</p>
                                </div>
                            </div>

                            <div className="info-item flex gap-4 group">
                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-orange transition-colors">
                                    <Clock className="w-5 h-5 text-orange" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-heading font-bold text-sm mb-1">Hours</h4>
                                    <p className="text-white/60 text-xs leading-relaxed">Mon-sat: 10:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Direct WhatsApp Button */}
                        <div className="pt-4">
                            <a
                                href="https://wa.me/917841963153"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-[#25D366]/20 hover:scale-105 text-sm"
                            >
                                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div ref={formRef} className="bg-white/5 border border-white/10 p-8 lg:p-12 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 blur-[80px] rounded-full pointer-events-none" />

                        <h3 className="text-3xl font-heading font-bold mb-8">Send an Inquiry</h3>
                        <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">First Name</label>
                                    <input type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Last Name</label>
                                    <input type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Corporate Email</label>
                                <input type="email" required className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Company Name</label>
                                <input type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Event Type</label>
                                <select className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors appearance-none cursor-pointer">
                                    <option className="bg-navy-800">Corporate Conference</option>
                                    <option className="bg-navy-800">Product Launch</option>
                                    <option className="bg-navy-800">Award Night</option>
                                    <option className="bg-navy-800">Brand Activation</option>
                                    <option className="bg-navy-800">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80 font-accent uppercase tracking-wider">Message Details</label>
                                <textarea rows={4} className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors resize-none" placeholder="Est. pax, brief objectives, dates..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-orange hover:bg-orange-dark text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:gap-4">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Embedded Google Map */}
            <section className="h-[400px] lg:h-[600px] bg-navy-800 border-t border-white/5 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5819249540546!2d79.0778028!3d21.169029899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1dfdc6c9b43%3A0x54f93538e6888db3!2sElite%20Associate%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1773314682210!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-70 mix-blend-screen"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
