import { motion } from "motion/react";
import { TbShoppingCart } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const EmptyBasket = ({ setShowCart }) => {
  const navigate = useNavigate();

  const close = () => {
    setShowCart(false);
    navigate("/product/1")
  };

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
      <span className="flex flex-col items-center gap-4 text-[3rem] max-sm:mt-[4vh]">
        <p>سبد خرید شما خالی است</p>
        <a
          onClick={close}
          className="h-[6rem] w-[6rem] rounded-full z-10 border-2 aspect-square flex items-end justify-center"
        >
          <TbShoppingCart className="h-[80%] w-[80%] text-[#100b06] max-sm:mt-[3vh]" />
        </a>
      </span>
    </div>
  );
};

export default EmptyBasket;
