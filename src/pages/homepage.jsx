import { motion } from 'framer-motion';
import { ArrowRight, Activity, Heart, Shield } from 'lucide-react';
// Import other sections
import Treatments from '../components/treatments';
import Appointment from '../components/appointment';
import Services from './services';
import Feedback from './feedback';
import ContactUs from './contactus';
import MapPage from './map';

const HomePage = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* ... (previous sections) ... */}

            <section id="home" className="relative px-4 py-16 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:py-24">
                {/* ... (hero content) ... */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block text-green-700">प्राकृतिक उपचार,</span>
                            <span className="block text-blue-600">सम्पूर्ण स्वास्थ्य।</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-lg">
                            हम आपके स्वास्थ्य को प्राथमिकता देते हैं। सुरक्षित, प्रभावी और साइड-इफेक्ट मुक्त होम्योपैथिक उपचार के साथ एक स्वस्थ जीवन की ओर कदम बढ़ाएं।
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a
                                    href="#appointment"
                                    className="flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
                                >
                                    अपॉइंटमेंट बुक करें
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href="#services"
                                    className="flex items-center justify-center px-8 py-3 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
                                >
                                    सेवाएं देखें
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative Element Behind */}
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

                        <div
                            className="relative rounded-2xl overflow-hidden glass shadow-2xl border-4 border-white/50"
                            style={{ maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)' }}
                        >
                            <img
                                src="/doctor-real.png"
                                alt="Dr. Chandra Prakash Prajapati - Homeopathic Doctor"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Badge */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-green-100">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-green-100 rounded-full">
                                        <Heart className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">डॉ. चंद्र प्रकाश प्रजापति</p>
                                        <p className="text-xs text-gray-500">वरिष्ठ होम्योपैथिक विशेषज्ञ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Other Sections */}
            <section id="treatments">
                <Treatments />
            </section>

            <section id="services">
                <Services />
            </section>

            <section id="appointment">
                <Appointment />
            </section>

            <section id="feedback">
                <Feedback />
            </section>

            <section id="contact">
                <ContactUs />
            </section>

            <section id="map">
                <MapPage />
            </section>
        </div>
    );
};

export default HomePage;
