import { PiTelegramLogoLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";
import { BsInstagram } from "react-icons/bs";
const ShowMenu = ({ setShowMenu }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, ease: "backOut" }}
      className="show-menu overflow-hidden fixed top-[1vh] right-[.5vw] w-[49vw] max-sm:w-[96vw] max-sm:right-[2vw] bg-[#f5e4c7] rounded-xl z-50 origin-top-right"
    >
      <button
        onClick={() => setShowMenu(false)}
        className="absolute top-[1rem] right-[1rem] w-20 h-20 border-2 border-[#100b06] rounded-2xl flex items-center justify-center"
      >
        <IoMdClose className="w-[70%] h-[70%]" />
      </button>
      <div className="conti w-full h-f p-[1rem] pt-32 flex flex-col gap-[3%]">
        <div className="concat w-full flex gap-6 items-center">
          <button className="flex items-center justify-center flex-row-reverse flex-1 py-[2rem] border-2 border-[#100b06] rounded-2xl text-[#100b06] text-[3rem]">
            <BsInstagram className="w-[2.5em] h-[2.5rem]" />
            Instagram
          </button>
          <button className="flex items-center justify-center flex-row-reverse flex-1 py-[2rem] border-2 border-[#100b06] rounded-2xl text-[#100b06] text-[3rem]">
            <PiTelegramLogoLight className="w-[2.5em] h-[2.5rem]" />
            Telegram
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowMenu;
