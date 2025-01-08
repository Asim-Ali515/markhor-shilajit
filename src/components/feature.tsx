import { motion } from "framer-motion";
import C1 from "../assets/img/C1.svg"
import C2 from "../assets/img/C2.svg"
import C3 from "../assets/img/C3.svg"
import Hand from "../assets/img/hand.svg"
import Jar from "../assets/img/jar-bottle.svg"
import HandCircle from "../assets/img/handcircle.svg"
import { useInView } from "react-intersection-observer";

const Feature = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="h-screen w-full flex flex-col gap-10  p-5 md:grid md:grid-cols-2 bg-[url('/src/assets/img/bg.svg')]">

      <div className="flex flex-col gap-5 items-center justify-center">
      {/* Section 1 */}
      <motion.div
        ref={ref1}
        className="flex items-center justify-center gap-5 p-2.5 md:p-1"
        variants={animationVariants}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
      >
        <img src={C1} alt="circle" className="size-32" />
        <div className="flex flex-col gap-2 w-[90%] md:w-[50%] lg:w-[70%]">
          <p className="lg:text-2xl font-bold">100% Pure Shilajit</p>
          <span className="text-xs lg:text-sm">
            We ensure that our Shilajit is free from additives, artificial
            flavors, or preservatives. What you get is the purest form of
            nature's gift, just as it was intended—without any compromises.
          </span>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        ref={ref2}
        className="flex items-center justify-center gap-5 p-2 md:p-1"
        variants={animationVariants}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col gap-2 w-[90%] md:w-[50%] lg:w-[70%]">
          <p className="lg:text-2xl font-bold text-end">Authentic Source</p>
          <p className="text-end text-xs lg:text-sm">
            Through years of research and hands-on experience, we've perfected
            the sourcing and refining process. This guarantees maximum potency
            and effectiveness, ensuring you receive the highest-quality
            Shilajit available
          </p>
        </div>
        <img src={C2} alt="circle" className="size-32" />
      </motion.div>

      {/* Section 3 */}
      <motion.div
        ref={ref3}
        className="flex items-center justify-center gap-5 p-2 md:p-1"
        variants={animationVariants}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img src={C3} alt="circle" className="size-32" />
        <div className="flex flex-col gap-2 w-[90%] md:w-[50%] lg:w-[70%]">
          <p className="lg:text-2xl font-bold">Wellness Legacy</p>
          <span className="text-xs lg:text-sm">
            At Shilajit.ae, we offer 100% pure Shilajit sourced directly from
            the mountains. Renowned for boosting energy, mental clarity, and
            overall well-being, our potent product is trusted across the UAE
            for natural wellness solutions.
          </span>
        </div>
      </motion.div>
    </div>

      <div className="relative w-full items-center justify-center">

        
        <img src={HandCircle} alt="circle" className="absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:size-[330px] lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2  lg:size-[500px]
        size-[250px] left-1/2 top-[100px] -translate-x-1/2 -translate-y-1/2" />


        <img src={Hand} alt="circle" className="absolute top-[46px]  md:top-[379px] lg:top-[465px] left-[40px] md:left-[130px] lg:left-[310px] md:-translate-x-1/2 lg:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-y-1/2 -rotate-3 size-[230px] md:size-[500px] lg:size-[500px]" />


        <img src={Jar} alt="circle" className="absolute top-[29px] md:top-[259px] lg:top-[295px] left-[81px] md:left-[90px] lg:left-[250px] md:-translate-x-1/2 lg:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-y-1/2 size-[100px] md:size-[140px] lg:size-[200px]" />


      </div>
    </div>
  );
};

export default Feature;
