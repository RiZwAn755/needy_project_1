import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Stethoscope, Send } from 'lucide-react';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        treatment: '',
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, mobile, treatment, date, time } = formData;

        // Doctor's number
        const phoneNumber = "919919914700";

        // Construct message
        const message = `Namaste Doctor Sahab,\n\nI want to book an appointment.\n\n*Details:*\nName: ${name}\nMobile: ${mobile}\nTreatment: ${treatment}\nDate: ${date}\nTime: ${time}\n\nPlease confirm my appointment.`;

        // WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Redirect
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-3xl p-8 md:p-12 shadow-2xl border-t border-white/60"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl mb-4">
                            अभी अपॉइंटमेंट बुक करें
                        </h2>
                        <p className="text-lg text-gray-600">
                            अपनी जानकारी भरें और सीधे व्हाट्सएप पर अपॉइंटमेंट कंफर्म करें।
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="relative">
                                <label htmlFor="patient-name" className="block text-sm font-medium text-gray-700 mb-1">मरीज का नाम</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="text"
                                        id="patient-name"
                                        name="name"
                                        required
                                        className="pl-10 block w-full rounded-lg border-gray-300 bg-white/50 focus:ring-blue-500 focus:border-blue-500 p-3 shadow-sm transition-all"
                                        placeholder="अपना पूरा नाम लिखें"
                                        onChange={handleChange}
                                        autoComplete="name"
                                    />
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="relative">
                                <label htmlFor="patient-mobile" className="block text-sm font-medium text-gray-700 mb-1">मोबाइल नंबर</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="patient-mobile"
                                        name="mobile"
                                        required
                                        className="pl-10 block w-full rounded-lg border-gray-300 bg-white/50 focus:ring-blue-500 focus:border-blue-500 p-3 shadow-sm transition-all"
                                        placeholder="10 अंकों का मोबाइल नंबर"
                                        onChange={handleChange}
                                        autoComplete="tel"
                                    />
                                </div>
                            </div>

                            {/* Treatment */}
                            <div className="relative md:col-span-2">
                                <label htmlFor="patient-treatment" className="block text-sm font-medium text-gray-700 mb-1">बीमारी / उपचार</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Stethoscope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="text"
                                        id="patient-treatment"
                                        name="treatment"
                                        required
                                        className="pl-10 block w-full rounded-lg border-gray-300 bg-white/50 focus:ring-blue-500 focus:border-blue-500 p-3 shadow-sm transition-all"
                                        placeholder="किस समस्या के लिए दिखाना चाहते हैं?"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Date */}
                            <div className="relative">
                                <label htmlFor="appointment-date" className="block text-sm font-medium text-gray-700 mb-1">दिनांक (Date)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="date"
                                        id="appointment-date"
                                        name="date"
                                        required
                                        className="pl-10 block w-full rounded-lg border-gray-300 bg-white/50 focus:ring-blue-500 focus:border-blue-500 p-3 shadow-sm transition-all"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Time */}
                            <div className="relative">
                                <label htmlFor="appointment-time" className="block text-sm font-medium text-gray-700 mb-1">समय (Time)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Clock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="time"
                                        id="appointment-time"
                                        name="time"
                                        required
                                        className="pl-10 block w-full rounded-lg border-gray-300 bg-white/50 focus:ring-blue-500 focus:border-blue-500 p-3 shadow-sm transition-all"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform hover:-translate-y-1 transition-all duration-200"
                            >
                                व्हाट्सएप पर बुक करें <Send className="ml-2 w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Appointment;
