import { motion } from "motion/react";

const Titile = ({ name }) => {
  return (
    <motion.h5
      initial="start"
      whileInView="visibale"
      className="flex items-center gap-4 text-[5rem] text-[#f5e4c7] leading-[.8]"
    >
      {name.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={{
            start: { y: 80, opacity: 0 },
            visibale: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: index * 0.05,
                ease: "backOut",
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h5>
  );
};

export default Titile;
