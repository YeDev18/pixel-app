// "use client";
// import { ValueDataProps } from "@/core/data/value.data";
// import * as motion from "framer-motion/client";

// const ItemsValue = ({ value }: { value: ValueDataProps }) => {
	
// 	// const ref = useRef(null);
// 	// const { scrollYProgress } = useScroll({ target: ref });
// 	// const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);
// 	// console.log(y);
// 	return (
// 		// <div className="flex flex-col gap-8 lg:gap-14">
// 		// 	<div className="flex items-center justify-start gap-6 max-md:flex-col lg:gap-14">
// 		// 		<div
// 		// 			className="h-96 w-full overflow-hidden rounded-lg bg-cover bg-center md:max-w-[30rem] lg:h-[30rem]"
// 		// 			style={{
// 		// 				backgroundImage: `url(${value.image})`,
// 		// 			}}
// 		// 		></div>
// 		// 		<motion.hgroup
// 		// 			// style={{ y }}
// 		// 			className="space-y-3 text-start"
// 		// 		>
// 		// 			<h1 className="overflow-hidden py-2 text-2xl font-medium lg:text-4xl">
// 		// 				{value.lib}
// 		// 			</h1>
// 		// 			<p className=" text-base/relaxed max-md:text-justify lg:w-[75vh] xl:text-lg/relaxed">
// 		// 				{value.describe}
// 		// 			</p>
// 		// 		</motion.hgroup>
// 		// 	</div>
// 		// </div>

		
// 	);
// };

// export default ItemsValue;

'use client';
import { ReactLenis } from 'lenis/react';
import { ValueData } from '@/core/data/value.data';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export default function Index(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main ref={container}>

        <section className='bg-white text-white w-full'>
          {ValueData.map((value, i) => {
            const targetScale = 1 - (ValueData.length - i) * 0.0;
            return (
              <Card
                key={`value_${i}`}
                i={i}
                lib={value.lib}
                describe={value.describe}
                image={value.image}
                progress={scrollYProgress}
                range={[i * 1, 0.8]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  lib: string;
  describe: string;
  image: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  lib,
  describe,
  image,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const translateY = useTransform(progress, range, [0, -10 * i]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center top-[15vh]'
    >
      <motion.div
        style={{
          scale,
          translateY, 
          top: `calc(-5vh + ${i * 5}px)`,
        }}
        className={`flex flex-col relative -top-[10%] h-[550px] w-[90%] bg-slate-800 rounded-md p-10 origin-top`}
      >
        <h2 className='text-2xl text-center font-semibold'>{lib}</h2>
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <p className='text-sm'>{describe}</p>
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale }}
            >
              <img src={image} alt='image' className='object-cover w-full h-full' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
