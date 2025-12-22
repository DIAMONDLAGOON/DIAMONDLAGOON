import { useEffect, useState, useRef } from "react";

function Content4(props) {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);
  const url = props.url;
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top;
        setOffsetY(scrollProgress * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: 'transform'
        }}
      >
        <img
          src={url}
          alt="Biệt Thự"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        {/* Main Title */}
        <h1 className="text-xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] text-center mb-8 drop-shadow-lg">
          BIỆT THỰ
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl font-light max-w-4xl text-center mb-12 drop-shadow-md px-4">
          Trải nghiệm những căn biệt thự sang trọng với hồ bơi riêng và không gian sống rộng rãi.
        </p>

        {/* CTA Button */}
        <a href="https://www.facebook.com/huydaubua1709">
            <button className="flex items-center gap-3 px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 group">
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover:border-gray-900 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
            <span className="text-sm md:text-base font-light tracking-widest">TÌM HIỂU THÊM</span>
            </button>
        </a>
      </div>
    </div>
  );
}

export default Content4;
