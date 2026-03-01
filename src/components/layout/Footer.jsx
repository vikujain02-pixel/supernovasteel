import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';
import logo from '../../assets/logo_horizontal.jpeg';

const Footer = () => {
    return (
        <footer className="bg-primary text-slate-300 font-sans">
            <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Company Info */}
                <div className="space-y-6">
                    <div className="bg-white p-2 rounded w-fit">
                        <img src={logo} alt="Supernova Steel" className="h-10 w-auto" />
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        Supernova Steel India is a global leader in manufacturing and supplying high-quality steel products, pipes, tubes, fasteners, and industrial fittings.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-accent transition-colors">About Company</Link></li>
                        <li><Link to="/quality" className="hover:text-accent transition-colors">Quality Assurance</Link></li>
                        <li><Link to="/products" className="hover:text-accent transition-colors">All Products</Link></li>
                        <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg">Our Products</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/products/pipes-and-tubes" className="hover:text-accent transition-colors">Pipes & Tubes</Link></li>
                        <li><Link to="/products/sheets-plates-coils" className="hover:text-accent transition-colors">Sheets & Plates</Link></li>
                        <li><Link to="/products/round-bars" className="hover:text-accent transition-colors">Round Bars</Link></li>
                        <li><Link to="/products/fasteners" className="hover:text-accent transition-colors">Fasteners</Link></li>
                        <li><Link to="/products/flanges" className="hover:text-accent transition-colors">Flanges</Link></li>
                        <li><Link to="/products/forged-fittings" className="hover:text-accent transition-colors">Forged Fittings</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                            <span>401, Industrial Area, Steel Market,<br />Mumbai, Maharashtra - 400004</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-accent shrink-0" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-accent shrink-0" />
                            <span>sales@supernovasteel.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                    <p>© 2024 Supernova Steel India. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-300">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
