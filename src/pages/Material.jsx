import React from 'react';
import Hero from '../components/shared/Hero';
import { Layers, Zap, Hexagon, Shield, Package, Circle } from 'lucide-react';

const materials = [
    { name: "Stainless Steel", icon: Shield, description: "Superior corrosion resistance and strength. Grades: 200, 300, 400 Series, PH Grades." },
    { name: "Carbon Steel", icon: Hexagon, description: "High strength and durability for structural and pressure applications." },
    { name: "Alloy Steel", icon: Zap, description: "Enhanced properties for high-temperature and high-pressure environments." },
    { name: "Duplex Steel", icon: Layers, description: "High strength and excellent stress corrosion cracking resistance." },
    { name: "Aluminum", icon: Circle, description: "idwLightweight with good conductivity and corrosion resistance." },
    { name: "Copper", icon: Package, description: "Exceptional electrical and thermal conductivity." },
    { name: "Brass", icon: Circle, description: "Excellent machinability and corrosion resistance." }
];

const Material = () => {
    return (
        <>
            <Hero
                title="Material"
                subtitle="We supply a comprehensive range of ferrous and non-ferrous materials."
                image="https://images.unsplash.com/photo-1533069150645-56451e0646c8?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {materials.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                    <item.icon size={32} className="text-slate-600 group-hover:text-accent transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Material;
