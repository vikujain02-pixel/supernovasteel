import React from 'react';
import Hero from '../components/shared/Hero';
import { ShieldCheck, FileText, CheckCircle, Search } from 'lucide-react';

const Quality = () => {
    return (
        <>
            <Hero
                title="Quality Commitment"
                subtitle="Quality is at the core of everything we do. We ensure every product meets the highest international standards."
                image="/FLANGES/Flange-Inside-Diameter-of-WNRF-flanges.jpg"
            />

            {/* Quality Policy */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-6">Our Quality Policy</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            "Supernova Steel India is committed to providing materials that meet or exceed customer requirements and industry standards. We achieve this through rigorous inspection, certified sourcing, and continuous improvement of our quality management systems."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 text-center">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-sm mb-6">
                                <ShieldCheck size={32} className="text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">100% Tested</h3>
                            <p className="text-slate-600 text-sm">
                                Every product undergoes strict chemical, mechanical, and dimensional testing before dispatch.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 text-center">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-sm mb-6">
                                <FileText size={32} className="text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Certified Materials</h3>
                            <p className="text-slate-600 text-sm">
                                We provide Mill Test Certificates (MTC) as per EN 10204 3.1 & 3.2 with all supplies.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 text-center">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-sm mb-6">
                                <Search size={32} className="text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Third Party Inspection</h3>
                            <p className="text-slate-600 text-sm">
                                Open to inspection by agencies like SGS, TUV, BV, DNV, Lloyds, and others upon request.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing capabilities */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">Testing Facilities</h2>
                        <p className="text-slate-600 mb-6">
                            Our comprehensive testing ensures integrity and performance in critical applications.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Positive Material Identification (PMI)",
                                "Ultrasonic Testing (UT)",
                                "Hydrostatic Pressure Testing",
                                "Radiographic Testing (RT)",
                                "Mechanical Testing (Tensile, Yield, Elongation)",
                                "Hardness Testing",
                                "Intergranular Corrosion (IGC) Test",
                                "Chemical Analysis"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded border border-slate-200">
                                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                                    <span className="font-medium text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src="/FLANGES/flange packing 13-1806.jpg" alt="Secure Packing" className="rounded-lg shadow-md h-64 object-cover w-full" />
                        <img src="/pipes/pipes/Super Duplex  U Tubes.png" alt="Precision Tubes" className="rounded-lg shadow-md h-64 object-cover w-full" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Quality;
