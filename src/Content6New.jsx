import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DESTINATIONS = [
  {
    id: 1,
    title: "Bức tranh thiên nhiên hài hoà",
    description:
      "Di tích đền tháp Chăm Pa bí ẩn trong thung lũng. Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa.",
    image:
      "1.png",
  },
  {
    id: 2,
    title: "Kết nối cộng đồng",
    description:
      "Hệ sinh thái quan trọng của Đông Dương. Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa.",
    image:
      "2.png",
  },
  {
    id: 3,
    title: "Du lịch sinh thái hạng sang",
    description:
      "Tuyệt Tình Cốc miền Trung với trời nước bao la. Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa.",
    image:
      "3.png",
  }
];

const Content6New = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? DESTINATIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === DESTINATIONS.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(DESTINATIONS.length - 1)) return "right";
    if (diff === -1 || diff === DESTINATIONS.length - 1) return "left";
    return "hidden";
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0f1912] py-20 md:py-24 overflow-hidden flex flex-col justify-center items-center text-white">
      <div className="absolute inset-0 bg-[url('https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2FBG%202.jpg&w=3840&q=25')] bg-cover opacity-20 pointer-events-none" />

      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-semibold mb-10 md:mb-16 text-2xl md:text-4xl tracking-widest text-center z-10 drop-shadow-lg"
      >
        Khám phá khu đô thị ven đầm
      </motion.h1>

      <div 
        className="relative w-full max-w-[1400px] h-[600px] md:h-[700px] lg:h-[750px] xl:h-[800px] flex justify-center items-center px-4"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {DESTINATIONS.map((item, index) => {
            const position = getCardPosition(index);
            const isActive = position === "center";
            
            return (
              <motion.div
                key={item.id}
                onClick={() => handleCardClick(index)}
                initial={false}
                animate={{
                  x: position === "center" ? "0%" : position === "left" ? "-120%" : position === "right" ? "120%" : "0%",
                  scale: isActive ? 1 : 0.75,
                  opacity: position === "hidden" ? 0 : isActive ? 1 : 0.5,
                  zIndex: isActive ? 20 : 10,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute cursor-pointer"
                style={{
                  width: "min(85vw, 450px)",
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <motion.div 
                    className="visual-box-new relative w-full"
                    animate={{
                      height: isActive ? "520px" : "380px",
                      translateY: isActive ? "-40px" : "0px",
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <div className="image-wrapper-new w-full h-full overflow-hidden shadow-2xl relative rounded-lg">
                      <img
                        src={item.image}
                        alt="introduce"
                        className="w-full h-full object-cover select-none transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <motion.div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20"
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: isActive ? 0.3 : 0,
                      }}
                    >
                      <button className="whitespace-nowrap px-6 py-2 md:px-8 md:py-3 bg-[#b89e72] hover:bg-[#a68b5e] text-white text-[10px] md:text-xs font-sans font-bold tracking-[2px] uppercase shadow-lg transition-colors duration-300">
                        Tìm hiểu thêm
                      </button>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="text-center mt-8 w-full px-4"
                    animate={{
                      translateY: isActive ? "-30px" : "0px",
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <h3 className="text-lg md:text-2xl text-white mb-2 md:mb-3 tracking-wide font-medium drop-shadow-md">
                      {item.title}
                    </h3>

                    <motion.div 
                      className="overflow-hidden"
                      animate={{
                        maxHeight: isActive ? "100px" : "0px",
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: isActive ? 0.2 : 0,
                      }}
                    >
                      {/* <p className="text-xs md:text-sm text-gray-300 font-sans line-clamp-3 mx-auto max-w-[90%] leading-relaxed">
                        {item.description}
                      </p> */}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          onClick={handlePrev}
          className="absolute left-2 md:left-10 z-50 p-2 text-white/50 hover:text-white transition-all"
        >
          <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          onClick={handleNext}
          className="absolute right-2 md:right-10 z-50 p-2 text-white/50 hover:text-white transition-all"
        >
          <ChevronRight className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
        </motion.button>
      </div>
    </div>
  );
};

export default Content6New;
