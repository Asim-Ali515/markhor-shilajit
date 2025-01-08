import M2 from "../assets/img/m-2.svg";
import M1 from "../assets/img/m-1.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Cap from "../assets/img/hero/cap.svg";
import Detox from "../assets/img/hero/detox.svg";
import Mountain from "../assets/img/mountain.svg";
import MaxWidthWrapper from "./max-width-wrapper";
import Bottle from "../assets/img/hero/bottle.svg";
import Energy from "../assets/img/hero/energy.svg";
import Immunity from "../assets/img/hero/immunity.svg";
import Endurance from "../assets/img/hero/endurance.svg";

const Hero = () => {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  const [animateCap, setAnimateCap] = useState(false);
  const [animateBottle, setAnimateBottle] = useState(false);

  useEffect(() => {
    setAnimateLeft(true);
    setAnimateRight(true);
  }, []);

  useEffect(() => {
    setAnimateCap(true);
    setAnimateBottle(true);
  }, []);

  return (
    <div className="relative lg:w-full lg:h-screen flex items-center justify-center pt-8">
      <div className="absolute w-full h-full inset-0 z-0">
        <img
          className="size-full object-cover"
          src={Mountain}
          alt="bg-mountain"
        />
      </div>

      <div className="absolute w-full h-full flex items-center justify-center inset-0 z-20 overflow-hidden">
        <motion.img
          src={M1}
          alt="fg-mountain"
          className="size-full object-contain"
          initial={{ x: 0 }}
          animate={animateLeft ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 3.5 }}
        />
        <motion.img
          src={M2}
          alt="fg-mountain"
          className="size-full object-contain"
          initial={{ x: 0 }}
          animate={animateRight ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 3.5 }}
        />
      </div>

      <MaxWidthWrapper className="z-[1]">
        <div className="md:w-full h-full flex items-center justify-between lg:pt-0">
          <div className="w-full flex flex-col items-center justify-center gap-10 ">
            <div className="w-full items-center justify-center flex flex-col">
              <div className="size-16 lg:size-24 flex items-center justify-center p-2 rounded-full border border-black">
                <img src={Detox} alt="detox" className="size-full" />
              </div>
              <span className="text-sm lg:text-2xl w-full text-center font-bold">
                Detox
              </span>
              <span className="lg:w-1/3 mx-auto text-pretty text-xs text-center capitalize">
                detoxifies the body & boosts vitality
              </span>
            </div>
            <div className="w-full items-center justify-center flex flex-col p-4 lg:p-0">
              <div className="size-16 lg:size-24 flex items-center justify-center p-2 rounded-full border border-black">
                <img src={Energy} alt="detox" className="size-full" />
              </div>
              <span className="text-sm lg:text-2xl w-full text-center font-bold">
                Detox
              </span>
              <span className="lg:w-1/3 mx-auto text-pretty text-xs text-center capitalize">
                detoxifies the body & boosts vitality
              </span>
            </div>
          </div>
          <div className="md:w-full relative flex flex-col items-center justify-center p-5 lg:p-20">
            <motion.img
              src={Cap}
              alt="cap"
              className="absolute z-10 bottom-[43%] size-[76%] md:size-44 md:bottom-[38%] lg:bottom-[44%] lg:size-[63%]"
              initial={{ y: "-100vh" }}
              animate={animateCap ? { y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <motion.img
              src={Bottle}
              alt="bottle"
              className="size-full"
              initial={{ y: "100vh" }}
              animate={animateBottle ? { y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-10">
            <div className="w-full items-center justify-center flex flex-col">
              <div className="size-16 lg:size-24 flex items-center justify-center p-2 rounded-full border border-black">
                <img src={Immunity} alt="detox" className="size-full" />
              </div>
              <span className="text-sm lg:text-2xl w-full text-center font-bold">
                Detox
              </span>
              <span className="lg:w-1/3 mx-auto text-pretty text-xs text-center capitalize">
                detoxifies the body & boosts vitality
              </span>
            </div>
            <div className="w-full items-center justify-center flex flex-col p-4 lg:p-0">
              <div className="size-16 lg:size-24 flex items-center justify-center p-2 rounded-full border border-black">
                <img src={Endurance} alt="detox" className="size-full" />
              </div>
              <span className="text-sm lg:text-2xl w-full text-center font-bold">
                Detox
              </span>
              <span className="lg:w-1/3 mx-auto text-pretty text-xs text-center capitalize">
                detoxifies the body & boosts vitality
              </span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
