
import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-card shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img
                            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                            alt="Logo"
                            className="h-8 w-8 rounded-full"
                        />
                        <span className="ml-2 text-lg font-heading text-foreground">AffiliateHub</span>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="/pandadanh-shop/" className="text-foreground hover:text-primary">Home</a>
                        <a href="/pandadanh-shop/" className="text-foreground hover:text-primary">Products</a>
                        <a href="/pandadanh-shop/" className="text-foreground hover:text-primary">Categories</a>
                        <a href="/pandadanh-shop/" className="text-foreground hover:text-primary">About</a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <FiSearch className="text-accent hover:text-primary cursor-pointer" />
                        <FiShoppingCart className="text-accent hover:text-primary cursor-pointer" />
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;