import { motion } from "motion/react";
import ButtonAnimation from "./ButtonAnimation";
import PurchasesCartImgs from "./PurchasesCartImgs";
import { useContext } from "react";
import { CartContext } from "../context/Cart";

const variIcon = {
  initial: {},
  hover: { color: "#f5e4c7" },
};

const PurchasesCart = () => {
  const { clear, productCart } = useContext(CartContext);
  let isDisblae = false;
  productCart.filter((prod) => {
    if (!isDisblae) if (!prod.bg) isDisblae = true;
  });
  return (
    <div className="cart flex-1 inset-0 bg-red-40 max-lg:pl-[20%] pr-[20%] max-sm:pr-[8%] max-sm:pl-[8%]">
      <div className="w-full aspect-square rounded-full bg-[#322C23] flex flex-col justify-center items-center gap-[10%]">
        <PurchasesCartImgs />

        <div
          disabled={isDisblae}
          className="translate-y-[20%] transition hover:scale-105"
        >
          <ButtonAnimation
            onFun={clear}
            bg="#f5e4c7"
            bgHover="#100b06"
            positionText="y"
            wEl="true"
            borderColor="#f5e4c7"
            text={
              <motion.h6
                variants={variIcon}
                className="pt-[1rem] pb-[1rem] pl-[2.5rem] pr-[2.5rem] text-[1.7rem]"
              >
                اضافه کردن به سبد خرید
              </motion.h6>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PurchasesCart;
