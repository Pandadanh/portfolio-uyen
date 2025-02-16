import React from "react";
import { FiX } from "react-icons/fi";

interface ProductDetailProps {
    product: {
        image: string;
        name: string;
        category: string;
        price: number;
        description: string;
        linkAffiliate: string;
    };
    onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-card rounded-lg max-w-4xl w-full relative transform transition-all duration-300 scale-100">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-accent hover:text-primary transition-colors"
                    >
                        <FiX size={24} />
                    </button>
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        <div className="space-y-4">
                            <div className="h-[400px] overflow-hidden rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-heading text-foreground mb-2">{product.name}</h2>
                                <p className="text-accent">{product.category}</p>
                            </div>
                            <div className="border-t border-b py-4">
                                <p className="text-3xl text-primary font-bold">${product.price}</p>
                            </div>
                            <p className="text-accent text-lg">{product.description}</p>
                            <div className="space-y-4">
                                <a
                                    href={product.linkAffiliate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-primary text-white py-4 rounded-md hover:bg-primary/90 transition-colors font-semibold text-center"
                                >
                                    View on Store →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;