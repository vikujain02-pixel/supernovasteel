import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import InquiryForm from '../components/shared/InquiryForm';
import products from '../data/products.json';
import { CheckCircle, ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import SEO from '../components/shared/SEO';

const ProductDetail = () => {
    const { slug } = useParams();
    const product = products.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link to="/products" className="text-accent underline">Back to Products</Link>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={`${product.title} - Specifications & Grades`}
                description={product.description}
            />
            <Hero
                title={product.title}
                subtitle={product.description}
                image={product.image}
                height="h-[400px]"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to All Products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">Product Overview</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                {product.longDescription || product.description}
                            </p>

                            {/* Image Gallery */}
                            {product.images && product.images.length > 0 && (
                                <section className="mb-12">
                                    <h3 className="text-xl font-bold text-primary mb-4">Product Gallery</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {product.images.map((img, idx) => {
                                            // Extract filename and clean it up for the label
                                            const filename = img.split('/').pop().split('.')[0];
                                            let label = filename
                                                .replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
                                                .replace(/%20/g, ' ') // Replace URL encoded spaces
                                                .replace(/\s+/g, ' ') // Normalize spaces
                                                .replace(/\.[^/.]+$/, "") // Remove extension
                                                .trim();

                                            // Hide label if it looks like a generated or generic filename
                                            const isGeneric = label.match(/^(chatgpt|image|img|screenshot|untitled)/i);
                                            
                                            // Format "1743147532250" style names to be hidden or generic
                                            const isNumeric = /^\d+$/.test(label);
                                            
                                            if (isGeneric || isNumeric) {
                                                label = product.title; // Fallback to product title
                                            }

                                            return (
                                                <div key={idx} className="group relative rounded-lg overflow-hidden h-64 border border-slate-100 shadow-sm hover:shadow-lg transition-all cursor-pointer bg-white">
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4 text-center">
                                                        <span className="text-white text-xs font-bold bg-black/50 px-3 py-1 rounded-full mb-2 truncate max-w-full">{label}</span>
                                                    </div>
                                                    <img
                                                        src={img}
                                                        alt={label}
                                                        className="w-full h-full object-contain p-2 transform group-hover:scale-110 transition-transform duration-500 bg-white"
                                                        loading="lazy"
                                                        onClick={() => window.open(img, '_blank')}
                                                    />
                                                    <div className="absolute bottom-0 left-0 right-0 bg-slate-50/90 text-slate-700 text-[10px] font-medium p-2 text-center border-t border-slate-100 truncate">
                                                        {label}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </section>
                            )}

                            {/* Key Features / Badges */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-sm font-medium text-slate-700">
                                    <ShieldCheck size={16} className="text-accent" /> ISO Certified
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-sm font-medium text-slate-700">
                                    <FileText size={16} className="text-accent" /> MTC Provided
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-sm font-medium text-slate-700">
                                    <CheckCircle size={16} className="text-accent" /> Ready Stock
                                </div>
                            </div>
                        </section>

                        {/* Specifications Table */}
                        {product.specifications && (
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-6">Technical Specifications</h2>
                                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                                    <table className="w-full text-sm text-left text-slate-600">
                                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                                            <tr>
                                                <th className="px-6 py-4 font-bold w-1/3">Parameter</th>
                                                <th className="px-6 py-4 font-bold">Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.specifications.map((spec, index) => (
                                                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 last:border-0">
                                                    <td className="px-6 py-4 font-medium text-slate-900 border-r border-slate-100">{spec.parameter}</td>
                                                    <td className="px-6 py-4">{spec.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}

                        {/* Sub Categories or Materials */}
                        {(product.subCategories || product.materials) && (
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-6">Available Types & Materials</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {product.subCategories?.map((cat, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-accent transition-colors">
                                            <h4 className="font-bold text-lg text-primary mb-2">{cat.name}</h4>
                                            <p className="text-slate-600 text-sm">{cat.description}</p>
                                        </div>
                                    ))}

                                    {product.materials?.map((mat, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-accent transition-colors">
                                            <h4 className="font-bold text-lg text-primary mb-3">{mat.category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {mat.items.map((item, i) => (
                                                    <span key={i} className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Grades Table */}
                        {product.grades && (
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-6">Material Grades</h2>
                                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                                    <table className="w-full text-sm text-left text-slate-600">
                                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                                            <tr>
                                                {product.grades.headers.map((h, i) => (
                                                    <th key={i} className="px-6 py-4 font-bold">{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.grades.rows.map((row, index) => (
                                                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 last:border-0">
                                                    {row.map((cell, i) => (
                                                        <td key={i} className={`px-6 py-4 ${i === 0 ? 'font-medium text-slate-900 border-r border-slate-100' : ''}`}>
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Inquiry Form */}
                            <InquiryForm productName={product.title} />

                            {/* Downloads or Assistance */}
                            <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
                                <h3 className="font-bold text-lg mb-4">Need Technical Assistance?</h3>
                                <p className="text-slate-300 text-sm mb-6">
                                    Our engineers can help you choose the right grade and specifications for your project.
                                </p>
                                <Link to="/contact" className="block w-full text-center bg-white text-primary font-bold py-3 rounded hover:bg-slate-100 transition-colors">
                                    Contact Engineering
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ProductDetail;
