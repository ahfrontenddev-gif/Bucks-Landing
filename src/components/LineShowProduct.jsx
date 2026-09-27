import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const LineShowProduct = ({ slides, current, direction }) => {
  const vari = {
    start: (dir) => ({
      opacity: 0,
      y: dir >= 0 ? 35 : -35,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir >= 0 ? -35 : 35,
    }),
  };

  const isDesktop = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  return (
    <div>
      <div className="hr text-[snow] absolute top-0 left-0 w-full border-t-1 border-dashed border-[#807f7f]">
        <AnimatePresence>
          <motion.h5
            key={slides[current].src}
            custom={direction}
            transition={{ duration: 0.5 }}
            variants={vari}
            initial="start"
            animate="center"
            exit="exit"
            className={`absolute ${isDesktop? `left-1/2 -translate-x-1/2` : `left-[70%]`} bg-[#100B06] pl-2.5 pr-2.5 text-[2rem] -translate-y-1/2 font-[Estedad] max-sm:text-[1.7rem]`}
          >
            {slides[current].name}
          </motion.h5>
        </AnimatePresence>

        {!isDesktop ? (
          <h6 className="absolute left-[20%] bg-[#100B06] pl-2.5 pr-2.5 text-[2rem] -translate-y-1/2 font-[Estedad]">
            محصول ۰.۱
          </h6>
        ) : (
          ""
        )}
      </div>
      <div className="hr w-full absolute border-b border-[#807f7f] border-dashed top-1/2 -translate-y-1/2"></div>
      <div className="hr w-full absolute border-b border-[#807f7f] border-dashed top-full -translate-y-1/2"></div>
    </div>
  );
};

export default LineShowProduct;
