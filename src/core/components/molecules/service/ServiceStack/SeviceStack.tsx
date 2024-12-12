import ServiceStackItem from "@/core/components/atoms/Service/serviceStack/serviceStack";
import { ServiceData } from "@/core/data/service.data";

const ServiceStackList = () => {
  return (
    <div className="flex justify-center gap-[38px] overflow-x-auto py-4">
      {ServiceData[0]?.stack?.map((item) => (
        <ServiceStackItem
          key={item.id}
          stack={item}
        />
      ))}
    </div>
  );
};

export default ServiceStackList;
