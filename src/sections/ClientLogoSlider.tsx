const logos = [
    "TATA", "Reliance", "Infosys", "Wipro", "HDFC Bank", "Mahindra", "ITC", "Maruti Suzuki", "Aditya Birla", "L&T"
];

const ClientLogoSlider = () => {
    return (
        <div className="w-full bg-white py-16 overflow-hidden relative z-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center">
                <h2 className="font-heading font-bold text-3xl text-navy-900 mb-4">Trusted by India's Top Enterprises</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">We partner with leading brands to deliver exceptional corporate experiences across the nation.</p>
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
