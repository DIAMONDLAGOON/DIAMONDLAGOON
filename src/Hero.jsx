import { useEffect, useState } from 'react'

function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform'
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-135"
        >
          <source src="TEST.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <img src="LOGO.png" alt="Logo" className="w-40 h-40 mb-6" />
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-[0.3em] text-center mb-8 drop-shadow-lg">
          DIAMOND LAGOON 
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 drop-shadow-md">
          Viên bảo ngọc thuần khiết giữa đầm Thị Nại
        </p>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg font-light max-w-3xl text-center drop-shadow-md px-4">
          Đô thị ven đầm: Thích ứng với biến đổi khí hậu & tái sinh sinh kế bền vững  vùng ven đầm trên nền phát triển du lịch sinh thái gắn kết cộng đồng Cồn Chim
        </p>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3 text-white text-sm z-10">
        <a href="#" className="hover:underline transition-all">Trang Chủ</a>
        <span className="opacity-60">&gt;</span>
        <a href="#" className="hover:underline transition-all">Vietnam</a>
        <span className="opacity-60">&gt;</span>
        <span className="font-semibold">Banyan Tree Lãng Cô</span>
      </div>

      {/* Chat Icon */}
      {/* <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-white/90 hover:bg-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110">
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}

export default Hero
