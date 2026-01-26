import { Thermometer, Zap, Droplet, Sun, Wind, Activity } from "lucide-react";

const treatments = [
    {
        title: "त्वचा रोग (Skin Diseases)",
        desc: "सोरायसिस, एक्जिमा और एलर्जी का प्रभावी और स्थायी इलाज।",
        icon: <Thermometer className="w-6 h-6" />,
        image: "https://placehold.co/600x400/fee2e2/dc2626?text=Skin+Care",
    },
    {
        title: "सांस की समस्याएं (Respiratory)",
        desc: "अस्थमा, साइनसाइटिस और ब्रोंकाइटिस से प्राकृतिक राहत।",
        icon: <Wind className="w-6 h-6" />,
        image: "https://placehold.co/600x400/dbeafe/2563eb?text=Respiratory",
    },
    {
        title: "पाचन विकार (Digestive)",
        desc: "गैस, एसिडिटी और कब्ज जैसी समस्याओं का जड़ से समाधान।",
        icon: <Droplet className="w-6 h-6" />,
        image: "https://placehold.co/600x400/fee2e2/dc2626?text=Digestive",
    },
    {
        title: "जोड़ों का दर्द (Joint Pain)",
        desc: "गठिया और पुराने दर्द में आरामदायक सुधार।",
        icon: <Activity className="w-6 h-6" />,
        image: "https://placehold.co/600x400/dbeafe/2563eb?text=Joint+Pain",
    },
    {
        title: "मौसमी बीमारियां (Viral Fever)",
        desc: "बुखार, सर्दी और वायरल संक्रमण के लिए सुरक्षित दवाएं।",
        icon: <Sun className="w-6 h-6" />,
        image: "https://placehold.co/600x400/fee2e2/dc2626?text=Viral+Fever",
    },
    {
        title: "पुराने रोग (Chronic Diseases)",
        desc: "लंबे समय से चल रही बीमारियों का विशेष उपचार।",
        icon: <Zap className="w-6 h-6" />,
        image: "https://placehold.co/600x400/dbeafe/2563eb?text=Chronic+Diseases",
    },
];

const Treatments = () => {
    return (
        <div className="py-20 relative overflow-hidden bg-white">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                <img
                    src="/medical-decor.png"
                    alt="decor"
                    className="w-full h-full object-cover mix-blend-multiply"
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
