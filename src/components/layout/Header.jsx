import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';
import products from '../../data/products.json';
import logo from '../../assets/logo_horizontal.jpeg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => {
        setIsOpen(false);
        setIsProductOpen(false);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-100 font-sans">
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 px-4 md:px-8 text-xs md:text-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +91 98765 43210</span>
                        <span className="flex items-center gap-2"><Mail size={14} className="text-accent" /> sales@supernovasteel.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2"><Globe size={14} /> Global Exporter</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
                        <img src={logo} alt="Supernova Steel India" className="h-12 w-auto object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className={`font-medium hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : 'text-slate-700'}`}>Home</Link>
                        <Link to="/about" className={`font-medium hover:text-accent transition-colors ${isActive('/about') ? 'text-accent' : 'text-slate-700'}`}>About Us</Link>

                        <div className="relative group">
                            <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-accent transition-colors py-4">
                                Products <ChevronDown size={16} />
                            </button>

                            {/* Mega Menu Dropdown */}
                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                <div className="py-2">
                                    {products.map((product) => (
                                        <Link
                                            key={product.id}
                                            to={`/products/${product.slug}`}
                                            className="block px-6 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-accent hover:pl-8 transition-all"
                                        >
                                            {product.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/material" className={`font-medium hover:text-accent transition-colors ${isActive('/material') ? 'text-accent' : 'text-slate-700'}`}>Material</Link>

                        <Link to="/quality" className={`font-medium hover:text-accent transition-colors ${isActive('/quality') ? 'text-accent' : 'text-slate-700'}`}>Quality</Link>
                        <Link to="/contact" className={`font-medium hover:text-accent transition-colors ${isActive('/contact') ? 'text-accent' : 'text-slate-700'}`}>Contact</Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link to="/contact" className="bg-accent hover:bg-sky-700 text-white px-6 py-2.5 rounded font-semibold transition-colors shadow-sm">
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-primary" onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
                    <div className="flex flex-col p-4 gap-2">
                        <Link to="/" className="p-4 border-b border-slate-50 font-medium" onClick={closeMenu}>Home</Link>
                        <Link to="/about" className="p-4 border-b border-slate-50 font-medium" onClick={closeMenu}>About Us</Link>

                        <div>
                            <button
                                onClick={() => setIsProductOpen(!isProductOpen)}
                                className="w-full flex justify-between items-center p-4 border-b border-slate-50 font-medium"
                            >
                                Products <ChevronDown size={16} className={`transform transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isProductOpen && (
                                <div className="bg-slate-50 border-l-4 border-accent ml-4">
                                    {products.map((product) => (
                                        <Link
                                            key={product.id}
                                            to={`/products/${product.slug}`}
                                            className="block px-4 py-3 text-sm text-slate-600 border-b border-slate-100 last:border-0"
                                            onClick={closeMenu}
                                        >
                                            {product.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>


                        <Link to="/material" className="p-4 border-b border-slate-50 font-medium" onClick={closeMenu}>Material</Link>
                        <Link to="/quality" className="p-4 border-b border-slate-50 font-medium" onClick={closeMenu}>Quality</Link>
                        <Link to="/contact" className="p-4 border-b border-slate-50 font-medium" onClick={closeMenu}>Contact</Link>

                        <div className="p-4">
                            <Link to="/contact" className="block w-full text-center bg-accent text-white py-3 rounded font-semibold" onClick={closeMenu}>
                                Get Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
