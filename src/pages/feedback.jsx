import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'खुशबू',
        text: 'बच्चेदानी की गाँठ की समस्या से मैं बहुत परेशान थी। यहाँ के प्राकृतिक उपचार से बिना सर्जरी काफी आराम मिला और अब मेरी सेहत पहले से बहुत बेहतर है।',
        rating: 5
    },
    {
        name: 'राजकुमारी',
        text: 'गुर्दा पथरी के इलाज के लिए यहाँ आई थी। कुछ ही समय में दर्द से राहत मिली और पथरी की समस्या भी काफी हद तक ठीक हो गई। इलाज पूरी तरह सुरक्षित रहा।',
        rating: 5
    },
    {
        name: 'पूजा',
        text: 'स्तन की गाँठ की वजह से बहुत डर लग रहा था। यहाँ सही मार्गदर्शन और इलाज से गाँठ में काफी सुधार हुआ और अब मैं पूरी तरह संतुष्ट हूँ।',
        rating: 5
    },{
    name: 'रमेश कुमार',
    text: 'गुर्दा पथरी की समस्या से काफी परेशान था। यहाँ इलाज के बाद दर्द में राहत मिली और अब स्थिति पहले से बहुत बेहतर है।',
    rating: 5
},
{
    name: 'अमित यादव',
    text: 'लंबे समय से उभरी हुई गाँठ की परेशानी थी। नियमित इलाज से अच्छा सुधार हुआ। डॉक्टर का व्यवहार बहुत ही अच्छा है।',
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
