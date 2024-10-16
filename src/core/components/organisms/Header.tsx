import React from 'react';
import HeaderNav from '../molecules/headerMolecule/HeaderNav';

function Header() {
  return (
    <header className="flex justify-between items-center p-[24px] bg-[rgba(18, 7, 28, 0.05)] bg-opacity-20 backdrop-filter backdrop-blur-[80px] border border-[rgba(225,225,225,0.1)] rounded-[50px] shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold ">MyWebsite</div>
        <HeaderNav/>
   
    </header>
  );
}

export default Header;
