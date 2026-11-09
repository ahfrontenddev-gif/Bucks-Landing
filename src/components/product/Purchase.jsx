import { motion } from "motion/react";
import ButtonAnimation from "../ButtonAnimation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useParams } from "react-router-dom";
import slides from "../../data/product";

const Purchase = () => {
  const { productId } = useParams();
  const product = slides[productId - 1];
  const { price, bg } = product;
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  return (
    <div className="bottom flex items-center justify-between gap-8 max-sm:flex-col">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 1.1,
            ease: "backInOut",
          },
        }}
        className="box h-32 border-[1.5px] border-[#f5e4c7] flex-1 flex items-center text-[#f5e4c7] rounded-2xl overflow-hidden max-sm:w-full"
      >
        <div className="left w-[60%] text-[2.3rem] p-5 pl-0 hover:bg-stone-900 transition">
          <h6>واحد : یک بطری</h6>
        </div>
        <div className="right p-5 pr-0 border-r-[1.5px] border-[#f5e4c7] flex items-center justify-center gap-6 w-[40%] text-[2.3rem]">
          <button
            onClick={() => {
              if (num > 1) {
                setNum((num) => num - 1);
              }
            }}
            className="hover:bg-stone-900 transition pl-1 pr-1"
          >
            -
          </button>
          <span>{num}</span>
          <button
            onClick={() => setNum((num) => num + 1)}
            className="hover:bg-stone-900 transition pl-1 pr-1"
          >
            +
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 1.4,
            ease: "backInOut",
          },
        }}
        className="box h-32 flex-1 max-sm:w-full"
      >
        <ButtonAnimation
          onFun={() => dispatch(addToCart({ ...product, quantity: num }))}
          key={2}
          bg={bg}
          bgHover="#100b06"
          positionText="y"
          wEl="true"
          borderColor={bg}
          text={
            <motion.span className="w-full h-full flex justify-between items-center max-sm:py-[1rem] pl-[2rem] pr-[2rem] text-[#f5e4c7]">
              <h6 className="text-[1.8rem]">اضافه به سبد خرید</h6>
              <span className="text-[1.8rem]"> {price}</span>
            </motion.span>
          }
        />
      </motion.div>
    </div>
  );
};

export default Purchase;
