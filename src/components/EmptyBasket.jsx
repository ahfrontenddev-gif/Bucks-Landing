import { motion } from "motion/react";
import { TbShoppingCartOff } from "react-icons/tb";

const EmptyBasket = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-[3rem]">
      <motion.img
        initial={{ y: 0 }}
        animate={{
          y: 30,
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        whileHover={{ scale: 1.2, rotate: 6 }}
        src="/product/image-peach.avif"
        className="w-[20%]"
      />
      <span className="flex flex-col items-center gap-4 text-[3rem]">
        <p>سبد خرید شما خالی است</p>
        <TbShoppingCartOff className="h-[6rem] w-[6rem] text-[#100b06]" />
      </span>
    </div>
  );
};

export default EmptyBasket;
