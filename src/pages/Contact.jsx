import React from 'react';
import Hero from '../components/shared/Hero';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Hero
                title="Contact Us"
                subtitle="Get in touch with our sales team for quotes, technical support, or any other inquiries."
                image="/contact_hero.png"
                height="h-[400px]"
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="space-y-12">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                We are here to assist you with your steel requirements. Reach out to us via phone, email or visit our office.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-50 p-3 rounded-full border border-slate-100">
                                        <MapPin className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary">Head Office</h4>
                                        <p className="text-slate-600">
                                            401, Industrial Area, Steel Market,<br />
                                            Mumbai, Maharashtra - 400004,<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-50 p-3 rounded-full border border-slate-100">
                                        <Phone className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary">Phone</h4>
                                        <p className="text-slate-600">+91 98765 43210</p>
                                        <p className="text-slate-600">+91 98765 43211</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-50 p-3 rounded-full border border-slate-100">
                                        <Mail className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary">Email</h4>
                                        <p className="text-slate-600">sales@supernovasteel.com</p>
                                        <p className="text-slate-600">info@supernovasteel.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-50 p-3 rounded-full border border-slate-100">
                                        <Clock className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary">Business Hours</h4>
                                        <p className="text-slate-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                        <p className="text-slate-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Placeholder */}
                        <div className="w-full h-80 bg-slate-200 rounded-lg overflow-hidden relative mt-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.35824831737!2d72.8258!3d18.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU4JzMwLjAiTiA3MsKwNDknMzIuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
