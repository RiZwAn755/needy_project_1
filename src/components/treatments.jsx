import { motion } from 'framer-motion';
import { Thermometer, Zap, Droplet, Sun, Wind, Activity } from 'lucide-react';

const treatments = [
    { title: 'त्वचा रोग (Skin Diseases)', desc: 'सोरायसिस, एक्जिमा और एलर्जी का प्रभावी और स्थायी इलाज।', icon: <Thermometer className="w-8 h-8" /> },
    { title: 'सांस की समस्याएं (Respiratory)', desc: 'अस्थमा, साइनसाइटिस और ब्रोंकाइटिस से प्राकृतिक राहत।', icon: <Wind className="w-8 h-8" /> },
    { title: 'पाचन विकार (Digestive)', desc: 'गैस, एसिडिटी और कब्ज जैसी समस्याओं का जड़ से समाधान।', icon: <Droplet className="w-8 h-8" /> },
    { title: 'जोड़ों का दर्द (Joint Pain)', desc: 'गठिया और पुराने दर्द में आरामदायक सुधार।', icon: <Activity className="w-8 h-8" /> },
    { title: 'मौसमी बीमारियां (Viral Fever)', desc: 'बुखार, सर्दी और वायरल संक्रमण के लिए सुरक्षित दवाएं।', icon: <Sun className="w-8 h-8" /> },
    { title: 'पुराने रोग (Chronic Diseases)', desc: 'लंबे समय से चल रही बीमारियों का विशेष उपचार।', icon: <Zap className="w-8 h-8" /> },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Treatments = () => {
    return (
        <div className="py-20 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                <img src="/medical-decor.png" alt="decor" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">हमारी विशेषज्ञता</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        प्रमुख उपचार
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        हम विभिन्न प्रकार की बीमारियों के लिए व्यक्तिगत और प्रभावी होम्योपैथिक उपचार प्रदान करते हैं।
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {treatments.map((treatment, index) => (
                        <motion.div key={index} variants={item} className="glass p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                                {treatment.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.title}</h3>
                            <p className="text-gray-600">{treatment.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Treatments;
