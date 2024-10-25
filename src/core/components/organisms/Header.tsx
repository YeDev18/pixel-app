import React from 'react';
import { headerData, buttonData } from '../../data/header.data'; 

function Header() {
  return (
    <header className="fixed left-0 right-0 w-[96%] top-2 mx-auto flex justify-between items-center p-[24px] bg-[rgba(18, 7, 28, 0.05)] bg-opacity-20 backdrop-filter backdrop-blur-[80px] border border-[rgba(225,225,225,0.1)] rounded-[50px] shadow-lg z-10">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">MyWebsite</div>

      {/* Navigation Links */}
      <div className="flex space-x-[56px]">
        <nav className="flex items-center space-x-[26px]">
          {headerData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="hover:text-gray-400 text-[16px] font-normal text-white transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Info and Get Started Button */}
        <div className="flex items-center space-x-[32px]">
          {/* Contact Number */}
          <span>+225 07 07 07 07 07</span>

          {/* Get Started Button */}
          <a
            href={buttonData.link}
            className="bg-[rgba(18, 7, 28, 0.05)] bg-opacity-20 backdrop-filter backdrop-blur-[80px] border border-[rgba(225,225,225,0.1)] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 
             hover:backdrop-blur-[120px] 
             hover:shadow-[0_0_42px_rgba(133,72,244,1)] hover:bg-transparent"
          >
            {buttonData.name}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
