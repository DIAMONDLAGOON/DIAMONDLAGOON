import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const DESTINATIONS = [
  {
    id: 1,
    title: "Thánh Địa Mỹ Sơn",
    description:
      "Di tích đền tháp Chăm Pa bí ẩn trong thung lũng. Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa.",
    image:
      "1.png",
  },
  {
    id: 2,
    title: "Vườn Quốc Gia Bạch Mã",
    description:
      "Hệ sinh thái quan trọng của Đông Dương. Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa.",
    image:
      "2.png",
  },
  {
    id: 3,
    title: "Đầm Lập An",
    description:
      "Tuyệt Tình Cốc miền Trung với trời nước bao la. Vẻ đẹp trầm mặc, cổ kính của kinh thành xưa.",
    image:
      "3.png",
  }
];

const SwiperCarousel = () => {
  const swiperRef = useRef(null);

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
        className="relative w-full max-w-[1400px] h-[600px] md:h-[700px] lg:h-[750px] xl:h-[800px] flex justify-center items-center"
      >
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Autoplay]}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            768: {
              spaceBetween: 40,
            },
            1024: {
              spaceBetween: 50,
            },
            1280: {
              spaceBetween: 60,
            },
          }}
          loop={true}
          slideToClickedSlide={true}
          observer={true}
          observeParents={true}
          watchSlidesProgress={true}
          speed={600}
          grabCursor={true}
          className="w-full h-full flex items-center "
        >
          {DESTINATIONS.map((item) => (
            <SwiperSlide key={item.id} className="custom-slide">
              <div className="slide-inner w-full h-full flex flex-col items-center justify-center pt-10">
                {/* KHUNG CHỨA ẢNH & NÚT 
                   (Để nút có thể canh vị trí absolute theo khung ảnh này)
                */}
                <div className="visual-box relative transition-all duration-500 ease-out">
                  {/* Wrapper cho ảnh để bo tròn và overflow hidden riêng cho ảnh */}
                  <div className="image-wrapper w-full h-full overflow-hidden shadow-2xl relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover select-none transition-transform duration-700 hover:scale-110"
                    />
                    {/* Overlay tối màu (sẽ ẩn khi active) */}
                  </div>

                  {/* NÚT TÌM HIỂU THÊM 
                      Đặt ở đây để nó nằm đè lên cạnh dưới. 
                      Dùng translate-y-1/2 để tâm nút nằm ngay đường biên.
                  */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 opacity-0 btn-wrapper transition-all duration-500 delay-100">
                    <button className="whitespace-nowrap px-6 py-2 md:px-8 md:py-3 bg-[#b89e72] hover:bg-[#a68b5e] text-white text-[10px] md:text-xs font-sans font-bold tracking-[2px] uppercase shadow-lg transition-colors duration-300">
                      Tìm hiểu thêm
                    </button>
                  </div>
                </div>

                {/* Phần NỘI DUNG CHỮ (Nằm bên dưới) */}
                <div className="text-center mt-5 transition-all duration-500 w-full px-4 content-box">
                  <h3 className="text-lg md:text-2xl text-white mb-2 md:mb-3 tracking-wide font-medium drop-shadow-md">
                    {item.title}
                  </h3>

                  {/* Description chỉ hiện khi active */}
                  <div className="desc-wrapper overflow-hidden transition-all duration-500 max-h-0 opacity-0">
                    <p className="text-xs md:text-sm text-gray-300 font-sans line-clamp-3 mx-auto max-w-[90%] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 md:left-10 z-50 p-2 text-white/50 hover:text-white transition-all"
        >
          <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 md:right-10 z-50 p-2 text-white/50 hover:text-white transition-all"
        >
          <ChevronRight className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
        </motion.button>
      </div>

      <style jsx global>{`
        /* 1. CẤU HÌNH SLIDE CƠ BẢN */
        .custom-slide {
          width: 70vw;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Mặc định mờ đi, không ẩn hoàn toàn để khi kéo vẫn thấy */
          opacity: 0.4;
          transition: opacity 0.4s ease;
        }

        @media (min-width: 768px) {
          .custom-slide {
            width: 300px;
          }
        }

        @media (min-width: 1024px) {
          .custom-slide {
            width: 340px;
          }
        }

        @media (min-width: 1280px) {
          .custom-slide {
            width: 380px;
          }
        }

        /* SLIDE ĐANG ACTIVE SẼ SÁNG RÕ */
        .swiper-slide-active,
        .swiper-slide-duplicate-active {
          opacity: 1 !important;
          z-index: 20;
        }

        /* 2. Style Khung Ảnh (Visual Box) */
        .visual-box {
          width: 100%;
          height: 280px; /* Chiều cao mặc định mobile */
          transform: translateY(0);
        }

        @media (min-width: 768px) {
          .visual-box {
            height: 300px;
          }
        }

        @media (min-width: 1024px) {
          .visual-box {
            height: 340px;
          }
        }

        @media (min-width: 1280px) {
          .visual-box {
            height: 380px;
          }
        }

        /* 3. TRẠNG THÁI ACTIVE */

        /* Khi Active: Tăng chiều cao khung ảnh & Đẩy lên */
        .swiper-slide-active .visual-box,
        .swiper-slide-duplicate-active .visual-box {
          height: 380px;
          transform: translateY(-40px);
          z-index: 10;
        }

        @media (min-width: 768px) {
          .swiper-slide-active .visual-box,
          .swiper-slide-duplicate-active .visual-box {
            height: 380px;
            transform: translateY(-50px);
          }
        }

        @media (min-width: 1024px) {
          .swiper-slide-active .visual-box,
          .swiper-slide-duplicate-active .visual-box {
            height: 440px;
            transform: translateY(-70px);
          }
        }

        @media (min-width: 1280px) {
          .swiper-slide-active .visual-box,
          .swiper-slide-duplicate-active .visual-box {
            height: 480px;
            transform: translateY(-80px);
          }
        }

        /* Khi Active: Xóa lớp đen mờ */
        .swiper-slide-active .overlay-dim,
        .swiper-slide-duplicate-active .overlay-dim {
          opacity: 0;
        }

        /* Khi Active: Hiện nút bấm */
        .swiper-slide-active .btn-wrapper,
        .swiper-slide-duplicate-active .btn-wrapper {
          opacity: 1;
        }

        /* Khi Active: Đẩy phần chữ lên theo */
        .swiper-slide-active .content-box,
        .swiper-slide-duplicate-active .content-box {
          transform: translateY(-30px);
        }

        /* Khi Active: Hiện mô tả */
        .swiper-slide-active .desc-wrapper,
        .swiper-slide-duplicate-active .desc-wrapper {
          max-height: 100px;
          opacity: 1;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default SwiperCarousel;
