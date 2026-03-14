import React from 'react';
import Hero from '../components/shared/Hero';
import { Layers, Zap, Hexagon, Shield, Package, Circle } from 'lucide-react';

const materials = [
    { name: "Stainless Steel", image: "/Materials/Stainless steel.png", description: "Superior corrosion resistance and strength. Grades: 200, 300, 400 Series, PH Grades." },
    { name: "Carbon Steel", image: "/Materials/Carbon Steel.png", description: "High strength and durability for structural and pressure applications." },
    { name: "Alloy Steel", image: "/Materials/Alloy Steel.png", description: "Enhanced properties for high-temperature and high-pressure environments." },
    { name: "Duplex Steel", image: "/Materials/Duplex Steel.png", description: "High strength and excellent stress corrosion cracking resistance." },
    { name: "Aluminum", image: "/Materials/Aluminium Steel.png", description: "idwLightweight with good conductivity and corrosion resistance." },
    { name: "Copper", image: "/Materials/Copper Steel.png", description: "Exceptional electrical and thermal conductivity." },
    { name: "Brass", image: "/Materials/Brass Steel.png", description: "Excellent machinability and corrosion resistance." }
];

const Material = () => {
    return (
        <>
            <Hero
                title="Material"
                subtitle="We supply a comprehensive range of ferrous and non-ferrous materials."
                image="/materials_hero.png"
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {materials.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center group overflow-hidden">
                                <div className="w-full h-56 overflow-hidden flex items-center justify-center">
                                    <img src={item.image} alt={item.name} className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-6 flex flex-col items-center flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Material;
