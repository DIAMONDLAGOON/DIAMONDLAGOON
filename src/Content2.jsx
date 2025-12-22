import React from 'react'

function Icon({ children }) {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center text-[#082B26]">
      {children}
    </span>
  )
}

function Item({ icon, children }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div className="text-[#082B26] text-[0.95rem] leading-relaxed">{children}</div>
    </div>
  )
}

function Content2() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto w-full max-w-[1700px] px-5 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {/* Main columns */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-4">
            {/* Reviews */}
            <div className="py-8 lg:py-0 lg:px-10 border-b border-gray-200 lg:border-b-0 lg:border-r">
              <div className="text-[0.85rem] tracking-[0.22em] uppercase text-gray-400 font-display">
                ĐÁNH GIÁ CỦA DU KHÁCH
              </div>

              <div className="mt-8 space-y-6">
                <div className="space-y-2">
                  <a
                    href="#"
                    className="font-niramit font-semibold text-[#082B26] underline underline-offset-4"
                  >
                    Diamond Lagoon
                  </a>

                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span key={idx} className="h-3 w-3 rounded-full bg-emerald-600" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">3,402 reviews</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                    TA
                  </span>
                  <span className="text-[#082B26] font-niramit font-semibold">Tripadvisor</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="py-8 lg:py-0 lg:px-10 border-b border-gray-200 lg:border-b-0 lg:border-r">
              <div className="text-[0.85rem] tracking-[0.22em] uppercase text-gray-400 font-display">
                ĐỊA CHỈ
              </div>

              <div className="mt-8 space-y-5">
                <div className="text-[#082B26] font-niramit leading-relaxed">
                  Thôn Vinh Quang 2, xã Phước Sơn, huyện Tuy Phước, tỉnh Bình Định
                </div>

                <a
                  href="#"
                  className="inline-block font-niramit text-gray-600 underline underline-offset-4"
                >
                  Đến đây bằng cách nào
                </a>

                <div className="h-px w-28 bg-gray-200" />
              </div>
            </div>

            {/* Contact */}
            <div className="py-8 lg:py-0 lg:px-10 border-b border-gray-200 lg:border-b-0 lg:border-r">
              <div className="mt-2 space-y-4">
                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    </Icon>
                  }
                >
                  +84 939742989
                </Item>

                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16v16H4z" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                    </Icon>
                  }
                >
                  <a href="#" className="text-gray-600 underline underline-offset-4">
                    Reservations-
                    <br />
                    contact@diamondlagoon.com
                  </a>
                </Item>
              </div>
            </div>

            {/* Amenities */}
            <div className="py-8 lg:py-0 lg:px-10">
              <div className="text-[0.85rem] tracking-[0.22em] uppercase text-gray-400 font-display">
                TIỆN ÍCH VÀ DỊCH VỤ
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 17h18" />
                        <path d="M5 17v-6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6" />
                        <path d="M7 17v2" />
                        <path d="M17 17v2" />
                        <path d="M6 11h12" />
                      </svg>
                    </Icon>
                  }
                >
                  Ecological education
                </Item>

                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21h6" />
                        <path d="M10 21v-3" />
                        <path d="M14 21v-3" />
                        <path d="M8 7h8" />
                        <path d="M9 7l1-3h4l1 3" />
                        <path d="M7 10h10v8H7z" />
                      </svg>
                    </Icon>
                  }
                >
                  Kayaking
                </Item>

                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 20h10" />
                        <path d="M12 20V8" />
                        <path d="M6 8h12" />
                        <path d="M9 8c0-2 1.3-4 3-4s3 2 3 4" />
                        <path d="M9 12h6" />
                      </svg>
                    </Icon>
                  }
                >
                  Bird watching
                </Item>

                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="6" cy="18" r="2" />
                        <circle cx="18" cy="18" r="2" />
                        <path d="M6 18V6l12 12V6" />
                      </svg>
                    </Icon>
                  }
                >
                  Exploring local homes
                </Item>

                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l7 6v12H5V9l7-6Z" />
                        <path d="M9 21v-8h6v8" />
                      </svg>
                    </Icon>
                  }
                >
                  Culinary experiences
                </Item>

                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19c4-7 12-7 16 0" />
                        <path d="M4 6h16" />
                        <path d="M7 6v7" />
                        <path d="M17 6v7" />
                        <path d="M10 10h4" />
                      </svg>
                    </Icon>
                  }
                >
                  Wave Sidewalks
                </Item>

                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 16V4" />
                        <path d="M10 16V4" />
                        <path d="M6 8h4" />
                        <path d="M14 4v8a3 3 0 0 0 6 0V4" />
                        <path d="M5 20h14" />
                      </svg>
                    </Icon>
                  }
                >
                  Resort bungalows
                </Item>

                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21c4-6 4-12 0-18" />
                        <path d="M5 7h7" />
                        <path d="M12 7h7" />
                        <path d="M7 10h3" />
                        <path d="M14 10h3" />
                      </svg>
                    </Icon>
                  }
                >
                  Ecological parks
                </Item>


                <Item
                  icon={
                    <Icon>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v8" />
                        <path d="M8 12h8" />
                      </svg>
                    </Icon>
                  }
                >
                  <a href="#" className="inline-flex items-center gap-2 text-gray-600">
                    Xem thêm
                  </a>
                </Item>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="hidden lg:flex w-16 items-start justify-center pl-8">
            <div className="flex flex-col gap-6 text-[#c49b63]">
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.94 1.17 4 4 0 0 1 7.94-1.17Z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Social mobile */}
        <div className="mt-8 flex lg:hidden items-center justify-end gap-6 text-[#c49b63]">
          <a href="#" className="inline-flex h-10 w-10 items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
          <a href="#" className="inline-flex h-10 w-10 items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <path d="M16 11.37a4 4 0 1 1-7.94 1.17 4 4 0 0 1 7.94-1.17Z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Content2
