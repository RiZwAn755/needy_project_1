import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const services = [
    { title: 'व्यक्तिगत परामर्श (Personal Consultation)', desc: 'हर रोगी की स्थिति के अनुसार गहन विश्लेषण और व्यक्तिगत दवा चयन।' },
    { title: 'ऑनलाइन परामर्श (Online Consultation)', desc: 'वीडियो कॉल के माध्यम से घर बैठे विशेषज्ञ डॉक्टर से सलाह लें।' },
    { title: 'दवा होम डिलीवरी (Medicine Delivery)', desc: 'आपकी दवाएं सुरक्षित रूप से आपके घर तक पहुंचाई जाती हैं।' },
    { title: 'आहार और जीवनशैली (Diet & Lifestyle)', desc: 'बीमारी से जल्दी उबरने के लिए उचित खान-पान और योग की सलाह।' },
];

const Services = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">सुविधाएं</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        आपकी सेवा में सदैव
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-blue-50 transition-colors duration-300"
                            >
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                                        <CheckCircle className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {service.desc}
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Services;
