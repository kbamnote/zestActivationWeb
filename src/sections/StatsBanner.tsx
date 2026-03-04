import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsBanner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const countersRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const ctx = gsap.context(() => {
            countersRef.current.forEach((counter) => {
                if (!counter) return;
                const target = parseInt(counter.getAttribute('data-target') || '0', 10);

                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2.5,
                    ease: 'power3.out',
                    snap: { innerHTML: 1 },
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                    },
                    onUpdate() {
                        if (counter.innerHTML === target.toString()) {
                            counter.innerHTML = target + '+';
                        }
                    }
                });
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-navy-800 border-y border-white/5 py-12 relative overflow-hidden z-20">
            <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20" />
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-wrap justify-between items-center gap-8">

                {/* Awards */}
                <div className="flex items-center gap-6 w-full md:w-auto mb-8 md:mb-0 justify-center md:justify-start">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-2 border-navy-800 bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center shadow-lg shadow-orange/20">
                                <span className="text-sm text-white font-bold">★</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span className="font-heading font-bold text-xl text-white block">Award Winning</span>
                        <span className="text-sm text-white/70 font-accent tracking-widest uppercase">Event Management</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex justify-around flex-1 gap-8 lg:gap-16">
                    <div className="text-center">
                        <div
                            ref={(el) => { countersRef.current[0] = el; }}
                            data-target="500"
                            className="text-4xl lg:text-5xl font-bold font-heading text-white mb-2"
                        >
                            0
                        </div>
                        <div className="text-xs text-orange uppercase tracking-widest font-accent">Events Delivered</div>
                    </div>
                    <div className="text-center">
                        <div
                            ref={(el) => { countersRef.current[1] = el; }}
                            data-target="50"
                            className="text-4xl lg:text-5xl font-bold font-heading text-white mb-2"
                        >
                            0
                        </div>
                        <div className="text-xs text-orange uppercase tracking-widest font-accent">Cities Pan India</div>
                    </div>
                    <div className="text-center">
                        <div
                            ref={(el) => { countersRef.current[2] = el; }}
                            data-target="10"
                            className="text-4xl lg:text-5xl font-bold font-heading text-white mb-2"
                        >
                            0
                        </div>
                        <div className="text-xs text-orange uppercase tracking-widest font-accent">Years Experience</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StatsBanner;
