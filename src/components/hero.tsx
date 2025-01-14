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
  const [scrollStep, setScrollStep] = useState(0);
  const [scrollLock, setScrollLock] = useState(false);
  const [animateCap, setAnimateCap] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [animateBottle, setAnimateBottle] = useState(false);
  const [animateMountain, setAnimateMountain] = useState(false);

  const handleWheel = (event: any) => {
    if (scrollLock || scrollStep === 3) return;

    event.preventDefault();

    if (event.deltaY > 0) {
      setScrollStep((prev) => Math.min(prev + 1, 3));
    } else {
      setScrollStep((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    if (scrollStep === 1) {
      setScrollLock(true);
      setAnimateMountain(true);
      setAnimateCap(true);
      setAnimateBottle(true);
      setTimeout(() => {
        setScrollLock(false);
      }, 3500);
    } else if (scrollStep === 2) {
      setScrollLock(true);
      setShowFeatures(true);
      setTimeout(() => {
        setScrollLock(false);
      }, 1200);
    } else if (scrollStep === 0) {
      setScrollLock(true);
      setAnimateMountain(false);
      setAnimateCap(false);
      setAnimateBottle(false);
      setShowFeatures(false);
      setTimeout(() => {
        setScrollLock(false);
      }, 1500);
    }
  }, [scrollStep]);

  useEffect(() => {
    const enableScroll = (event: any) => {
      if (scrollStep === 3) {
        event.preventDefault = undefined;
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", enableScroll);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", enableScroll);
    };
  }, [scrollStep]);

  return (
    <div className="relative h-full lg:w-full lg:h-screen flex flex-col items-center justify-center pt-8">
      <div className="absolute w-full h-full inset-0 z-0">
        <motion.img
          className="h-full object-cover"
          src={Mountain}
          alt="bg-mountain"
        />
      </div>
      <MaxWidthWrapper className="z-[1]">
        <div className="md:w-full h-full flex items-center justify-between lg:pt-0">
          <div className="w-full flex flex-col items-center justify-center gap-10 sm:hidden md:flex">
            <motion.div
              className="w-full items-center justify-center flex flex-col"
              initial={{ opacity: 0 }}
              animate={showFeatures ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="size-16 lg:size-24 flex items-center justify-center p-2 rounded-full border border-black">
                <img src={Detox} alt="detox" className="size-full" />
              </div>
              <span className="text-sm lg:text-2xl w-full text-center font-bold">
                Detox
              </span>
              <span className="hidden md:block lg:w-1/3 mx-auto text-pretty text-xs text-center capitalize">
                detoxifies the body & boosts vitality
              </span>
            </motion.div>
            <motion.div
              className="w-full items-center justify-center flex flex-col p-4 lg:p-0"
              initial={{ opacity: 0 }}
              animate={showFeatures ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="size-16 lg:size-24 flex items-center justify-center p-2 rounded-full border border-black">
                <img src={Energy} alt="energy" className="size-full" />
              </div>
              <span className="text-sm lg:text-2xl w-full text-center font-bold">
                Energy
              </span>
              <span className="hidden md:block lg:w-1/3 mx-auto text-pretty text-xs text-center capitalize">
                boosts energy levels
              </span>
            </motion.div>
          </div>
          <div className="md:w-full relative flex flex-col items-center justify-center p-5 lg:p-20">
            <motion.img
              src={Cap}
              alt="cap"
              className="absolute z-[1] bottom-[43%] size-[76%] md:size-44 md:bottom-[38%] lg:bottom-[44%] lg:size-[63%]"
              initial={{ y: "-100vh" }}
              animate={animateCap ? { y: 0 } : { y: "-100vh" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.img
              src={Bottle}
              alt="bottle"
              className="size-full"
              initial={{ y: "100vh" }}
              animate={animateBottle ? { y: 0 } : { y: "100vh" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-10">
            <motion.div
              className="w-full items-center justify-center flex flex-col"
              initial={{ opacity: 0 }}
              animate={showFeatures ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="size-16 lg:size-24 flex items-center justify-center p-2 rounded-full border border-black">
                <img src={Immunity} alt="immunity" className="size-full" />
              </div>
              <span className="text-sm lg:text-2xl w-full text-center font-bold">
                Immunity
              </span>
              <span className="hidden md:block lg:w-1/3 mx-auto text-pretty text-xs text-center capitalize">
                strengthens immune response
              </span>
            </motion.div>
            <motion.div
              className="w-full items-center justify-center flex flex-col p-4 lg:p-0"
              initial={{ opacity: 0 }}
              animate={showFeatures ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="size-16 lg:size-24 flex items-center justify-center p-2 rounded-full border border-black">
                <img src={Endurance} alt="endurance" className="size-full" />
              </div>
              <span className="text-sm lg:text-2xl w-full text-center font-bold">
                Endurance
              </span>
              <span className="hidden md:block lg:w-1/3 mx-auto text-pretty text-xs text-center capitalize">
                enhances stamina
              </span>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="absolute w-full md:h-full flex items-center justify-center inset-0 z-[2] overflow-hidden">
        <motion.img
          src={M1}
          alt="fg-mountain"
          className="h-[400px] mt-12 md:mt-0 md:h-full"
          initial={{ x: 0 }}
          animate={animateMountain ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 2.5 }}
        />
        <motion.img
          src={M2}
          alt="fg-mountain"
          className="h-[400px] mt-5 md:mt-0 md:h-full"
          initial={{ x: 0 }}
          animate={animateMountain ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 2.5 }}
        />
      </div>
    </div>
  );
};

export default Hero;
