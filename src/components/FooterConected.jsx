import { motion } from "motion/react";
import ButtonAnimation from "./ButtonAnimation";
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri"

const variIcon = {
  initial: {},
  hover: { color: "#100b06" },
};
const FooterConected = () => {
  return (
    <div className="conected order-2 col-span-1 h-full aspect-square flex flex-col justify-between lg:order-4 lg:col-span-1 max-lg:aspect-auto min-lg:max-h-[20rem]">
      <div className="box h-[48%] relative flex items-center justify-center text-[#f5e4c7] ">
        <ButtonAnimation
          key={2}
          bgHover="#f5e4c7"
          positionText="y"
          wEl="true"
          borderColor="#f5e4c7"
          icon={
            <motion.span
              variants={variIcon}
              className="w-full h-full flex justify-center items-center "
            >
              <FaInstagram className="w-12 h-12 max-lg:w-16 max-lg:h-16" />
            </motion.span>
          }
        />
      </div>
      <div className="box h-[48%] relative flex items-center justify-center text-[#f5e4c7] ">
        <ButtonAnimation
          key={2}
          bgHover="#f5e4c7"
          positionText="y"
          wEl="true"
          borderColor="#f5e4c7"
          icon={
            <motion.span
              variants={variIcon}
              className="w-full h-full flex justify-center items-center "
            >
              <RiTelegram2Line className="w-12 h-12 max-lg:w-16 max-lg:h-16" />
            </motion.span>
          }
        />
      </div>
    </div>
  );
};

export default FooterConected;
