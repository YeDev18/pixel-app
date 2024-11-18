import React from "react";

interface ProcessCardProps {
  id: number;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ id, title, description }) => {
  return (
    <div className="group flex items-center p-[40px] bg-white h-[184px] border-gray-200 py-6 space-x-2 rounded-[40px] transition duration-300 delay-100 ease-in-out hover:bg-[#305d6e] hover:text-[#fae3cf]">
      <div className="w-1/2 space-y-8">
        <div className="flex items-center space-x-2">
          <div className="w-12 px-10 py-1 flex items-center justify-center primaire rounded-full">
            Step
          </div>
          <div className="w-8 flex items-center justify-center primaire rounded-full text-lg font-semibold">
            {id}
          </div>
        </div>
        <h3 className="text-[32px] font-400 text-black group-hover:text-[#fae3cf] transition-colors ">
          {title}
        </h3>
      </div>
      <div className="w-1/2 pl-6">
        <p className="text-gray-700 text-[16px] font-400 group-hover:text-[#fae3cf] transition-colors ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
