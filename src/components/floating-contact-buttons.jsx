import { Phone, MessageCircle } from 'lucide-react';

const FloatingContactButtons = () => {
    const phoneNumber = "+919919914700";

    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4 pr-1">
            {/* Call Button */}
            <div className="group relative flex items-center justify-end">
                <div className="absolute right-full mr-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
                    Call Now
                </div>
                <a
                    href={`tel:${phoneNumber}`}
                    className="relative block"
                    aria-label="Call Now"
                >
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-l-2xl shadow-lg border-l border-t border-b border-white/20 backdrop-blur-sm transition-all duration-300 transform group-hover:-translate-x-1">
                        <Phone className="w-6 h-6 fill-current" />
                    </div>
                </a>
            </div>

            {/* WhatsApp Button */}
            <div className="group relative flex items-center justify-end">
                <div className="absolute right-full mr-2 px-3 py-1 bg-green-500 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
                    Chat on WhatsApp
                </div>
                <a
                    href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                    aria-label="WhatsApp"
                >
                    <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-l-2xl shadow-lg border-l border-t border-b border-white/20 backdrop-blur-sm transition-all duration-300 transform group-hover:-translate-x-1">
                        <MessageCircle className="w-6 h-6 fill-current" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default FloatingContactButtons;
