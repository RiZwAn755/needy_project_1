import { Facebook, Twitter, Instagram, Leaf, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Clinic Info */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="mr-3">
                                <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain rounded-full border border-gray-600" />
                            </div>
                            <span className="text-xl font-bold">Ma Gayatri Homeo Clinic</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Dr. Chandra Prakash Prajapati
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Providing effective and natural homeopathic treatments for all your health needs.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors bg-gray-900 p-2 rounded-full">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors bg-gray-900 p-2 rounded-full">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors bg-gray-900 p-2 rounded-full">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Our Treatments */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-red-600 pb-2 inline-block">Our Treatments</h3>
                        <ul className="space-y-4">
                            {['Allergy Treatment', 'Migraine & Headache', 'Thyroid Care', 'Skin Care Treatment'].map((item) => (
                                <li key={item}>
                                    <a href="#treatments" className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center">
                                        <ArrowRight className="h-3 w-3 mr-2 text-red-600" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-red-600 pb-2 inline-block">Useful Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Free Consultation', link: '#contact' },
                                { name: 'Book Appointment', link: '#contact' },
                                { name: 'Treatments', link: '#treatments' },
                                { name: 'Contact Us', link: '#contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.link} className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center">
                                        <ArrowRight className="h-3 w-3 mr-2 text-red-600" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-red-600 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    Near Shrikrishna Nagar Railway Station,<br />
                                    Sarveshwari School ke samne,<br />
                                    Badlapur, Jaunpur 222125
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                <a href="mailto:drsp1136@gmail.com" className="text-gray-400 hover:text-white text-sm">dr.chandraprakash4700@gmail.com</a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                <a href="tel:+919451108552" className="text-gray-400 hover:text-white text-sm">+91-9919914700</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        &copy; 2026 Ma Gayatri Homeopathic Clinic. All Rights Reserved.
                    </p>

                    {/* Scrolling Credit Line */}
                    <div className="w-full overflow-hidden bg-gray-900 py-2 border-t border-gray-800 rounded-lg">
                        <div className="animate-marquee text-sm text-red-400 font-medium tracking-wider">
                            Made with love by <a href="https://www.needysolutions.info/" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">needysolutions</a> ❤️
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
