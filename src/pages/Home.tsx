import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    {
        id: 1,
        name: "Electronics",
        description: "Latest gadgets and electronic devices",
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Clothing",
        description: "Trendy fashion for everyone",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Home Appliances",
        description: "Smart appliances for modern homes",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }

];


const Home = () => {
    const [isMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName: string) => {
        navigate(`/products/${categoryName}`);
    };

    return (
        <div className="min-h-screen bg-background">

            {isMenuOpen && (
                <div className="md:hidden bg-card shadow-sm">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block px-4 py-3 text-foreground hover:text-primary text-lg">Home</a>
                        <a href="#" className="block px-4 py-3 text-foreground hover:text-primary text-lg">Products</a>
                        <a href="#" className="block px-4 py-3 text-foreground hover:text-primary text-lg">Categories</a>
                        <a href="#" className="block px-4 py-3 text-foreground hover:text-primary text-lg">About</a>
                    </div>
                </div>
            )}

            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl md:text-6xl text-white font-bold mb-4 leading-tight">Discover Amazing Products</h1>
                        <p className="text-lg md:text-xl text-white mb-8">Find the best deals across multiple categories</p>
                        <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-lg w-full md:w-auto">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8 md:mb-12 text-center">Shop by Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => handleCategoryClick(category.name)}
                            >
                                <div className="relative h-40 md:h-48 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-heading text-foreground mb-2">{category.name}</h3>
                                    <p className="text-accent mb-4 text-sm md:text-base">{category.description}</p>
                                    <span className="text-primary hover:text-primary/90 font-semibold text-lg">
                                        View Products →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;