const Partners = () => {
    const logos = [
        // { name: 'UNDP', src: '/partners/undp.png' },
        { name: 'UNDP', src: '/partners/undp_logo_landscape.png' },
        // { name: 'ONDI', src: '/partners/ondi.png' },
        { name: 'ONDI', src: '/partners/cropped-ONDI-favicon-1.jpg' },
        // { name: 'Ibom Innovation Network', src: '/partners/ibom.png' },
        { name: 'Hotel.ng', src: '/partners/2100bfde-34f3-48c3-a339-2fa32392cbe1.png' },
        { name: 'Ibom Innovation Network', src: '/partners/ibom-innovation-network-logo.webp' },
        { name: 'AfriLabs', src: '/partners/afrilabs-1.png' },
        { name: 'PIND Foundation', src: '/partners/Fulllogo.png' },
        { name: 'NITDA', src: '/partners/nitda-1.webp' },
        { name: 'Ritman University', src: '/partners/ritman-university-logo-transparent.png' },
        { name: 'Government of Akwa Ibom State', src: '/partners/WVUEd4Mg_400x400.jpg' },
        // { name: 'Ibom Innovation Network', src: '/partners/images (1).png' },
        { name: 'Akwa Ibom Tech Week', src: '/partners/images.png' },
        { name: 'Digispot Solutions Limited', src: '/partners/1672890654284.jpg' },
        { name: 'LEAP Africa', src: '/partners/7080c627a7632d35f431285dd1150a422f767f8c693101bf8fa3f411580873aa.jpeg' },
    ];

    return (
        <div className="mt-20 relative">
            <div className="absolute inset-0 bg-secondary blur-sm opacity-75"></div>
            <div className="relative py-10">
                <h3 className="text-3xl font-[800] text-center text-white mb-3">Partners & Supporters</h3>
                <p className="text-center text-white/90 mb-10 px-6">
                    Organizations we have had the pleasure of innovating for impact with
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="bg-white h-24 w-full flex items-center justify-center rounded-xl shadow-lg border border-primary/20 hover:scale-105 transition-transform duration-200 ease-in-out p-2"
                            title={logo.name}
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="object-contain h-full w-full"
                                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/partners/placeholder.svg'; }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
