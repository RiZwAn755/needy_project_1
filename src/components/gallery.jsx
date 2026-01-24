import { motion } from 'framer-motion';

const images = [
    { src: '/doctor-real.png', alt: 'Dr. Chandra Prakash Prajapati' },
    { src: '/gallery-1.png', alt: 'Clinic Waiting Area' },
    { src: '/gallery-2.png', alt: 'Homeopathic Medicines' },
    { src: '/gallery-3.png', alt: 'Patient Consultation' }, // Placeholder for the 3rd image
];

const Gallery = () => {
    return (
        <div className="py-20 bg-white/50 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        गैलरी (Gallery)
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        हमारे क्लिनिक की एक झलक
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative aspect-square rounded-2xl overflow-hidden glass shadow-lg cursor-pointer group"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=Image+Coming+Soon'; }}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-medium text-center px-4">{img.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
