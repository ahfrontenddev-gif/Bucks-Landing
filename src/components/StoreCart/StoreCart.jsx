import { motion } from "motion/react";
import StoreCartText from "./StoreCartText";
import StoreCartImage from "./StoreCartImage";
import StoreCartButton from "./StoreCartButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useMediaQuery } from "react-responsive";

const StoreCart = ({ cart, num }) => {
  const dispatch = useDispatch();
  const { id, name, src, image1, image2, price, bg } = cart;
  const isDesktop = useMediaQuery({ minWidth: "1024px" });

  const funAddToCart = () => {
    dispatch(addToCart(cart));
  };

  return (
    <motion.div
      initial={isDesktop && "initial"}
      whileHover={isDesktop && "hover"}
      className="store-cart flex-1 min-h-[58rem] max-lg:min-h-[70rem] max-lg:w-full max-lg:flex-none"
    >
      <div
        style={{ backgroundColor: bg }}
        className="h-full w-full overflow-hidden rounded-xl p-4"
      >
        <div className="relative overflow-hidden font-[Soraya] flex flex-col items-center pt-7 w-full h-full border border-dashed rounded-xl border-[#F5E4C7]">
          <StoreCartText name={name} />
          <StoreCartImage
            num={num}
            src={src}
            imageOne={image1}
            imageTwo={image2}
          />
          <StoreCartButton id={id} addToCart={funAddToCart} price={price} />
        </div>
      </div>
    </motion.div>
  );
};

export default StoreCart;
