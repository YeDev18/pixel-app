import React from "react";

interface HowWeWorkItemProps {
  id: number;
  label: string;
}

const HowWeWorkItem: React.FC<HowWeWorkItemProps> = ({ id, label }) => {
  return (
    <div className="h-[520px] w-[520px] bg-[#035065] rounded-[25px] flex flex-col p-10 flex-shrink-0">
    <div className="flex justify-between flex-col h-full">
      <div>
        <div className="flex space-x-1">
          <div className="w-12 px-10 py-1 flex items-center justify-center bg-[#DC0000] text-white rounded-full">
            Step
          </div>
          <div className="w-8 flex items-center justify-center bg-[#DC0000] text-white rounded-full text-lg font-semibold">
          {id}
          </div>
        </div>
      </div>
      <div className="mt-auto font-400 text-[32px]">
      {label}
      </div>
    </div>
  </div>
  );
};

export default HowWeWorkItem;
