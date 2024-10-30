import React from 'react';
import { TargetGroups } from '../../../../data/Cible';

function CibleCard({ id }) {
  const group = TargetGroups.find((item) => item.id === id);

  if (!group) {
    return <div>Card not found</div>;
  }

  return (
    <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[150px] sm:h-[200px] bg-[#020a0d] flex flex-col justify-center p-4 sm:p-6 rounded-[30px] sm:rounded-[50px] shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
      <p className="text-white font-normal mb-2 sm:mb-4 text-sm sm:text-base">{group.description}</p>
      <h3 className="text-white text-[14px] sm:text-[16px] font-bold">{group.name}</h3>
    </div>
  );
}

export default CibleCard;
