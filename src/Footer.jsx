import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0f1912] text-white py-12 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Group Name */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-[#b89e72] mb-2">
              GROUP 6
            </h2>
            <p className="text-sm md:text-base text-gray-400 tracking-wide">
              Produced by Group 6
            </p>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#b89e72] to-transparent"></div>

          {/* Copyright */}
          <div className="text-center text-xs md:text-sm text-gray-500">
            <p>© 2025 Group 6. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
