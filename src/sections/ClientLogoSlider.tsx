const logos = [
    "TATA", "Hero", "Suzuki", "TVS", "IndianOil", "LG", "Nokia", "Samsung", "Vivo", "Oppo", 
    "Vodafone", "Idea", "Reliance", "Jio", "Audi", "T-Hub", "HDFC Bank", "SBI", "Apollo", 
    "Lakme", "Byju's", "Asian Paints", "Malabar Gold", "BP", "Jagran", "Dainik Bhaskar"
];

const ClientLogoSlider = () => {
    return (
        <div className="w-full bg-white py-16 overflow-hidden relative z-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center">
                <h2 className="font-heading font-bold text-3xl text-navy-900 mb-4">Trusted by India's Top Enterprises</h2>
            </div>

            {/* CSS infinite slider */}
            <div className="relative w-full flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
                    {logos.concat(logos).map((logo, index) => (
                        <div
                            key={index}
                            className="text-2xl font-bold font-heading text-gray-400 opacity-60 mix-blend-multiply hover:opacity-100 transition-opacity whitespace-nowrap"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientLogoSlider;
