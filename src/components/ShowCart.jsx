import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import EmptyBasket from "./EmptyBasket";
import { useState } from "react";
import ButtonAnimation from "./ButtonAnimation";
import { TbHttpDelete } from "react-icons/tb";
import ListProductCart from "./ListProductCart";
const ShowCart = ({ setShowCart }) => {
  const [c, setC] = useState();

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5, ease: "backOut" }}
      className="overflow- fixed top-[1vh] right-[.5vw] w-[44vw] min-h-[80vh] bg-[#f5e4c7] rounded-xl z-50 origin-top-right"
    >
      <div
        onClick={() => setShowCart(false)}
        className="absolute top-[1rem] right-[1rem] w-20 h-20 z-[51]"
      >
        <ButtonAnimation
          bg="trasnparrent"
          positionText="x"
          borderColor="#100b06"
          icon={
            <div>
              <IoMdClose className="w-16 h-16" />
            </div>
          }
        />
      </div>
      <ListProductCart />
      <AnimatePresence mode="wait">
        {c && (
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: 200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.2, y: -200 }}
            transition={{ duration: 0.2 }}
          >
            <EmptyBasket />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ShowCart;
