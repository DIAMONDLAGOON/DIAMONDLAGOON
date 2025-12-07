import { useState } from 'react'
import './App.css'

function App() { 
  const [language, setLanguage] = useState('vi')
  const [activeTab, setActiveTab] = useState('longan')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredArea, setHoveredArea] = useState(null)

  return (
    <div className="min-h-screen relative">
      {/* Header with gradient background */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-900/50  to-blue-900/10 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          {/* Mobile Header */}
          <div className="flex md:hidden items-center justify-between">
            <img 
              src="https://waterpoint.com.vn/storage/images/waterpoint-logo-whitebg-150.png" 
              alt="Waterpoint Logo" 
              className="w-16 h-16 object-contain bg-white/90 rounded p-1"
            />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-12">
            {/* Left Navigation */}
            <a href="#" className="text-white text-xs lg:text-sm font-semibold hover:text-blue-200 transition whitespace-nowrap">
              QUY HOẠCH & TIỆN ÍCH
            </a>
            <a href="#" className="text-white text-xs lg:text-sm font-semibold hover:text-blue-200 transition whitespace-nowrap">
              PHÂN KHU & SẢN PHẨM
            </a>
            <a href="#" className="text-white text-xs lg:text-sm font-semibold hover:text-blue-200 transition whitespace-nowrap">
              TIN TỨC & TIẾN ĐỘ
            </a>

            {/* Center Logo */}
            <div className="flex flex-col items-center">
              <img 
                src="https://waterpoint.com.vn/storage/images/waterpoint-logo-whitebg-150.png" 
                alt="Waterpoint Logo" 
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
              />
            </div>

            {/* Right Navigation */}
            <a href="#" className="text-white text-xs lg:text-sm font-semibold hover:text-blue-200 transition whitespace-nowrap">
              TÀI LIỆU & THÔNG BÁO
            </a>
            <a href="#" className="text-white text-xs lg:text-sm font-semibold hover:text-blue-200 transition whitespace-nowrap">
              CHỦ ĐẦU TƯ
            </a>
            <a href="#" className="text-white text-xs lg:text-sm font-semibold hover:text-blue-200 transition whitespace-nowrap">
              LIÊN HỆ
            </a>
            
            {/* Language Switcher */}
            <div className="flex gap-2 ml-2 lg:ml-4">
              <button 
                className={`w-8 h-6 rounded overflow-hidden border-2 transition ${
                  language === 'en' ? 'border-white' : 'border-white/40'
                }`}
                onClick={() => setLanguage('en')}
              >
                <div className="w-full h-full bg-gradient-to-b from-blue-600 via-white to-red-600"></div>
              </button>
              <button 
                className={`w-8 h-6 rounded overflow-hidden border-2 transition ${
                  language === 'vi' ? 'border-white' : 'border-white/40'
                }`}
                onClick={() => setLanguage('vi')}
              >
                <div className="w-full h-full bg-gradient-to-b from-red-600 via-yellow-400 to-red-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-yellow-400 text-lg">★</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#" className="block text-white text-sm font-semibold hover:text-blue-200 transition py-2">
                QUY HOẠCH & TIỆN ÍCH
              </a>
              <a href="#" className="block text-white text-sm font-semibold hover:text-blue-200 transition py-2">
                PHÂN KHU & SẢN PHẨM
              </a>
              <a href="#" className="block text-white text-sm font-semibold hover:text-blue-200 transition py-2">
                TIN TỨC & TIẾN ĐỘ
              </a>
              <a href="#" className="block text-white text-sm font-semibold hover:text-blue-200 transition py-2">
                TÀI LIỆU & THÔNG BÁO
              </a>
              <a href="#" className="block text-white text-sm font-semibold hover:text-blue-200 transition py-2">
                CHỦ ĐẦU TƯ
              </a>
              <a href="#" className="block text-white text-sm font-semibold hover:text-blue-200 transition py-2">
                LIÊN HỆ
              </a>
              <div className="flex gap-2 pt-2">
                <button 
                  className={`w-8 h-6 rounded overflow-hidden border-2 transition ${
                    language === 'en' ? 'border-white' : 'border-white/40'
                  }`}
                  onClick={() => setLanguage('en')}
                >
                  <div className="w-full h-full bg-gradient-to-b from-blue-600 via-white to-red-600"></div>
                </button>
                <button 
                  className={`w-8 h-6 rounded overflow-hidden border-2 transition ${
                    language === 'vi' ? 'border-white' : 'border-white/40'
                  }`}
                  onClick={() => setLanguage('vi')}
                >
                  <div className="w-full h-full bg-gradient-to-b from-red-600 via-yellow-400 to-red-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-yellow-400 text-lg">★</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="h-screen md:min-h-screen bg-cover bg-center relative flex items-center pt-16 md:pt-0"
        style={{
          backgroundImage: 'url(https://waterpoint.com.vn/storage/images/waterpoint-map-tongthe-1920-960-2023.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-transparent"></div>
      </section>

      {/* Floating Action Buttons */}
      {/* <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </button>
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
        </button>
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
        </button>
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
          </svg>
        </button>
      </div> */}

      {/* Overview Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-8 md:mb-16">
            TỔNG QUAN
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              "Thành phố bên sông" Waterpoint 355ha được biết đến là khu đô thị tích hợp hàng đầu tại của ngõ Tây Nam TP.HCM sở hữu địa thế phong thủy thịnh vượng trên bãi bồi được bao bọc bởi 5,8km sông Vàm Cỏ Đông.
            </p>
            
            <p>
              Quy hoạch đẳng cấp theo mô hình "modern township" quốc tế, hệ sinh thái tiện ích "All-in-one" của Waterpoint thỏa mãn tất cả 5 nhu cầu trụ cột thiết yếu: Sống – làm việc – học tập – vui chơi – giải trí – mua sắm nhờ được xây dựng trên 4 nền tảng quan trọng: Hạ tầng kết nối đồng bộ, quy hoạch khu đô thị phức hợp với các chương trình tạo điểm đến, công nghệ tiên tiến và dịch vụ quản lý vận hành thông minh.
            </p>
            
            <p>
              Không chỉ là môi trường sống chất lượng, Waterpoint còn đem đến những trải nghiệm vô cùng độc đáo, đáp ứng trọn vẹn các xu hướng sống xanh, sống bình yên, sống khỏe, sống tiện nghi, sống hiện đại và sống kết nối.
            </p>
          </div>
        </div>
      </section>

      {/* Planning & Amenities Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-8 md:mb-16 px-4 md:px-8">
            QUY HOẠCH & TIỆN ÍCH
          </h2>
          
          <div className="relative inline-block w-full">
            {/* 1. Ảnh gốc */}
            <img 
              src="https://waterpoint.com.vn/storage/images/waterpoint-map-tongthe-1920-960-2023.jpg" 
              alt="Map"
              className="block w-full h-auto"
            />
          
            {/* 2. Lớp phủ SVG */}
            {/* viewBox="0 0 [WIDTH] [HEIGHT]" - Phải khớp kích thước ảnh gốc để toạ độ chính xác */}
            <svg 
              viewBox="0 0 1920 960" 
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <a 
                className="relative" 
                href="https://javascript.info/try-catch" 
                target="_self"
                onMouseEnter={() => setHoveredArea('area1')}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <polygon 
                  /* Toạ độ từ coords của bạn */
                  points="968,522,962,550,962,572,968,616,968,657,946,657,943,685,962,688,959,707,879,697,760,682,681,682,593,692,609,512,760,515,899,519,902,499,971,499"
                  
                  /* Style: Mặc định trong suốt, Hover thì hiện màu */
                  className="fill-transparent stroke-transparent hover:fill-white/40 hover:stroke-green-500/50 stroke-6 cursor-pointer transition-all duration-300 pointer-events-auto"
                />
              </a>
              <a 
                className="relative" 
                href="https://javascript.info/try-catch" 
                target="_self"
                onMouseEnter={() => setHoveredArea('area2')}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <polygon 
                  /* Toạ độ từ coords của bạn */
                  points="968,262,573,475,608,480,608,508,902,515,906,484,1099,488,1154,465"
                  
                  /* Style: Mặc định trong suốt, Hover thì hiện màu */
                  className="fill-transparent stroke-transparent hover:fill-white/40 hover:stroke-green-500/50 stroke-6 cursor-pointer transition-all duration-300 pointer-events-auto"
                />
              </a>
              <a 
                className="relative" 
                href="https://javascript.info/try-catch" 
                target="_self"
                onMouseEnter={() => setHoveredArea('area3')}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <polygon 
                  /* Toạ độ từ coords của bạn */
                  points="931,218,1182,490,1518,534,1280,306,1145,323,1136,310,1126,306,1111,305,1094,308,1078,300,1070,238"
                  
                  /* Style: Mặc định trong suốt, Hover thì hiện màu */
                  className="fill-transparent stroke-transparent hover:fill-white/40 hover:stroke-yellow-500/50 stroke-6 cursor-pointer transition-all duration-300 pointer-events-auto"
                />
              </a>
              <a 
                className="relative" 
                href="https://javascript.info/try-catch" 
                target="_self"
                onMouseEnter={() => setHoveredArea('area4')}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <polygon 
                  /* Toạ độ từ coords của bạn */
                  points="400,403,393,444,417,473,571,476,965,261,927,219,855,195,839,214,827,229,809,246,780,265,739,288,697,311,668,322,649,334,609,358,563,382,512,394,471,402"
                  
                  /* Style: Mặc định trong suốt, Hover thì hiện màu */
                  className="fill-transparent stroke-transparent hover:fill-white/40 hover:stroke-green-500/50 stroke-6 cursor-pointer transition-all duration-300 pointer-events-auto"
                />
              </a>
            </svg>

            {/* Tooltip hiển thị khi hover */}
            {hoveredArea === 'area1' && (
              <div 
                className="absolute animate-fadeIn top-[30%] left-[10%] z-10 bg-white/90 shadow-2xl rounded-lg p-6 border-2 border-teal-500 pointer-events-none "
                style={{
                  maxWidth: '400px'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-teal-700 mb-2">PHÂN KHU AQUARIA</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Đối xứng với Rivera là phân khu Aquaria, cũng tiếp giáp mặt sông cho tầm nhìn khoáng đạt và Bến du thuyền riêng, hệ thống kênh đào len lỏi toàn khu tạo nên bầu không khí trong lành mát mẻ,… khiến mỗi ngôi nhà ở đây trở thành một tổ ấm yên bình, là nơi thả mình sau những lo toan, là nơi đáng sống và để thuộc về…
                    </p>
                    {/* <button className="mt-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                      Xem chi tiết →
                    </button> */}
                  </div>
                </div>
              </div>
            )}
            {/* Tooltip hiển thị khi hover */}
            {hoveredArea === 'area2' && (
              <div 
                className="absolute animate-fadeIn top-[20%] left-[20%] z-10 bg-white/90 shadow-2xl rounded-lg p-6 border-2 border-teal-500 pointer-events-none "
                style={{
                  maxWidth: '400px'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-teal-700 mb-2">PHÂN KHU AQUARIA</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Đối xứng với Rivera là phân khu Aquaria, cũng tiếp giáp mặt sông cho tầm nhìn khoáng đạt và Bến du thuyền riêng, hệ thống kênh đào len lỏi toàn khu tạo nên bầu không khí trong lành mát mẻ,… khiến mỗi ngôi nhà ở đây trở thành một tổ ấm yên bình, là nơi thả mình sau những lo toan, là nơi đáng sống và để thuộc về…
                    </p>
                    {/* <button className="mt-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                      Xem chi tiết →
                    </button> */}
                  </div>
                </div>
              </div>
            )}
            {hoveredArea === 'area3' && (
              <div 
                className="absolute animate-fadeIn top-[20%] left-[70%] z-10 bg-white/90 shadow-2xl rounded-lg p-6 border-2 border-teal-500 pointer-events-none "
                style={{
                  maxWidth: '400px'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-teal-700 mb-2">PHÂN KHU AQUARIA</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Đối xứng với Rivera là phân khu Aquaria, cũng tiếp giáp mặt sông cho tầm nhìn khoáng đạt và Bến du thuyền riêng, hệ thống kênh đào len lỏi toàn khu tạo nên bầu không khí trong lành mát mẻ,… khiến mỗi ngôi nhà ở đây trở thành một tổ ấm yên bình, là nơi thả mình sau những lo toan, là nơi đáng sống và để thuộc về…
                    </p>
                    {/* <button className="mt-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                      Xem chi tiết →
                    </button> */}
                  </div>
                </div>
              </div>
            )}
            {hoveredArea === 'area4' && (
              <div 
                className="absolute animate-fadeIn top-[20%] left-[10%] z-10 bg-white/90 shadow-2xl rounded-lg p-6 border-2 border-teal-500 pointer-events-none "
                style={{
                  maxWidth: '400px'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-teal-700 mb-2">PHÂN KHU AQUARIA</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Đối xứng với Rivera là phân khu Aquaria, cũng tiếp giáp mặt sông cho tầm nhìn khoáng đạt và Bến du thuyền riêng, hệ thống kênh đào len lỏi toàn khu tạo nên bầu không khí trong lành mát mẻ,… khiến mỗi ngôi nhà ở đây trở thành một tổ ấm yên bình, là nơi thả mình sau những lo toan, là nơi đáng sống và để thuộc về…
                    </p>
                    {/* <button className="mt-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                      Xem chi tiết →
                    </button> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Available Zones Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-8 md:mb-16">
            PHÂN KHU ĐANG MỞ BÁN
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Park Village */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
                <img 
                  src="https://waterpoint.com.vn/storage/images/home/E2-sunset-1092x614.jpg" 
                  alt="Park Village" 
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 text-center">
                KHU COMPOUND GRAND VILLA – PARK VILLAGE
              </h3>
            </div>

            {/* The Aqua */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
                <img 
                  src="https://waterpoint.com.vn/storage/images/home/the-aqua-728x409.jpg" 
                  alt="The Aqua" 
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 text-center">
                KHU COMPOUND GRAND VILLA – THE AQUA
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-8 md:mb-16">
            SẢN PHẨM ĐANG MỞ BÁN
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Park Village Product */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
                <img 
                  src="https://waterpoint.com.vn/storage/images/home/RI-VC1_1-1-728x409.jpg" 
                  alt="Compound Grand Villa Park Village" 
                  className="w-full h-[250px] md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-2">
                Compound Grand Villa
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                (Kiệt tác Villa phong cách Âu – Park Village )
              </p>
            </div>

            {/* The Aqua Product */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
                <img 
                  src="https://waterpoint.com.vn/storage/images/home/canal-580x326.jpg" 
                  alt="Compound Grand Villa The Aqua" 
                  className="w-full h-[250px] md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-2">
                Compound Grand Villa
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                Bồ sưu tập hạng sang - The Aqua
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Location Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-2 md:mb-4">
            "TOẠ ĐỘ VÀNG"
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center text-blue-900 mb-8 md:mb-12">
            Bến Lức, Long An
          </p>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto">
            <div className="grid grid-cols-3 w-full max-w-[1000px] border-2 border-teal-600 min-w-[320px]">
              <button 
                className={`py-3 md:py-4 px-2 md:px-6 text-xs md:text-sm lg:text-base font-bold transition-colors ${
                  activeTab === 'longan' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-white text-teal-600 hover:bg-teal-50'
                }`}
                onClick={() => setActiveTab('longan')}
              >
                LONG AN
              </button>
              <button 
                className={`py-3 md:py-4 px-2 md:px-6 text-xs md:text-sm lg:text-base font-bold transition-colors border-x-2 border-teal-600 ${
                  activeTab === 'giaothongduongbo' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-white text-teal-600 hover:bg-teal-50'
                }`}
                onClick={() => setActiveTab('giaothongduongbo')}
              >
                <span className="hidden md:inline">GIAO THÔNG ĐƯỜNG BỘ</span>
                <span className="md:hidden">GT ĐƯỜNG BỘ</span>
              </button>
              <button 
                className={`py-3 md:py-4 px-2 md:px-6 text-xs md:text-sm lg:text-base font-bold transition-colors ${
                  activeTab === 'giaothongduongthuy' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-white text-teal-600 hover:bg-teal-50'
                }`}
                onClick={() => setActiveTab('giaothongduongthuy')}
              >
                <span className="hidden md:inline">GIAO THÔNG ĐƯỜNG THỦY</span>
                <span className="md:hidden">GT ĐTHỦY</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-300">
            {activeTab === 'longan' && (
              <div className="animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Long An - một trong bảy đô thị vệ tinh của TP.HCM, là tâm điểm của vùng động lực kinh tế cấp quốc gia TP.HCM - Đồng bằng sông Cửu Long với 35 triệu dân và 65% GDP Việt Nam. Waterpoint sở hữu "toạ độ vàng" tại Bến Lức, Long An với 6 động lực tăng giá:
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600 font-bold">1.</span>
                      <p className="text-gray-700">Là cửa ngõ của hai vùng động lực kinh tế cấp quốc gia</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600 font-bold">2.</span>
                      <p className="text-gray-700">Nằm trong 7 khu đô thị vệ tinh của vùng TP. HCM</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600 font-bold">3.</span>
                      <p className="text-gray-700">Cửa ngõ Bắc Bến Lức vùng phát triển nhất Long An</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600 font-bold">4.</span>
                      <p className="text-gray-700">Nút giao thông đường bộ trọng điểm</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600 font-bold">5.</span>
                      <p className="text-gray-700">Ngã ba sông kết nối TP. HCM và miền Tây</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600 font-bold">6.</span>
                      <p className="text-gray-700">Vị trí phong thủy số một: cần lộ, cần giang, cần thị</p>
                    </div>
                  </div>
                </div>
                <div className="w-full -mx-8">
                  <img 
                    src="https://waterpoint.com.vn/storage/images/caotoc%20(1).png" 
                    alt="Long An Map" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}

            {activeTab === 'giaothongduongbo' && (
              <div className="animate-fadeIn">
                <p className="text-2xl text-teal-600 text-center font-bold mb-12">
                  WATERPOINT Nằm ngay tâm điểm giao thông đường bộ của vùng kinh tế động lực
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      ĐƯỜNG CAO TÓC TPHCM – TRUNG LƯƠNG
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Nằm ngay mặt tiền Tỉnh lộ 830 (Vành đai 4) kết nối từ lối ra đầu tiên của cao tốc TPHCM – Trung Lương tới quốc lộ 22 (huyện Củ Chi).
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      VÀNH ĐAI 3 VÀ CAO TỐC BẾN LỨC – LONG THÀNH
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dễ dàng kết nối với đường Vành đai 3 liên kết vùng TPHCM, Long An, Đồng Nai, Bình Dương. Đặc biệt, Waterpoint nằm gần điểm đầu của tuyến cao tốc Bến Lức – Long Thành kết nối thông suốt đến sân bay Long Thành.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      ĐẠI LỘ NGUYỄN VĂN LINH – CAO TỐC TPHCM – LONG THÀNH – DẦU GIÂY
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ngoài cao tốc Bến Lức – Long Thành, từ Waterpoint còn có thể đến sân bay quốc tế Long Thành hay đi các tỉnh miền Trung rất nhanh chóng thông qua đại lộ Nguyễn Văn Linh kết nối cao tốc TPHCM – Long Thành – Dầu Giây, quốc lộ 1A
                    </p>
                  </div>
                </div>
                <div className="w-full -mx-8">
                  <img 
                    src="https://waterpoint.com.vn/storage/images/Duongbo-01%20(2).jpg" 
                    alt="Giao thông đường bộ" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}

            {activeTab === 'giaothongduongthuy' && (
              <div className="animate-fadeIn">
                <p className="text-2xl text-teal-600 text-center font-bold mb-12">
                  WATERPOINT Nằm ngay tâm điểm giao thông đường thủy của vùng kinh tế động lực
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      NÚT GIAO THÔNG ĐƯỜNG THỦY HUYẾT MẠCH TỈNH LONG AN
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ngã 3 sông Vàm Cỏ Đông – nút giao thông quan trọng nhất của hệ thống giao thông đường thủy Long An và các tỉnh ĐBSCL
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      KẾT NỐI TRỰC TIẾP ĐẾN HỆ THỐNG CẢNG QUỐC TẾ PHÍA NAM
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Kết nối trực tiếp đến hệ thống cảng quốc tế như cảng Long An, cảng Hiệp Phước, Cát Lái và Cái Mép – Thị Vải...
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      TÂM ĐIỂM GIAO THƯƠNG ĐƯỜNG THỦY ĐỒNG BẰNG SÔNG CỬU LONG
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Kết nối trực tiếp đi các tỉnh thành ĐBSCL, TPHCM, Tây Ninh và sang Campuchia...
                    </p>
                  </div>
                </div>
                <div className="w-full -mx-8">
                  <img 
                    src="https://waterpoint.com.vn/storage/images/Duongthuy-01%20(1).jpg" 
                    alt="Giao thông đường thủy" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sustainable Community Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-6 md:mb-8">
            THIÊN NHIÊN HÀI HOÀ, CỘNG ĐỒNG BỀN VỮNG
          </h2>
          
          <div className="text-center max-w-[900px] mx-auto mb-8 md:mb-12 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              Waterpoint là một thành phố vườn khí, êm ả và hạnh phúc. Sống nơi đây là sống tận hưởng trọn vẹn giữa miền thiên nhiên an lành bên dòng sông hiền hoà; là ấm áp những phút giây sum vầy, an yên của ông bà bên con cháu yêu thương; là chốn trở về thanh bình; là nơi trường tồn bởi những trải nghiệm đắc biệt của chỉ cộng đồng thân thiện Waterpoint ...;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Card 1 - Bức tranh thiên nhiên hài hoà */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-[400px] md:h-[500px]">
              <img 
                src="https://waterpoint.com.vn/storage/images/Artboard-%E2%80%93-7.png" 
                alt="Bức tranh thiên nhiên hài hoà" 
                className="w-full h-full object-cover transition-transform duration-300 scale-110 group-hover:translate-x-[20px]"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 transition-all duration-300 flex flex-col items-start justify-start p-8 text-white">
                <div className="mb-6">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17,8C17,10.76 14.76,13 12,13C9.24,13 7,10.76 7,8S9.24,3 12,3C14.76,3 17,5.24 17,8M17,16L18.5,17.5L17,19L15.5,17.5L17,16M12.5,11C13.33,11 14,11.67 14,12.5C14,13.33 13.33,14 12.5,14C11.67,14 11,13.33 11,12.5C11,11.67 11.67,11 12.5,11M3.5,9.5L5,8L6.5,9.5L5,11L3.5,9.5M7.5,19L9,17.5L10.5,19L9,20.5L7.5,19Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Bức tranh thiên nhiên hài hoà
                </h3>
                <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-300">
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full group-hover:translate-x-0">
                    Tinh thần tôn trọng "Mẹ Thiên Nhiên", quy hoạch kết hợp hoàn hảo của khu đô thị tích hợp quốc tế hiện đại và bảo tồn hệ sinh thái tự nhiên sông nước bản địa.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Kết nối cộng đồng */}
           <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-[500px]">
              <img 
                src="https://waterpoint.com.vn/storage/images/Artboard-%E2%80%93-7.png" 
                alt="Bức tranh thiên nhiên hài hoà" 
                className="w-full h-full object-cover transition-transform duration-300 scale-110 group-hover:translate-x-[20px]"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 transition-all duration-300 flex flex-col items-start justify-start p-8 text-white">
                <div className="mb-6">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17,8C17,10.76 14.76,13 12,13C9.24,13 7,10.76 7,8S9.24,3 12,3C14.76,3 17,5.24 17,8M17,16L18.5,17.5L17,19L15.5,17.5L17,16M12.5,11C13.33,11 14,11.67 14,12.5C14,13.33 13.33,14 12.5,14C11.67,14 11,13.33 11,12.5C11,11.67 11.67,11 12.5,11M3.5,9.5L5,8L6.5,9.5L5,11L3.5,9.5M7.5,19L9,17.5L10.5,19L9,20.5L7.5,19Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Bức tranh thiên nhiên hài hoà
                </h3>
                <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-300">
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full group-hover:translate-x-0">
                    Tinh thần tôn trọng "Mẹ Thiên Nhiên", quy hoạch kết hợp hoàn hảo của khu đô thị tích hợp quốc tế hiện đại và bảo tồn hệ sinh thái tự nhiên sông nước bản địa.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Phát triển bền vững */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-[500px]">
              <img 
                src="https://waterpoint.com.vn/storage/images/Artboard-%E2%80%93-7.png" 
                alt="Bức tranh thiên nhiên hài hoà" 
                className="w-full h-full object-cover transition-transform duration-300 scale-110 group-hover:translate-x-[20px]"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 transition-all duration-300 flex flex-col items-start justify-start p-8 text-white">
                <div className="mb-6">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17,8C17,10.76 14.76,13 12,13C9.24,13 7,10.76 7,8S9.24,3 12,3C14.76,3 17,5.24 17,8M17,16L18.5,17.5L17,19L15.5,17.5L17,16M12.5,11C13.33,11 14,11.67 14,12.5C14,13.33 13.33,14 12.5,14C11.67,14 11,13.33 11,12.5C11,11.67 11.67,11 12.5,11M3.5,9.5L5,8L6.5,9.5L5,11L3.5,9.5M7.5,19L9,17.5L10.5,19L9,20.5L7.5,19Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Bức tranh thiên nhiên hài hoà
                </h3>
                <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-300">
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full group-hover:translate-x-0">
                    Tinh thần tôn trọng "Mẹ Thiên Nhiên", quy hoạch kết hợp hoàn hảo của khu đô thị tích hợp quốc tế hiện đại và bảo tồn hệ sinh thái tự nhiên sông nước bản địa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white py-12 md:py-16 mt-12 md:mt-20">
        {/* Background Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://waterpoint.com.vn/theme/images/footer-decord.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Column 1 - Logo & Company Info */}
            <div>
              <img 
                src="https://waterpoint.com.vn/storage/images/waterpoint-logo-whitebg-150.png" 
                alt="Waterpoint Logo" 
                className="w-24 md:w-32 mb-4 md:mb-6 bg-white p-2 rounded"
              />
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <p className="font-semibold">Trụ sở</p>
                <p>CÔNG TY CP ĐẦU TƯ NAM LONG</p>
                <p>06 Nguyễn Khắc Viện, Phường Tân Mỹ, TP. HCM</p>
                <p>Tel : (84.28) 54 16 17 18</p>
                <p>Hotline : 0981 39 33 22</p>
                <p className="font-semibold mt-4">KHU ĐÔ THỊ WATERPOINT</p>
                <p>Vòng xoay DT830, Bến Lức, Tây Ninh</p>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <a href="#" className="block hover:text-teal-400 transition">QUY HOẠCH TỔNG THỂ</a>
                <a href="#" className="block hover:text-teal-400 transition">TIỆN ÍCH</a>
                <a href="#" className="block hover:text-teal-400 transition">DỰ ÁN</a>
                <a href="#" className="block hover:text-teal-400 transition">TIN TỨC</a>
                <a href="#" className="block hover:text-teal-400 transition">CHỦ ĐẦU TƯ</a>
                <a href="#" className="block hover:text-teal-400 transition">TÀI LIỆU BÁN HÀNG</a>
                <a href="#" className="block hover:text-teal-400 transition">LIÊN HỆ</a>
              </div>
            </div>

            {/* Column 3 - Empty or Additional Info */}
            <div>
              <p className="italic text-xs md:text-sm opacity-90">
                ĐÂY LÀ TRANG THÔNG TIN CHÍNH THỨC TỪ CHỦ ĐẦU TƯ DỰ ÁN WATERPOINT.
              </p>
              <p className="text-xs md:text-sm mt-3 md:mt-4 opacity-80">
                Thông tin, hình ảnh, các tiện ích trên website chỉ mang tính chất tương đối và có thể được điều chỉnh theo quyết định của chủ đầu tư.
              </p>
            </div>

            {/* Column 4 - Social Media */}
            <div>
              <div className="flex gap-3 md:gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-full flex items-center justify-center transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-full flex items-center justify-center transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-full flex items-center justify-center transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
      
          {/* Copyright */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center">
            <p className="text-xs md:text-sm text-teal-400">All Rights Reserved 2023 © Nam Long Group</p>
            <div className="mt-3 md:mt-4">
              <img 
                src="https://waterpoint.com.vn/theme/images/dmca-badge-w150-5x1-09.png" 
                alt="DMCA Protected" 
                className="inline-block h-6 md:h-8"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
