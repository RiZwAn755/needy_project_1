import { motion } from "framer-motion";

const videos = [
  { src: "/video1.mp4", alt: "Video 1" },
  { src: "/video2.mp4", alt: "Video 2" },
  { src: "/video3.mp4", alt: "Video 3" },
];

const Videos = () => {
  return (
    <section className="py-20 bg-gray-50/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            वीडियो (Videos)
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            हमारे उपचार और सेवाओं के बारे में जानें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((vid, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black group"
            >
              <video
                src={vid.src}
                className="absolute inset-0 w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <p className="text-white font-medium text-center px-4">
                  {vid.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Videos;
