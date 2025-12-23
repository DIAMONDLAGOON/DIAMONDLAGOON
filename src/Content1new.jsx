import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

function Content1new() {
  const containerRef = useRef(null);


  return (
    <section className="min-h-[550px] md:w-full mx-0 md:mx-auto justify-center px-0 lg:px-5 flex flex-col lg:flex-row lg:gap-0 items-stretch bg-[#e8e6e1] py-12 md:py-18 lg:py-25 overflow-hidden">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="order-2 lg:order-1 w-full px-8 lg:px-0 py-10 lg:w-[35%] lg:pr-10 lg:max-w-[500px] space-y-6 lg:space-y-8 "
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[2rem] leading-10 whitespace-pre-wrap font-display font-semibold sm:text-[2rem] md:text-[2rem] text-[#082B26] tracking-[5px]"
        >
          GIỚI THIỆU
        </motion.h2>

        <div className="pl-0 md:pl-8 space-y-4">
          <div className="space-y-4 font-niramit text-justify text-[#082B26] font-[400px] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Trong bối cảnh biến đổi khí hậu, sự suy giảm hệ sinh thái ven đầm và áp lực <span className="font-bold">đô thị hóa</span>, đồ án đề xuất chiến lược quy hoạch một <span className="font-bold">khu đô thị sinh thái chuyển tiếp</span> tại khu vực Thôn Vinh Quang 2 – Đầm Thị Nại – Cồn Chim.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Mục tiêu của đồ án không chỉ cải thiện chất lượng sống, mà còn hướng tới mô hình <span className="font-bold">"Đô thị du lịch sinh thái"</span>, nơi cư dân phát triển kinh tế dựa trên dịch vụ du lịch và nuôi trồng bền vững, song hành cùng việc tái tạo cảnh quan, phục hội và bảo tồn đa dạng sinh học Đầm Thị Nại.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Right Image Comparison Slider */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:max-w-[900px] order-1 lg:order-2 cursor-grab"
      >
        <div
          ref={containerRef}
          className="relative mx-auto w-full h-[300px] lg:h-full select-none"
        >
        
          {/* Foreground Image (Left Side) - với clip-path */}
          <img
            src="gioithieu.png"
            alt="Pool Villa"
            className="absolute p-0 mx-0 my-0 inset-0 w-full h-full object-cover"
            draggable="false"
          />

        </div>
      </motion.div>
    </section>
  );
}

export default Content1new;
