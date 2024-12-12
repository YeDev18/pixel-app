import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { StackProps } from "@/core/data/service.data";

const ServiceStackItem = ({ stack }: { stack: StackProps }) => {
  return (
    <div className="flex flex-col w-[80px] h-[80px] justify-center items-center p-4 bg-white rounded-[24px]">
      <Image src={stack.stack} alt="service image" width={50} height={50} />
    </div>
  );
};

export default ServiceStackItem;
