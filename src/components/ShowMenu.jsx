import { LuGithub } from "react-icons/lu";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";
const ShowMenu = ({ setShowMenu }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, ease: "backOut" }}
      className="show-menu overflow-hidden fixed top-[1vh] right-[.5vw] w-[49vw] h-[98vh] bg-[#f5e4c7] rounded-xl z-50 origin-top-right"
    >
      <button
        onClick={() => setShowMenu(false)}
        className="absolute top-[1rem] right-[1rem] w-20 h-20 border-2 border-[#100b06] rounded-2xl flex items-center justify-center"
      >
        <IoMdClose className="w-[70%] h-[70%]" />
      </button>
      <div className="conti w-full h-full p-[1rem] pt-[8%] flex flex-col gap-[3%]">
        <div className="w-full flex-1">
          <ul className="w-full h-full flex flex-col ">
            <li className="h-[30%] flex items-center justify-center border-b-2 border-[#100b06] border-dotted relative">
              <img
                src="/public/image/product/ananas.avif"
                className="h-[45%] rounded-2xl overflow-hidden absolute right-0 top-1/2 -translate-y-1/2"
                alt=""
              />
              <span className="text-[7rem] bg-[#f5e4c7] w-full flex items-center relative overflow-hidden pr-[3rem]">
                <h6 className="scale-110 ">خانه</h6>
                <h6 className="scale-110 absolute translate-y-[90px]">خانه</h6>
              </span>
            </li>
          </ul>
        </div>
        <div className="concat w-full flex gap-6 items-center">
          <button className="flex items-center justify-center flex-row-reverse flex-1 p-[2rem] border-2 border-[#100b06] rounded-2xl text-[#100b06] text-[3rem]">
            <LuGithub className="w-[2.5em] h-[2.5rem]" />
            Github
          </button>
          <button className="flex items-center justify-center flex-row-reverse flex-1 p-[2rem] border-2 border-[#100b06] rounded-2xl text-[#100b06] text-[3rem]">
            <PiTelegramLogoLight className="w-[2.5em] h-[2.5rem]" />
            Telegram
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowMenu;
