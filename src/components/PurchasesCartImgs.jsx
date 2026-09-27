import { motion, AnimatePresence } from "motion/react";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { CartContext } from "../context/Cart";

const PurchasesCartImgs = ({}) => {
  const { productCart, funDelete } = useContext(CartContext);

  return (
    <div className="imgs flex justify-center">
      <div className="w-[25%] flex items-center justify-center pr-[4rem] rotate-[20deg] translate-y-[20%] -translate-x-[20%]">
        <img className="w-full" src="/image/bottle-ghost.svg" alt="" />

        <AnimatePresence mode="wait">
          {productCart[0].bg && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ ease: "backOut" }}
              className="absolute"
            >
              <button
                onClick={() => funDelete(0)}
                className="z-10 absolute -top-1/12 left-1/2 -translate-x-1/2 border-2 border-[#f5e4c7] rounded-full bg-[#100b06] p-1"
              >
                <IoClose className="w-10 h-10 text-[#f5e4c7]" />
              </button>

              <img
                className="w-full scale-105"
                src={productCart[0].bg}
                alt=""
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-[25%] flex items-center justify-center pr-[4rem] translate-x-[2rem]">
        <img className="w-full" src="/image/bottle-ghost.svg" alt="" />
        <AnimatePresence mode="wait">
          {productCart[1].bg && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ ease: "backOut" }}
              className="absolute"
            >
              <button
                onClick={() => funDelete(1)}
                className="z-10 absolute -top-1/12 left-1/2 -translate-x-1/2 border-2 border-[#f5e4c7] rounded-full bg-[#100b06] p-1"
              >
                <IoClose className=" w-10 h-10 text-[#f5e4c7]" />
              </button>

              <img
                className="w-full scale-105"
                src={productCart[1].bg}
                alt=""
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-[25%] flex items-center justify-center pl-[4rem] -rotate-[10deg] translate-y-[15%] translate-x-[15%]">
        <img className="w-full" src="/image/bottle-ghost.svg" alt="" />
        <AnimatePresence mode="wait">
          {productCart[2].bg && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ ease: "backOut" }}
              className="absolute"
            >
              <button
                onClick={() => funDelete(2)}
                className="z-10 absolute -top-1/12 left-1/2 -translate-x-1/2 border-2 border-[#f5e4c7] rounded-full bg-[#100b06] p-1"
              >
                <IoClose className="w-10 h-10 text-[#f5e4c7]" />
              </button>

              <img
                className="w-full scale-105"
                src={productCart[2].bg}
                alt=""
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PurchasesCartImgs;
