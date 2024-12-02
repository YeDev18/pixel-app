import { ProcessProps } from "@/core/data/service.data";
import * as motion from "framer-motion/client";

const ProcessItem = ({ array }: { array: ProcessProps }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: [0.39, 0.35, 0.45, 0.46],
    }}
    viewport={{ once: true, amount: 0.2 }} className="group flex items-center p-[40px] bg-white h-[184px] border-gray-200 py-6 space-x-2 rounded-[40px] transition duration-300 delay-100 ease-in-out hover:bg-[#305d6e] hover:text-[#fae3cf]">
      <div className="w-1/2 space-y-8">
        <div className="flex items-center space-x-2">
          <div className="w-12 px-10 py-1 flex items-center justify-center primaire rounded-full">
            Step
          </div>
          <div className="w-8 flex items-center justify-center primaire rounded-full text-lg font-semibold">
            {array.id}
          </div>
        </div>
        <h3 className="text-[32px] font-400 text-black group-hover:text-[#fae3cf] transition-colors ">
        {array.item}
        </h3>
      </div>
      <div className="w-1/2 pl-6">
        <p className="text-gray-700 text-[16px] font-400 group-hover:text-[#fae3cf] transition-colors ">
        {array.paragraph}
        </p>
      </div>
      </motion.div>
  );
};

export default ProcessItem;
