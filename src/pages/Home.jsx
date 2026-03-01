import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Smartphone, ShieldCheck, Globe } from 'lucide-react';
import Hero from '../components/shared/Hero';
import SEO from '../components/shared/SEO';
import products from '../data/products.json';

const Home = () => {
    return (
        <>
            <SEO
                title="Industrial Steel Pipes, Tubes & Fittings Manufacturer"
                description="Supernova Steel India is a leading supplier of Stainless Steel, Carbon Steel Pipes, Fasteners, and Flanges for Oil & Gas and Power sectors."
            />
            <Hero
                title="Engineering Materials for Global Industries"
                subtitle="Premier supplier of Steel Pipes, Tubes, Fasteners, Flanges, and Fittings. Serving Oil & Gas, Power, and Infrastructure sectors worldwide."
                image="/home_hero.png"
                ctaText="Explore Products"
                ctaLink="/products"
            />

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">Who We Are</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Reliable Partner for Industrial Steel Solutions</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Supernova Steel India is a leading stockist and supplier of ferrous and non-ferrous metals. With decades of expertise, we supply high-quality Round Bars, Pipes, Sheets, and Fasteners to critical industries.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            We focus on delivering materials that meet strict international standards (ASTM, ASME, DIN, EN) with complete quality certification.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="text-accent mt-1" />
                                <div>
                                    <h4 className="font-bold text-primary">ISO Certified</h4>
                                    <p className="text-sm text-slate-500">Quality Management</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Globe className="text-accent mt-1" />
                                <div>
                                    <h4 className="font-bold text-primary">Global Export</h4>
                                    <p className="text-sm text-slate-500">Shipping Worldwide</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/about" className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                            More About Us <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="/pipes/pipes/CS PIPES.jpg"
                            alt="Industrial Steel Warehouse"
                            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Our Product Range</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We stock and supply a comprehensive range of industrial materials.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                to={`/products/${product.slug}`}
                                className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-grow">
                                        {product.description}
                                    </p>
                                    <span className="text-accent text-sm font-semibold flex items-center gap-1 mt-auto">
                                        View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to discuss your requirements?</h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Get a competitive quote for our high-quality steel products. We ensure timely delivery and certified materials.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-transparent border border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded font-bold transition-all">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
