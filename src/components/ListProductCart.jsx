import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import ButtonAnimation from "./ButtonAnimation";
import { clearCart, removeFromCart } from "../redux/cartSlice";
import { TbHttpDelete } from "react-icons/tb";

const ListProductCart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full absolute pt-[6rem] flex flex-col">
      <ul className="w-full flex-1 p-[2rem] flex flex-col">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ border: "2.4px solid #f5e4c7", borderStyle: "dotted" }}
            whileHover={{
              border: "2.4px solid #100b06",
              borderStyle: "dotted",
            }}
            className="w-full h-[30%] flex items-center rounded-2xl"
          >
            <div className="flex-2 max-h-full flex items-center justify-center">
              <img className="h-full block-52" src={item.src} alt="" />
            </div>
            <span className="flex-4 h-full flex items-center justify-around">
              <h6 className="text-[2rem]">{item.price}تومان</h6>
              <h6 className="text-[2.5rem]">{item.quantity} تعداد</h6>
            </span>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(removeFromCart(item.id))}
              className="flex-1 h-full flex items-center justify-center"
            >
              <TbHttpDelete className="w-14 h-14 text-red-600" />
            </motion.button>
          </motion.li>
        ))}
      </ul>
      <div className="w-full h-24 flex justify-between items-center pl-[2rem] pr-[2rem] pb-[1rem]">
        <span className="text-[2rem] text-green-500">10000 تومان</span>
        <div>
          <ButtonAnimation
            onFun={() => dispatch(clearCart)}
            bg="#f5e4c7"
            positionText="y"
            wEl="true"
            borderColor="#100b06"
            icon={
              <p className="text-[2rem] text-[#100b06] pt-[.8rem] pb-[,8rem] pl-[3rem] pr-[3rem]">
                پرداخت
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ListProductCart;
