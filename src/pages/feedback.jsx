import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    { name: 'राहुल शर्मा', text: 'होम्योपैथी ने मेरे पुराने अस्थमा को पूरी तरह से ठीक कर दिया। डॉक्टर का व्यवहार बहुत ही सहयोगी है।', rating: 5 },
    { name: 'अंजलि वर्मा', text: 'त्वचा की समस्या के लिए मैंने कई जगह इलाज कराया, लेकिन यहाँ आकर मुझे असली आराम मिला।', rating: 5 },
    { name: 'सुनील कुमार', text: 'पेट की समस्याओं के लिए सबसे अच्छी जगह। बिना किसी साइड इफेक्ट के इलाज।', rating: 4 },
];

const Feedback = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        हमारे मरीज क्या कहते हैं
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        विश्वास और संतुष्टि की कहानियां
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-8 relative"
                        >
                            <Quote className="absolute top-4 right-4 text-blue-100 w-12 h-12" />
                            <div className="flex mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-6">"{item.text}"</p>
                            <div className="font-bold text-gray-900">- {item.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;
