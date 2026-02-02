import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'राजेश कुमार',
        text: 'मुझे गुर्दा पथरी (Kidney Stone) की समस्या थी। डॉ. प्रजापति के इलाज से मेरी पथरी बिना ऑपरेशन के निकल गई। ट्रीटमेंट के बाद अब मैं पूरी तरह से स्वस्थ हूँ।',
        rating: 5
    },
    {
        name: 'सुनीता देवी',
        text: 'हम कई वर्षों से बांझपन (Infertility) की समस्या से जूझ रहे थे। डॉक्टर साहब के इलाज के बाद हमारी गोद भर गई। हम इस इलाज से पूरी तरह संतुष्ट और खुश हैं।',
        rating: 5
    },
    {
        name: 'अंजली सिंह',
        text: 'मेरे स्तन में गांठ (Breast Lump) थी और मैं ऑपरेशन से डर रही थी। यहाँ के होम्योपैथिक इलाज से मेरी गांठ बिना सर्जरी के पूरी तरह ठीक हो गई। मैं अब एकदम स्वस्थ हूँ।',
        rating: 5
    },
    {
        name: 'वंदना मिश्रा',
        text: 'मुझे बच्चेदानी में गांठ (Uterine Fibroid) की समस्या थी। डॉक्टर के इलाज से मुझे बहुत आराम मिला और अब मेरी रिपोर्ट एकदम सही है। मैं पूरी तरह रिकवर हो चुकी हूँ।',
        rating: 5
    },
    {
        name: 'सुरेश यादव',
        text: 'मैं बवासीर (Piles) से बहुत परेशान था। यहाँ इलाज कराने के बाद मेरी समस्या जड़ से खत्म हो गई है और मुझे अब कोई तकलीफ नहीं है। मैं पूरी तरह ठीक हूँ।',
        rating: 5
    },
    {
        name: 'पूजा गुप्ता',
        text: 'मुझे त्वचा का एक पुराना रोग (Skin Disease) था जो कहीं ठीक नहीं हो रहा था। डॉ. चंद्र प्रकाश प्रजापति के इलाज से अब मेरी त्वचा बिल्कुल साफ और स्वस्थ है।',
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
