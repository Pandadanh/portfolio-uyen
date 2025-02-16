import React, { useState, useEffect } from 'react';

interface VisitorStats {
    totalVisitors: number;
    uniqueVisitors: number;
    conversionRate: number;
}

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
}

interface Category {
    id: number;
    name: string;
    productCount: number;
}

const AdminDashboard: React.FC = () => {
    const [visitorStats, setVisitorStats] = useState<VisitorStats>({ totalVisitors: 0, uniqueVisitors: 0, conversionRate: 0 });
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            // Simulating API calls with setTimeout
            setTimeout(() => {
                setVisitorStats({ totalVisitors: 10000, uniqueVisitors: 7500, conversionRate: 2.5 });
                setProducts([
                    { id: 1, name: 'Wireless Earbuds', category: 'Electronics', price: 59.99, stock: 100 },
                    { id: 2, name: 'Fitness Tracker', category: 'Electronics', price: 89.99, stock: 75 },
                    { id: 3, name: 'Yoga Mat', category: 'Sports & Outdoors', price: 29.99, stock: 200 },
                ]);
                setCategories([
                    { id: 1, name: 'Electronics', productCount: 50 },
                    { id: 2, name: 'Clothing', productCount: 100 },
                    { id: 3, name: 'Sports & Outdoors', productCount: 75 },
                ]);
                setLoading(false);
            }, 1000);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center py-8">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Visitor Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">Total Visitors</h3>
                        <p className="text-3xl font-bold text-blue-600">{visitorStats.totalVisitors.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">Unique Visitors</h3>
                        <p className="text-3xl font-bold text-green-600">{visitorStats.uniqueVisitors.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
                        <p className="text-3xl font-bold text-purple-600">{visitorStats.conversionRate.toFixed(2)}%</p>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">${product.price.toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                                        <button className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Category Management</h2>
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Count</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{category.productCount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                                        <button className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
