import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import ButtonAnimation from "../ButtonAnimation";
import { motion } from "motion/react";

const variHover1 = {
  initial: {},
  hover: {
    color: "#f5e4c7",
  },
};
const variHover2 = {
  initial: {},
  hover: {
    color: "#100b06",
  },
};

const variButton = {
  initial: { opacity: 0, y: 100 },
  hover: { opacity: 1, y: 0 },
};
const StoreCartButton = ({ price, addToCart, id }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-3 absolute bottom-4 left-0">
      <motion.div
        variants={variButton}
        className="w-full h-28 pl-[2rem] pr-[2rem] hover:scale-105"
        transition={{ duration: 0.4 ,ease:"backOut"}}
      >
        <ButtonAnimation
          key={1}
          onFun={addToCart}
          bg="#f5e4c7"
          bgHover="#100b06"
          positionText="y"
          wEl="true"
          borderColor="#f5e4c7"
          text={
            <motion.span
              variants={variHover1}
              className="w-full h-full flex justify-between items-center pl-[2rem] pr-[2rem]"
            >
              <h5 className="text-[2rem]">اضافه به سبد</h5>

              <span className="text-[2rem]">{price}</span>
            </motion.span>
          }
        />
      </motion.div>

      <motion.div
        variants={variButton}
        transition={{ duration: 0.5,ease:"backOut" }}
        className="w-full h-28 pl-[2rem] pr-[2rem] hover:scale-105"
      >
        <ButtonAnimation
          onFun={() => navigate(`/product/${id}`)}
          key={2}
          bg=""
          bgHover="#f5e4c7"
          positionText="y"
          wEl="true"
          borderColor="#100b06"
          text={
            <motion.span
              variants={variHover2}
              className="w-full h-full flex justify-between items-center pl-[2rem] pr-[2rem] text-[#f5e4c7] "
            >
              <h5 className="text-[2rem] text-">نمایش محصول</h5>

              <GoArrowLeft className="rotate-45 w-14 h-14" />
            </motion.span>
          }
        />
      </motion.div>
    </div>
  );
};

export default StoreCartButton;
