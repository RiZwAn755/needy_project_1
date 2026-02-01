import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Leaf, Clock } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">संपर्क करें</h1>
                    <p className="mt-4 text-xl text-gray-500">
                        हम आपकी सहायता के लिए यहाँ हैं। किसी भी प्रश्न के लिए हमसे संपर्क करें।
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">संपर्क जानकारी</h3>
                        <div className="space-y-6">
                            {/* Doctor Name */}
                            <div className="flex items-start space-x-4">
                                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">डॉक्टर</p>
                                    <p className="text-gray-600">डॉ. चंद्र प्रकाश प्रजापति</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">कॉल करें</p>
                                    <p className="text-gray-600">+91 99199 14700 </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-red-100 p-3 rounded-full text-red-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">ईमेल</p>
                                    <p className="text-gray-600">dr.chandraprakash4700@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">क्लिनिक</p>
                                    <p className="text-gray-600">
                                        निकट श्रीकृष्ण नगर रेलवे स्टेशन,<br />
                                        सर्वेश्वरी स्कूल के सामने,<br />
                                        बदलापुर, जौनपुर 222125
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">समय</p>
                                    <p className="text-gray-600">
                                        सोम - शनि: सुबह 9 से 1, दोपहर 3 से 5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl p-8"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">आपका नाम</label>
                                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border p-3" placeholder="नाम दर्ज करें" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">ईमेल</label>
                                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border p-3" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">संदेश</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border p-3" placeholder="अपनी समस्या संक्षेप में लिखें..."></textarea>
                            </div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                संदेश भेजें <Send className="ml-2 w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
