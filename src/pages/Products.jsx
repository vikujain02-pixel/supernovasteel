import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import products from '../data/products.json';
import { ArrowRight } from 'lucide-react';

const Products = () => {
    return (
        <>
            <Hero
                title="Our Products"
                subtitle="Explore our comprehensive range of industrial steel products."
                image="/SHEET PLATE COILS/ALUMINYM COIL.jpg"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.slug}`}
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {product.badge && (
                                    <span className="absolute top-4 right-4 z-20 bg-accent text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-slate-500 mb-6 flex-grow leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center text-sm font-semibold text-accent">
                                    <span>View Specifications</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
