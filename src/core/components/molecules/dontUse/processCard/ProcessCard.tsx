import React from "react";
import { developmentProcessData } from "@/core/data/serviceData/processCard.data";
import ProcessCard from "@/core/components/atoms/Service/servicePage/processCardItem";

const ProcessContainer = () => {
  return (
    <div className="space-y-1 overflow-x-auto p-4">
      {developmentProcessData.map((process) => (
        <ProcessCard 
          key={process.id} 
          id={process.id} 
          title={process.step} 
          description={process.description} 
        />
      ))}
    </div>
  );
};

export default ProcessContainer;
