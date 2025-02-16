import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import FetchGoogleSheetsData from '../be_sheet/fetchGoogleSheetsData';


interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    linkAffiliate: string;
}

const ProductList: React.FC = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const mapToProduct = useCallback((row: any): Product => ({
        id: Number(row[0]),
        name: row[1],
        category: row[2],
        price: Number(row[3]),
        image: row[4],
        description: row[5] || "",
        linkAffiliate: row[6] || "",

    }), []);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const filteredProducts = products.filter(product => product.category === categoryName);

    return (
        <div className="min-h-screen bg-background">
            {/* Fetch data from Google Sheets */}
            <FetchGoogleSheetsData
                sheetIndex={1} // Sheet1
                mapFunction={mapToProduct}
                onDataFetched={setProducts}
            />

            <section className="py-8 md:py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
                        <h2 className="text-2xl md:text-3xl font-heading text-foreground">
                            {categoryName} Products
                        </h2>
                        <button
                            onClick={() => window.history.back()}
                            className="text-primary hover:text-primary/90 font-semibold flex items-center gap-2 text-lg"
                        >
                            ← Back to Categories
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => handleProductClick(product)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4 md:p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg md:text-xl font-heading text-foreground">{product.name}</h3>
                                        <span className="text-primary font-semibold">${product.price}</span>
                                    </div>
                                    <p className="text-accent mb-4 text-sm md:text-base">{product.description}</p>
                                    <button
                                        className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors text-lg"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleProductClick(product);
                                        }}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProduct && (
                <ProductDetail
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default ProductList;