import React from 'react';
import Hero from '../components/shared/Hero';
import { Target, Eye, Globe, Award, Briefcase, Zap } from 'lucide-react';

const About = () => {
    return (
        <>
            <Hero
                title="Building the Future with Steel"
                subtitle="Supernova Steel India is a premier manufacturer, stockholder, and supplier of high-quality industrial raw materials."
                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920"
            />

            {/* Company Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                            Supernova Steel India has established itself as a trusted partner for industries worldwide. We specialize in Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloys, and Non-Ferrous metals in various forms such as Pipes, Tubes, Plates, Bars, and Fittings.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Our commitment to quality, timely delivery, and competitive pricing has enabled us to serve critical sectors including Oil & Gas, Petrochemicals, Power Generation, Pharma, and Engineering.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="bg-slate-50 p-4 rounded border border-slate-100 text-center">
                                <span className="block text-3xl font-bold text-accent mb-1">15+</span>
                                <span className="text-sm text-slate-500">Years Experience</span>
                            </div>
                            <div className="bg-slate-50 p-4 rounded border border-slate-100 text-center">
                                <span className="block text-3xl font-bold text-accent mb-1">50+</span>
                                <span className="text-sm text-slate-500">Countries Served</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1531685250784-75699ddc9afc?auto=format&fit=crop&q=80&w=600" alt="Factory" className="rounded-lg shadow-lg mt-8" />
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Warehouse" className="rounded-lg shadow-lg mb-8" />
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary/10 p-3 rounded-full"><Target className="text-primary" size={24} /></div>
                                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                To provide superior quality metal products that exceed customer expectations through continuous improvement, technical expertise, and exceptional service. We aim to be the most reliable link in your supply chain.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary/10 p-3 rounded-full"><Eye className="text-primary" size={24} /></div>
                                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                To be globally recognized as a preferred supplier of industrial steel solutions, known for integrity, innovation, and sustainable business practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Supernova Steel?</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">We don't just supply materials; we deliver solutions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors">
                            <Award className="text-accent mb-4" size={32} />
                            <h4 className="text-xl font-bold mb-2">Quality Assured</h4>
                            <p className="text-slate-400 text-sm">Strict quality control and MTC with every supply.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors">
                            <Globe className="text-accent mb-4" size={32} />
                            <h4 className="text-xl font-bold mb-2">Global Reach</h4>
                            <p className="text-slate-400 text-sm">Efficient logistics network for worldwide export.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors">
                            <Briefcase className="text-accent mb-4" size={32} />
                            <h4 className="text-xl font-bold mb-2">Industry Expertise</h4>
                            <p className="text-slate-400 text-sm">Decades of experience in the steel market.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors">
                            <Zap className="text-accent mb-4" size={32} />
                            <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
                            <p className="text-slate-400 text-sm">Ready stock inventory for quick turnaround.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
