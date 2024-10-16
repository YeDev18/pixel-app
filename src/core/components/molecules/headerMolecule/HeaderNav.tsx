import React from 'react'
import { headerData, buttonData } from '../../../data/header.data'; // Chemin vers le fichier de données

function HeaderNav() {
  return (
    <>
  
     {/* Navigation Links */}
     <div className="flex space-x-[56px]">
     <nav className="flex items-center space-x-[26px]">
       {headerData.map((item) => (
         <a
           key={item.id}
           href={item.link}
           className="hover:text-gray-400 text-[16px] font-normal  transition duration-300"
         >
           {item.name}
         </a>
       ))}
     </nav>

     {/* Contact Info and Get Started Button */}
     <div className="flex items-center space-x-[32px]">
       {/* Contact Number */}
       <span >+225 07 07 07 07 07</span>

       {/* Get Started Button */}
       <a
href={buttonData.link}
className="bg-[rgba(18, 7, 28, 0.05)] bg-opacity-20 backdrop-filter backdrop-blur-[80px] border border-[rgba(225,225,225,0.1)]  font-bold py-2 px-4 rounded-full transition-all duration-300 
          hover:backdrop-blur-[120px] 
          shadow-inner
          hover:shadow-[0_0_42px_rgba(19,81,106,1)] hover:bg-transparent"
>
{buttonData.name}
</a>




     </div>
   </div>
   </>
  )
}

export default HeaderNav