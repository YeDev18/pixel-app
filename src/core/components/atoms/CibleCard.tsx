import React from 'react';
import { TargetGroups } from '../../data/Cible';

function CibleCard({ id }) {
  const group = TargetGroups.find((item) => item.id === id);

  if (!group) {
    return <div>Card not found</div>;
  }

  return (
    <div className="w-[350px] h-[200px] bg-[#020a0d] flex flex-col justify-center p-6 rounded-[50px] shadow-md hover:shadow-lg transition-shadow duration-300">
      <p className="text-white font-normal mb-4">{group.description}</p>
      <h3 className="text-white text-[16px] font-bold">{group.name}</h3>
    </div>
  );
}

export default CibleCard;
