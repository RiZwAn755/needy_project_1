import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapPage = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900">हमें यहाँ खोजें</h1>
                    <p className="mt-4 text-xl text-gray-500">
                        आसानी से क्लिनिक तक पहुँचें
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-300"
                >
                    {/* Placeholder for Google Maps Iframe */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
                            <p className="text-gray-500 font-medium">Google Maps Loading...</p>
                            <p className="text-sm text-gray-400 mt-2">(API Key Required for Real Map)</p>
                        </div>
                    </div>
                    <iframe
                        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
                        title="map"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-blue-50 rounded-lg">
                        <h3 className="font-bold text-gray-900">By Train</h3>
                        <p className="text-gray-600 mt-2">Nearest Railway Station: Shrikrishna Nagar Railway Station </p>
                    </div>
                    <div className="p-6 bg-green-50 rounded-lg">
                        <h3 className="font-bold text-gray-900">By Bus</h3>
                        <p className="text-gray-600 mt-2">Nearest Bus Stop: Badlapur Bus Stand  </p>
                    </div>
                    <div className="p-6 bg-purple-50 rounded-lg">
                        <h3 className="font-bold text-gray-900">पार्किंग</h3>
                        <p className="text-gray-600 mt-2">क्लिनिक के बाहर मुफ्त पार्किंग उपलब्ध है।</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapPage;
