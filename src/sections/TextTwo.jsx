import { motion } from "motion/react";
const text = "خود را انتخاب کنید";

const TextTwo = () => {
  const textSplit = text.split(" ");

  return (
    <div className="text relative top-0 left-0 w-full h-full font-[lalezar1] pt-[20rem] pb-[20rem] max-sm:pb-[0rem] max-sm:pt-[10rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[4.5rem] text-center w-[80%] m-auto text-[#f5e4c7] leading-[1.3]"
      >
        <motion.h4
          variants={{
            hidden: {
              y: 100,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: "backOut",
              },
            },
          }}
          className="text-[20rem] font-[lalezar1] max-sm:text-[5rem] max-sm:inline"
        >
          محصول
        </motion.h4>

        {textSplit.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-4 max-md:text-[2.7rem] max-sm:text-[5rem]"
            variants={{
              hidden: {
                y: 100,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: index * 0.05,
                  ease: "backOut",
                },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextTwo;
