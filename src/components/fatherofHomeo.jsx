import { BookOpen, Quote } from "lucide-react";
import { motion } from "framer-motion";

const FatherOfHomeopathy = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            होम्योपैथी के जनक
          </h2>
          <p className="mt-4 text-xl text-gray-500">Father of Homeopathy</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* CONTENT FIRST */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <BookOpen className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                डॉ. सैमुअल हैनिमैन
              </h3>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                डॉ. सैमुअल हैनिमैन को होम्योपैथी चिकित्सा पद्धति का जनक माना
                जाता है। उन्होंने 18वीं शताब्दी में इस प्राकृतिक चिकित्सा
                प्रणाली की स्थापना की, जिसका मूल सिद्धांत है —
                <strong> “जैसा रोग, वैसा उपचार”</strong>।
              </p>

              <p>
                उनका मानना था कि शरीर में स्वयं रोग से लड़ने की अद्भुत क्षमता
                होती है, जिसे सूक्ष्म और सही औषधियों द्वारा सक्रिय किया जा सकता
                है। इसी विचारधारा से होम्योपैथी का विकास हुआ।
              </p>

              <p>
                होम्योपैथी रोग के लक्षणों के साथ-साथ उसके मूल कारण पर कार्य करती
                है और शरीर, मन एवं आत्मा का संतुलन स्थापित करती है।
              </p>
            </div>

            {/* Philosophy Box */}
            <div className="mt-8 p-6 bg-white rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-start">
                <Quote className="w-6 h-6 text-blue-500 mr-3 mt-1" aria-hidden="true" />
                <p className="text-gray-700 font-medium">
                  होम्योपैथी का उद्देश्य शरीर की प्राकृतिक उपचार शक्ति को जागृत
                  करना है।
                </p>
              </div>
            </div>
          </motion.div>

          {/* IMAGE SECOND */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-72 sm:w-80 lg:w-96">
              <img
                src="/father.webp"
                alt="Dr. Samuel Hahnemann - Father of Homeopathy"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Quote Badge */}
            <div className="absolute -bottom-6 right-6 bg-white px-6 py-3 rounded-xl shadow-xl border border-blue-100">
              <p className="text-blue-700 font-semibold italic">
                “Similia Similibus Curentur”
              </p>
              <p className="text-sm text-gray-500 text-right">
                — Dr. Samuel Hahnemann
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FatherOfHomeopathy;
