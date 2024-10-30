import React from 'react';
import ValeursData from '../../data/valeur.data'; // Assurez-vous que le chemin d'import est correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Valeur() {
  return (
    <div className="bgheader grid grid-cols-1 md:grid-cols-2 auto-rows-[minmax(0,_2fr)] gap-4 px-[380px]">
      {ValeursData.map((valeur) => (
        <div
          key={valeur.id}
          className="w-[350px] bg-[#020a0d] flex items-start p-4  rounded-[50px] shadow-md hover:shadow-lg  transition-shadow px-[30px] py-[60px] duration-300 mx-auto"
        >
          {/* Contenu de la carte */}
          <div>
          <FontAwesomeIcon icon={valeur.icon} className=" absolute w-4 h-4 text-white  " />

            <h3 className="text-[16px] font-bold ml-6 ">
                {/* Logo juste à côté du nom */}
                {valeur.name}
            <span className="ml-4 font-normal ">{valeur.description}</span>

            </h3>
         </div>

        </div>
      ))}
    </div>
  );
}

export default Valeur;
