import * as React from 'react';
import { cardsData } from '@/core/data/card.data';

const ExpandingCard = () => {
  return (
    <div className="flex w-[80vw] ">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="bg-center h-[646px] w-[546px] bg-no-repeat bg-cover rounded-[50px] text-white cursor-pointer transition-[flex] duration-700 ease-in relative flex-1 mx-[10px] hover:flex-[5] hover:opacity-100"
          style={{ backgroundImage: `url(${card.url})` }}
        >
          <h3 className="text-[24px] absolute bottom-[20px] left-[20px] m-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in delay-400">
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCard;
