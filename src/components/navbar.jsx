import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'घर', path: '#home' }, // Home
        { name: 'उपचार', path: '#treatments' }, // Treatments
        { name: 'सेवाएं', path: '#services' }, // Services
        { name: 'प्रतिक्रिया', path: '#feedback' }, // Feedback
        { name: 'संपर्क', path: '#contact' }, // Contact
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/20 glass">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
                     <img
                            src="/logo.png"
                            alt="माँ गायत्री होमियो क्लिनिक"
                            className="h-10 w-10 object-contain rounded-full border border-gray-200"

                        />
                    <span className="self-center text-3xl font-bold whitespace-nowrap text-red-800">
                        माँ गायत्री <span className="text-blue-600">होमियो क्लिनिक</span>
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <a
                                    href={link.path}
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Animation Wrapper can be added here if needed for smoother slide-in */}
        </nav>
    );
};

export default Navbar;
