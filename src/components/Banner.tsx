import React from 'react';

const Banner: React.FC = () => {
    return (
        <section className="relative h-[500px] overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Banner"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Discover Amazing Products</h1>
                    <p className="text-xl text-white mb-8">Find the best deals across multiple categories</p>
                    <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;