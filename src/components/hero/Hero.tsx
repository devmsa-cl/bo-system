import { ButtonFLC } from '../button/ButtonFLC';
import { motion } from 'framer-motion';
import { animateHeader, animateSub } from './animate';
export default function Hero() {
  return (
    <div className="bg-rose-600 h-[450px] md:h-[750px] lg:h-[800px] xl:h-[900px] 2xl:h-[1200px] relative">
      <div className="hero-image h-full w-full">
        <img
          src="hero.webp"
          alt="hero"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hero-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white ">
        <motion.h1
          {...animateHeader}
          className="text-5xl text-nowrap lg:text-7xl leading-tight font-bold"
        >
          Building dreams
        </motion.h1>
        <motion.h2 {...animateSub} className="text-2xl">
          Crafting Excellence
        </motion.h2>
        <ul className="service-description flex list-disc px-2 gap-4 text-md md:text-xl">
          <li>Heating</li>
          <li>Cooling</li>
          <li>Plumbing</li>
          <li>Solar</li>
        </ul>
        <div className="pt-6 action w-full flex justify-center">
          <ButtonFLC>builder</ButtonFLC>
        </div>
      </div>
    </div>
  );
}
