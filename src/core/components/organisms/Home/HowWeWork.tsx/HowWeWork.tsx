'use client'
import ArrowRight from "@/core/components/atoms/icons/arrow.right";
import HowWeWorkItem from "@/core/components/molecules/_all/HowWeWork/HowWeWork";
import { HowWeWorkData } from "@/core/data/HowWeWork.data";
import { useState } from "react";

const HowWeWorkList: React.FC = () => {
  const [workIndex, setWorkIndex] = useState(1);

  const nextIndex = () => {
    if (workIndex === HowWeWorkData.length) return;
    setWorkIndex((prev) => prev + 1);
  };

  const prevIndex = () => {
    if (workIndex === 1) return;
    setWorkIndex((prev) => prev - 1);
  };

  return (
    <div className="relative space-y-10">
      {/* Navigation Buttons */}
      <div className="absolute right-14 flex flex-row space-x-4 text-2xl font-semibold text-light-100">
        <button
          className="rotate-180 cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-white p-2"
          onClick={prevIndex}
        >
          <ArrowRight color="black" />
        </button>
        <button
          className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-white p-2"
          onClick={nextIndex}
        >
          <ArrowRight color="black" />
        </button>
      </div>

      {/* Cards List */}
      <div className="flex gap-6 p-8 overflow-x-auto ">
        {HowWeWorkData.map((item) => (
          <HowWeWorkItem key={item.id} id={item.id} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default HowWeWorkList;
