import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    brand: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                        <p className="text-sm text-gray-200">${product.price.toFixed(2)}</p>
                        <span className="text-white text-xs group-hover:translate-x-2 transition-transform duration-300">
                            View Details →
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
