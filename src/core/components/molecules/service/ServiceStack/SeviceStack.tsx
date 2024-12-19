import ServiceStackItem from "@/core/components/atoms/Service/serviceStack/serviceStack";
import { useService } from "@/core/context/service/service.provider";
import { StackProps } from "@/core/data/service.data";

const ServiceStackList = () => {
  const { service } = useService(); 

  return (
    <div className="flex justify-center gap-[38px] overflow-x-auto py-4">
      {service.stack.map((stack: StackProps, index: number) => (
        <ServiceStackItem key={index} stack={stack} />
      ))}
    </div>
  );
};

export default ServiceStackList;
