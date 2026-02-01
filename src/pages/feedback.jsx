import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'राहुल सिंह',
        text: 'मेरा इलाज पूरा हो गया है और मैं परिणामों से बहुत संतुष्ट हूँ। मैं सर्वोत्तम होम्योपैथिक उपचार के लिए इस क्लिनिक की अत्यधिक अनुशंसा करता हूँ।',
        rating: 5
    },
    {
        name: 'प्रिया शर्मा',
        text: 'मुझे मिले उपचार से मैं पूरी तरह संतुष्ट हूँ। प्रक्रिया सहज थी और परिणाम बहुत अच्छे हैं। मैं उन्हें सर्वश्रेष्ठ के रूप में सुझाता हूँ।',
        rating: 5
    },
    {
        name: 'अमित वर्मा',
        text: 'इलाज सफलतापूर्वक पूरा हुआ। मैं परिणाम से बहुत खुश हूँ। निश्चित रूप से शहर के सबसे अच्छे डॉक्टर, अत्यधिक अनुशंसित।',
        rating: 5
    },
    {
        name: 'स्नेहा पटेल',
        text: 'मैं यहाँ अपने पूरे हुए इलाज से बहुत संतुष्ट हूँ। डॉक्टर सबसे अच्छी देखभाल प्रदान करते हैं। सभी को अत्यधिक सलाह देता हूँ।',
        rating: 5
    },
    {
        name: 'विक्रम मल्होत्रा',
        text: 'सबसे अच्छा अनुभव! मेरा इलाज पूरा हो गया है और मैं पूरी तरह ठीक हूँ। मैं प्रभावी उपचार की तलाश करने वाले किसी भी व्यक्ति के लिए इस क्लिनिक की दृढ़ता से अनुशंसा करता हूँ।',
        rating: 5
    }
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
