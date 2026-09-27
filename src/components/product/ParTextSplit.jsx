import {motion} from "motion/react"

const ParTextSplit = ({ description }) => {
  return (
    <motion.p
      initial="start"
      whileInView="visibale"
      className="flex flex-wrap text-[2.2rem] text-[#f5e4c7] font-[Estedad] w-[50%] text-center pt-[2vh] max-lg:w-[80%]"
    >
      {description.split(" ").map((word, index) => (
        <motion.span
        key={index}
          variants={{
            start: { y: 80, opacity: 0 },
            visibale: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: index * 0.03 + 0.5,
                ease: "backOut",
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default ParTextSplit;
