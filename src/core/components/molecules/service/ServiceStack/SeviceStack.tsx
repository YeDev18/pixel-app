import ServiceStackItem from '@/core/components/atoms/Service/serviceStack/serviceStack';
import { stackData } from '@/core/data/serviceData/stack.data';

const ServiceStackList = () => {
  return (
    <div className="flex gap-[38px] justify-center overflow-x-auto py-4">
      {stackData.map((item) => (
        <ServiceStackItem key={item.id} label={item.label} image={item.image} />
      ))}
    </div>
  );
};

export default ServiceStackList;
