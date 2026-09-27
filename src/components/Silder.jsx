import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import ButtonSlider from "./ButtonSLider";

const Silder = ({
  slides,
  onCurrennt,
  current,
  direction,
  setDirection,
}) => {
  const container = useRef(null);
  const length = slides.length;

  const nextSlide = () => {
    setDirection(-1);

    onCurrennt((c) => (c + 1) % length);
  };

  const prevSlide = () => {
    setDirection(1);

    onCurrennt((c) => (c - 1 + length) % length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir === 0 ? 0 : dir > 0 ? -350 : 350,
      opacity: 0,
      scale: 0.2,
      rotate: dir <= 0 ? "30deg" : "-10deg",
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: "5deg",
    },

    exit: (dir) => ({
      x: dir === 0 ? 0 : dir > 0 ? 350 : -350,
      opacity: 0,
      scale: 0.2,
      rotate: dir <= 0 ? "-10deg" : "20deg",
    }),
  };

  const variBg = {
    start: {
      scale: 0.5,
      opacity: 0,
    },

    center: {
      scale: 1,
      backgroundColor: slides[current].bg,
      opacity: 1,
    },

    end: {
      scale: 0.5,
      opacity: 0,
    },
  };

  const varImg = {
    start: {
      scale: 0,
    },

    center: {
      scale: 1,
    },

    end: {
      scale: 0,
    },
  };

  return (
    <>
      <div
        ref={container}
        className="
          relative
          w-full
          h-full
          flex
          items-center
          justify-center
        "
      >
        <AnimatePresence mode="sync" custom={direction}>
          {/* Background */}
          <motion.div
            key={`bg-${slides[current].id}`}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              slider-bg
              absolute
              w-[40rem]
              h-[40rem]
              rounded-full
            "
          >
            <motion.div
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeInOut",
              }}
              variants={variBg}
              initial="start"
              animate="center"
              exit="end"
              className="w-full h-full rounded-full"
            />
          </motion.div>

          {/* Image Product */}
          <motion.div
            key={`product-${slides[current].id}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              z-10
              slider-img
            "
          >
            <img
              src={slides[current].src}
              alt=""
              className="
                w-[40rem]
                h-[40rem]
                scale-[1.6]
                -translate-y-1/6
                object-contain
                max-lg:scale-125
                max-lg:translate-y-0
                max-sm:w-[30rem]
                max-sm:h-[30rem]
              "
            />
          </motion.div>

          {/* Image Janebi 1 */}
          <motion.div
            key={`image1-${slides[current].id}`}
            variants={varImg}
            initial="start"
            animate="center"
            exit="end"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="
              slider-image-o
              absolute
              top-[5%]
              left-[60%]
              z-20
            "
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{
                y: 50,
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              <div className="slider-image-one">
                <img
                  className="w-[20rem] max-sm:w-[13rem]"
                  src={slides[current].image1}
                  alt=""
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Image Janebi 2 */}
          <motion.div
            key={`image2-${slides[current].id}`}
            variants={varImg}
            initial="start"
            animate="center"
            exit="end"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.1,
            }}
            className="
              absolute
              bottom-[15%]
              right-[53%]
              z-20
              max-sm:bottom-[25%]
            "
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{
                y: 70,
                transition: {
                  duration: 6,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              <div className="slider-image-two">
                <img
                  className="w-[20rem] max-sm:w-[13rem]"
                  src={slides[current].image2}
                  alt=""
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <ButtonSlider
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </>
  );
};

export default Silder;
