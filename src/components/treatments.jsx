import { Thermometer, Zap, Droplet, Sun, Wind, Activity, Heart, Shield } from "lucide-react";

const treatments = [
    {
        title: "गुर्दा पथरी (Kidney Stone)",
        desc: "गुर्दे की पथरी को प्राकृतिक तरीके से घोलने और दोबारा बनने से रोकने का प्रभावी उपचार।",
        icon: <Droplet className="w-6 h-6" />,
        image: "https://placehold.co/600x400/e0f2fe/0284c7?text=Kidney+Stone",
    },
    {
        title: "बाँझपन (Infertility)",
        desc: "पुरुष एवं महिला दोनों में बाँझपन की समस्या के लिए सुरक्षित और प्राकृतिक उपचार।",
        icon: <Heart className="w-6 h-6" />,
        image: "https://placehold.co/600x400/fce7f3/db2777?text=Infertility",
    },
    {
        title: "स्तन की गाँठ (Breast Lump)",
        desc: "स्तन में बनने वाली गाँठ, दर्द और सूजन के लिए बिना सर्जरी उपचार।",
        icon: <Activity className="w-6 h-6" />,
        image: "https://placehold.co/600x400/fee2e2/dc2626?text=Breast+Lump",
    },
    {
        title: "बच्चेदानी की गाँठ (Uterine Fibroid)",
        desc: "बच्चेदानी में बनने वाली गाँठ (फाइब्रॉइड) का प्राकृतिक और सुरक्षित इलाज।",
        icon: <Shield className="w-6 h-6" />,
        image: "https://placehold.co/600x400/fdf4ff/9333ea?text=Uterine+Fibroid",
    },
    {
        title: "उभरी हुई गाँठ (Swelling / Lump)",
        desc: "शरीर के किसी भी भाग में उभरी हुई गाँठ के लिए प्रभावी प्राकृतिक उपचार।",
        icon: <Zap className="w-6 h-6" />,
        image: "https://placehold.co/600x400/ecfeff/0891b2?text=Body+Lump",
    },
];

const Treatments = () => {
    return (
        <div className="py-20 relative overflow-hidden bg-white">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                <img
                    src="/medical-decor.webp"
                    alt="decor"
                    className="w-full h-full object-cover mix-blend-multiply"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                    <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                        हमारी विशेषज्ञता
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        प्रमुख उपचार
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        हम विभिन्न प्रकार की बीमारियों के लिए व्यक्तिगत और प्रभावी होम्योपैथिक
                        उपचार प्रदान करते हैं।
                    </p>
                </div>
            </div>

            {/* Sliding Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Marquee Row */}
                <div className="flex gap-8 w-max animate-scroll-right will-change-transform py-4">
                    {[...treatments, ...treatments].map((treatment, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>

                                <img
                                    src={treatment.image}
                                    alt={treatment.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow-lg">
                                    <div className="text-red-600">{treatment.icon}</div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                                    {treatment.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                                    {treatment.desc}
                                </p>
                            </div>

                            <div className="h-1 w-full bg-gradient-to-r from-red-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS inside component for easy copy paste */}
            <style>
                {`
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }

          .animate-scroll-right {
            animation: scroll-right 25s linear infinite;
          }

          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}
            </style>
        </div>
    );
};

export default Treatments;
