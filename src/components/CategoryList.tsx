import React from 'react';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
}

const ProductGrid: React.FC<{ products: Product[]; onProductClick: (product: Product) => void }> = ({ products, onProductClick }) => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => onProductClick(product)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-heading text-foreground">{product.name}</h3>
                                    <span className="text-primary font-semibold">${product.price}</span>
                                </div>
                                <p className="text-accent mb-4">{product.description}</p>
                                <button
                                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Add to cart logic here
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;