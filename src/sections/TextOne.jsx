import { motion } from "motion/react";
const text =
  " با ریکیوی ما از مواد کاملاً طبیعی و اصلی تهیه شده است و درون قدیم آن را روی هر چیزی که کباب می‌پزید و وقتی دیگران فکر کردند آشپز ماری سفید و انمود کنید که تعجب کرده اید.";
const TextOne = () => {
  const textSplit = text.split(" ");

  return (
    <div className="text w-full font-[lalezar1] font-lightb pt-[20rem] pb-[20rem] max-sm:pb-[0rem] max-sm:pt-[10rem]">
      <motion.h6
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="text-[4.5rem] w-[80%] m-auto text-[#f5e4c7] leading-[1.3] max-sm:w-[90%] max-sm:text-[3.5rem]"
      >
        {textSplit.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-4"
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
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h6>
    </div>
  );
};

export default TextOne;
