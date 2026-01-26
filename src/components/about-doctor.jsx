import { motion } from 'framer-motion';
import { Award, GraduationCap, Stethoscope, Clock } from 'lucide-react';

const AboutDoctor = () => {
    return (
        <div className="py-20 bg-blue-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/doctor-real.png"
                                alt="Dr. Chandra Prakash Prajapati"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-blue-100 flex items-center space-x-3 animate-bounce-slow">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <Clock className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-gray-900">10+</p>
                                <p className="text-sm text-gray-600 font-medium">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                            About The Doctor
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                            Dr. Chandra Prakash Prajapati
                        </h2>
                        <h3 className="text-xl text-blue-600 font-semibold mb-6 flex items-center">
                            <GraduationCap className="w-6 h-6 mr-2" />
                            BHMS, Senior Homeopathic Consultant
                        </h3>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                डॉ. चंद्र प्रकाश प्रजापति एक समर्पित और अनुभवी होम्योपैथिक चिकित्सक हैं, जो पिछले 10 से अधिक वर्षों से मरीजों की सेवा कर रहे हैं। उनका मानना है कि सच्चा इलाज केवल लक्षणों को दबाना नहीं, बल्कि जड़ से बीमारी को खत्म करना है।
                            </p>
                            <p>
                                उन्होंने अपनी शिक्षा (BHMS) प्रतिष्ठित संस्थान से प्राप्त की है और उन्होंने अनगिनत जटिल रोगों का सफल उपचार किया है। उनका दृष्टिकोण पूर्णतः रोगी-केंद्रित है, जहाँ वे प्रत्येक मरीज को व्यक्तिगत समय और ध्यान देते हैं।
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                <Stethoscope className="w-10 h-10 text-red-500 mr-4" />
                                <div>
                                    <p className="font-bold text-gray-900">Holistic Approach</p>
                                    <p className="text-sm text-gray-500">Treating the whole person</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                <Award className="w-10 h-10 text-yellow-500 mr-4" />
                                <div>
                                    <p className="font-bold text-gray-900">Certified Expert</p>
                                    <p className="text-sm text-gray-500">Recognized Specialist</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutDoctor;
