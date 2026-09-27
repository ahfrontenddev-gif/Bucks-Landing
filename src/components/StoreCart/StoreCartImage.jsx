import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const StoreCartImage = ({ src, imageOne, imageTwo }) => {
  const isDesktop = useMediaQuery({ minWidth: "1024px" });
  const variSrc = {
    initial: {
      scale: 1,
      y: 0,
    },

    hover: {
      scale: 0.7,
      y: "-10vh",
    },
  };
  const variImgTwo = {
    initial: { opacity: 0, y: "5vh", x: -100 },
    hover: { opacity: 1, y: "-10vh", x: -50 },
  };
  return (
    <div className="absolute top-[60%] -translate-y-1/2 flex justify-center">
      <motion.img
        variants={variSrc}
        src={src}
        alt=""
        className="src w-[16rem] rotate-3 max-lg:w-[20rem] max-sm:w-[16rem]"
      />
      <motion.img
        initial={{ y: 0 }}
        animate={{
          y: 50,
          transition: {
            duration: 3 + Math.ceil(Math.random() * 4),
            delay: Math.ceil(Math.random() * 2) / 2,
            ease: "ease",
            repeat: Infinity,
            repeatType: "reverse",
            damping: 100,
          },
        }}
        src={imageOne}
        alt=""
        className="z-[-1] w-[10rem] absolute top-1/12 left-[55%] max-lg:w-[20rem] max-lg:-top-1/12 max-sm:w-[13rem]"
      />
      <motion.img
        initial={{ y: 0 }}
        animate={{
          y: 30,
          transition: {
            duration: 5 + Math.ceil(Math.random() * 2),
            delay: Math.ceil(Math.random() * 2) / 2,
            ease: "ease",
            repeat: Infinity,
            repeatType: "reverse",
            damping: 100,
          },
        }}
        variants={isDesktop && variImgTwo}
        src={imageTwo}
        alt=""
        className="w-[10rem] absolute top-[60%] left-[30%] z-10 max-lg:w-[18rem] max-sm:top-[35%] max-sm:left-[-40%]"
      />
    </div>
  );
};

export default StoreCartImage;
