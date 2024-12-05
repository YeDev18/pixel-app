import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ServiceStackItemProps {
  label: string;
  image: StaticImageData;
}

const ServiceStackItem: React.FC<ServiceStackItemProps> = ({ label, image }) => {
  return (
    <div className="flex flex-col w-[80px] h-[80px] justify-center items-center p-4 bg-white rounded-[24px]">
      <Image src={image} alt={label} width={50} height={50}  />
    </div>
  );
};

export default ServiceStackItem;
