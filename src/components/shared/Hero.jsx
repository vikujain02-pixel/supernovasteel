import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = ({ title, subtitle, image, ctaText, ctaLink, height = "h-[600px]" }) => {
    return (
        <div className={`relative ${height} flex items-center justify-center`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                )}

                {ctaText && ctaLink && (
                    <div className="flex justify-center">
                        <Link
                            to={ctaLink}
                            className="group bg-accent hover:bg-sky-600 text-white px-8 py-4 rounded font-bold text-lg transition-all flex items-center gap-2"
                        >
                            {ctaText}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
