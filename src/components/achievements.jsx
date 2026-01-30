import { motion } from 'framer-motion';

// const achievements = [
//     { src: '/WhatsApp Image 2026-01-25 at 20.43.55.jpeg', alt: 'पुरस्कार समारोह', description: 'होम्योपैथिक चिकित्सा में उत्कृष्टता के लिए सम्मानित।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.43.56.jpeg', alt: 'समाज सेवा', description: 'स्थानीय समुदाय की सेवा के लिए पहचान मिली।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.43.58.jpeg', alt: 'सर्वश्रेष्ठ चिकित्सक पुरस्कार', description: 'वर्ष के सर्वश्रेष्ठ होम्योपैथिक चिकित्सक का पुरस्कार।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.44.00.jpeg', alt: 'सेमिनार प्रस्तुति', description: 'राष्ट्रीय होम्योपैथी सेमिनार में शोध प्रस्तुति।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.44.01.jpeg', alt: 'रोगी देखभाल उत्कृष्टता', description: 'उत्कृष्ट रोगी देखभाल के लिए प्रशंसा प्रमाण पत्र।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.44.02.jpeg', alt: 'कार्यशाला', description: 'प्राकृतिक चिकित्सा विधियों पर कार्यशाला का नेतृत्व।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.44.04.jpeg', alt: 'चिकित्सा शिविर', description: 'जरूरतमंदों के लिए निःशुल्क चिकित्सा शिविर का आयोजन।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.44.06.jpeg', alt: 'शोध प्रकाशन', description: 'नए शोध निष्कर्षों के प्रकाशन का जश्न।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.44.07.jpeg', alt: 'टीम उपलब्धि', description: 'हमारी समर्पित टीम को पुरस्कार प्राप्त हुआ।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.44.09.jpeg', alt: 'लाइफटाइम अचीवमेंट', description: 'लाइफटाइम अचीवमेंट अवार्ड से सम्मानित।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.44.10.jpeg', alt: 'सम्मेलन', description: 'अंतर्राष्ट्रीय सम्मेलन में मुख्य वक्ता।' },
//     { src: '/WhatsApp Image 2026-01-25 at 20.44.12.jpeg', alt: 'अतिथि व्याख्यान', description: 'मेडिकल कॉलेज में अतिथि व्याख्यान देते हुए।' },
//     // { src: '/WhatsApp Image 2026-01-25 at 20.44.14.jpeg', alt: 'मीडिया कवरेज', description: 'चिकित्सा योगदान के लिए स्थानीय मीडिया में चर्चा।' },
// ];

  const achievements = [
    {
        src: '/WhatsApp Image 2026-01-25 at 20.43.55.jpeg',
        alt: 'बिहार होमियो आइकन',
        description: 'बिहार होमियो आइकन के रूप में होम्योपैथी के क्षेत्र में विशेष योगदान के लिए सम्मान।'
    },
    {
        src: '/WhatsApp Image 2026-01-25 at 20.43.56.jpeg',
        alt: 'डॉ. विश्वरूप चौधरी के साथ',
        description: 'प्रसिद्ध होम्योपैथिक विशेषज्ञ डॉ. विश्वरूप चौधरी के साथ चिकित्सकीय चर्चा के दौरान।'
    },
    {
        src: '/WhatsApp Image 2026-01-25 at 20.43.58.jpeg',
        alt: 'डॉ. शशिप्रताप यादव के साथ',
        description: 'वरिष्ठ चिकित्सक डॉ. शशिप्रताप यादव के साथ चिकित्सा अनुभव साझा करते हुए।'
    },
    {
        src: '/WhatsApp Image 2026-01-25 at 20.44.00.jpeg',
        alt: 'राष्ट्रीय होम्योपैथिक पुरस्कार',
        description: 'होम्योपैथिक चिकित्सा में उत्कृष्ट कार्य के लिए राष्ट्रीय स्तर पर सम्मानित।'
    },
    {
        src: '/WhatsApp Image 2026-01-25 at 20.44.01.jpeg',
        alt: 'बदलापुर महोत्सव',
        description: 'बदलापुर महोत्सव में स्वास्थ्य जागरूकता एवं चिकित्सा सेवा में सहभागिता।'
    },
    {
    src: '/WhatsApp Image 2026-01-25 at 20.44.12.jpeg',
    alt: 'राष्ट्रीय होम्योपैथिक सेवारत्न पुरस्कार',
    description: 'होम्योपैथिक चिकित्सा और समाज सेवा में उत्कृष्ट योगदान के लिए राष्ट्रीय होम्योपैथिक सेवारत्न पुरस्कार से सम्मानित।'
   },

    {
        src: '/WhatsApp Image 2026-01-25 at 20.44.02.jpeg',
        alt: 'होमियो यूथ आइकन',
        description: 'युवाओं को होम्योपैथी के प्रति प्रेरित करने के लिए होमियो यूथ आइकन सम्मान।'
    },
    {
    src: '/WhatsApp Image 2026-01-25 at 20.44.04.jpeg',
    alt: 'होमियो हेल्थकेयर अवॉर्ड, बैंकॉक',
    description: 'बैंकॉक में आयोजित अंतर्राष्ट्रीय कार्यक्रम में उत्कृष्ट स्वास्थ्य सेवा के लिए होमियो हेल्थकेयर अवॉर्ड से सम्मानित।'
    },

    {
        src: '/WhatsApp Image 2026-01-25 at 20.44.06.jpeg',
        alt: 'बदलापुर महोत्सव',
        description: 'बदलापुर महोत्सव में निःशुल्क चिकित्सा सेवा एवं सामाजिक योगदान का सम्मान।'
    },
];


const Achievements = () => {
    return (
        <div className="py-20 bg-gray-50 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        उपलब्धियां और पुरस्कार (Achievements & Awards)
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        हमारी चिकित्सा यात्रा के कुछ यादगार पल
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                            <div className="relative h-90 w-full overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=Image+Not+Found'; }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.alt}</h3>
                                <p className="text-gray-600 line-clamp-2">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
