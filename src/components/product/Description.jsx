import { motion } from "motion/react";

const Description = ({ options, image2,description }) => {
  return (
    <div className="top flex items-center justify-between gap-8 max-sm:flex-col">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 0.8,
            ease: "backInOut",
          },
        }}
        className="box h-[20rem] border-[1.5px] border-[#f5e4c7] flex flex-col justify-around flex-1 rounded-2xl p-5 text-[#f5e4c7] max-sm:w-full"
      >
        <h6 className="font-[lalezar1] text-[2.5rem]">ویژگی‌های طعمی</h6>
        <ul className="text-[2rem] font-[RaiMedia] leading-[1] mt-[1rem] max-lg:text-[2.5rem] max-lg:leading-[1.2]">
          {options.map((option,index) => {
            return (
              <li key={index} className="text-[snow] flex items-start gap-2">
                <img className="w-8 h-8 pt-1.5" src={image2} alt="" />
                {option}
              </li>
            );
          })}
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 0.8,
            ease: "backInOut",
          },
        }}
        className="box h-[20rem] border-[1.5px] border-[#f5e4c7] flex flex-col justify-around flex-1 rounded-2xl p-5 text-[#f5e4c7]"
      >
        <h6 className="font-[lalezar1] text-[2.5rem]">مناسب برای همراهی با</h6>
        <p className="font-[RaiMedia] leading-[2.2rem] text-[2rem] max-lg:text-[2.5rem]">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Description;
