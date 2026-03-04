import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingWhatsApp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            href="https://wa.me/917841963153"
            target="_blank"
            rel="noreferrer"
            className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                }`}
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute -top-10 right-0 bg-white text-navy-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 whitespace-nowrap transition-opacity duration-300 md:group-hover:opacity-100 hidden md:block">
                Chat with us!
                <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45"></div>
            </span>
        </a>
    );
};

export default FloatingWhatsApp;
