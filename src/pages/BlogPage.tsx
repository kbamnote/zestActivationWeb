import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User, Clock, ArrowRight, Share2, Twitter, Linkedin, Facebook, MessageSquare, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import CTASection from '../sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
    {
        id: 1,
        title: 'The Future of Corporate Events in India: 2026 Trends',
        category: 'Industry Trends',
        date: 'Oct 15, 2025',
        author: 'Rahul Sharma',
        readTime: '5 min read',
        image: '/images/indian_blog_trends.png',
        excerpt: 'Discover how artificial intelligence and sustainable practices are reshaping the B2B event landscape across Mumbai, Delhi, and Bangalore.',
        content: `
      <p>The Indian corporate event industry is undergoing a massive transformation. As we look towards 2026, the traditional conference format is no longer sufficient to engage modern professionals.</p>
      <h3>1. Hyper-Personalization through AI</h3>
      <p>Gone are the days of generic event itineraries. AI-driven matchmaking apps are now standard in top-tier Indian conferences, curating specific networking opportunities and session recommendations based on attendee LinkedIn profiles and past behavior.</p>
      <h3>2. The Rise of 'Bleisure' in Tier 2 Cities</h3>
      <p>While Mumbai and Delhi remain hubs, companies are increasingly hosting leadership summits in cities like Jaipur, Kochi, and Goa, blending business objectives with premium leisure experiences to combat corporate burnout.</p>
      <h3>3. Immersive Technology over Opulence</h3>
      <p>Budgets are shifting from pure decor opulence to immersive technological experiences. Think AR-guided product tours, 3D projection-mapped stages, and interactive LED kinetic installations that tell a brand's story dynamically.</p>
      <p>At Zest Activation, we are pioneering these trends, ensuring our clients stay ahead of the curve.</p>
    `
    },
    {
        id: 2,
        title: 'How Event Tech is Driving ROI in Brand Activations',
        category: 'Event Technology',
        date: 'Sep 28, 2025',
        author: 'Priya Patel',
        readTime: '6 min read',
        image: '/images/indian_blog_tech.png',
        excerpt: 'From RFID tracking to real-time sentiment analysis, explore the technologies that are finally proving the true ROI of on-ground activations.',
        content: `
      <p>Brand activations have historically relied on vanity metrics like footfall and social media reach. Today, CFOs demand measurable ROI.</p>
      <h3>Quantifiable Engagement</h3>
      <p>We are integrating RFID wristbands and IoT sensors in our activation zones. This allows us to track exactly which product displays a consumer interacted with, for how long, and whether it led to an immediate digital touchpoint.</p>
      <h3>Virtual Reality Showrooms</h3>
      <p>For B2B manufacturing and real estate clients, transporting massive physical products to an exhibition is costly. High-fidelity VR setups allow clients to explore complex machinery or properties in 1:1 scale right from the exhibition floor.</p>
    `
    },
    {
        id: 3,
        title: 'Employee Engagement: The New Corporate Mandate',
        category: 'Corporate Culture',
        date: 'Sep 10, 2025',
        author: 'Vikram Singh',
        readTime: '4 min read',
        image: '/images/about_team.jpg',
        excerpt: 'Why the annual corporate offsite is evolving from a mere vacation into a strategic tool for talent retention and culture building.',
        content: `
      <p>In a highly competitive talent market, the annual corporate offsite has evolved. It is no longer just a 'perk'; it is a strategic retention tool.</p>
      <h3>Purpose-Driven Offsites</h3>
      <p>Employees want more than just a gala dinner. We design offsites that include CSR initiatives, hackathons, and wellness retreats, ensuring the event aligns with the broader values of the workforce.</p>
      <h3>Gamified Team Building</h3>
      <p>Trust falls are out. App-based, city-wide scavenger hunts and collaborative business simulation games are in. These foster real problem-solving skills and genuine camaraderie.</p>
    `
    }
];

const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState<number | null>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to top when post changes
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo('.header-content > *',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );

            // Blog Cards Animation
            if (!selectedPost) {
                gsap.utils.toArray('.blog-card').forEach((card: any, i) => {
                    gsap.fromTo(card,
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                            scrollTrigger: { trigger: card, start: 'top 85%' }
                        }
                    );
                });
            } else {
                // Article view animations
                gsap.fromTo('.article-content > *',
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
                );
            }
        });

        return () => ctx.revert();
    }, [selectedPost]);

    const renderListing = () => (
        <>
            {/* Hero Section */}
            <section ref={headerRef} className="pt-40 pb-20 px-6 lg:px-12 bg-navy-800 border-b border-white/5 relative">
                <div className="absolute inset-0 noise-overlay pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center relative z-10 header-content">
                    <span className="font-accent text-orange text-sm tracking-[0.2em] uppercase mb-4 block">Insights & Thinking</span>
                    <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
                        The Zest <span className="text-gradient">Journal.</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Deep dives into event technology, corporate culture trends, and experiential marketing strategies in India.
                    </p>
                </div>
            </section>

            {/* Featured & Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 mb-20 blog-card cursor-pointer group" onClick={() => setSelectedPost(blogPosts[0].id)}>
                    <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-auto">
                        <img
                            src={blogPosts[0].image}
                            alt={blogPosts[0].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-orange font-bold text-sm tracking-widest uppercase mb-4 block font-accent">{blogPosts[0].category}</span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 group-hover:text-orange transition-colors">{blogPosts[0].title}</h2>
                        <p className="text-lg text-white/70 mb-8 leading-relaxed">{blogPosts[0].excerpt}</p>
                        <div className="flex items-center gap-6 text-white/50 text-sm">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {blogPosts[0].date}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {blogPosts[0].readTime}</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {blogPosts.slice(1).map(post => (
                        <div key={post.id} className="blog-card cursor-pointer group" onClick={() => setSelectedPost(post.id)}>
                            <div className="relative rounded-xl overflow-hidden aspect-video mb-6">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <span className="text-orange font-bold text-xs tracking-widest uppercase mb-3 block font-accent">{post.category}</span>
                            <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-orange transition-colors">{post.title}</h3>
                            <p className="text-white/70 mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-white/50 text-sm">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                                <span className="flex items-center gap-1 text-orange group-hover:translate-x-2 transition-transform">Read <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );

    const renderArticle = () => {
        const post = blogPosts.find(p => p.id === selectedPost);
        if (!post) return null;

        return (
            <article className="pt-32 pb-24 bg-navy-900">
                {/* Article Header */}
                <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center header-content mb-12">
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="inline-flex items-center gap-2 text-white/50 hover:text-orange transition-colors mb-8 text-sm uppercase tracking-widest font-accent"
                    >
                        <ChevronLeft className="w-4 h-4" /> Back to Journal
                    </button>

                    <span className="text-orange font-bold text-sm tracking-widest uppercase mb-6 block font-accent">{post.category}</span>
                    <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-8 leading-tight">{post.title}</h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> By {post.author}</span>
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-16 header-content">
                    <div className="rounded-2xl overflow-hidden aspect-[21/9] relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Content Body */}
                <div className="max-w-3xl mx-auto px-6 lg:px-12 article-content">
                    <div
                        className="prose prose-invert prose-orange max-w-none text-lg leading-relaxed mb-16"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share & Author Block */}
                    <div className="border-y border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-navy-800 flex items-center justify-center border border-white/10">
                                <span className="text-2xl font-bold font-heading">{post.author.charAt(0)}</span>
                            </div>
                            <div>
                                <div className="font-bold text-lg">{post.author}</div>
                                <div className="text-sm text-white/50">Director of Strategy, Zest Activation</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-white/50 uppercase tracking-widest font-accent">Share</span>
                            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange flex items-center justify-center transition-colors"><Twitter className="w-4 h-4" /></button>
                            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange flex items-center justify-center transition-colors"><Linkedin className="w-4 h-4" /></button>
                            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange flex items-center justify-center transition-colors"><Facebook className="w-4 h-4" /></button>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className="bg-navy-800 p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                            <MessageSquare className="w-6 h-6 text-orange" />
                            Comments (0)
                        </h3>
                        <textarea
                            placeholder="Leave a thought..."
                            className="w-full bg-navy-900 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-orange transition-colors min-h-[120px] mb-4"
                        />
                        <button className="bg-orange hover:bg-orange-dark text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                            Post Comment
                        </button>
                    </div>
                </div>
            </article>
        );
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white selection:bg-orange selection:text-white">
            <Navbar />
            {selectedPost ? renderArticle() : renderListing()}
            <CTASection />
            <Footer />
        </div>
    );
};

export default BlogPage;
