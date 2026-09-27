import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { AnimatePresence } from "motion/react";
import ShowCart from "./ShowCart";
import ButtonAnimation from "./ButtonAnimation";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div className="h-24 w-28 max-sm:h-20 max-sm:w-20">
        <ButtonAnimation
          onFun={() => setShowCart(true)}
          bg="#100b06"
          borderColor="#f5e4c7"
          positionIcon
          icon={<BsCart3 className="w-10 h-10 text-[#f5e4c7]" />}
        />
      </div>
      <AnimatePresence>
        {showCart && <ShowCart setShowCart={setShowCart} />}
      </AnimatePresence>
    </>
  );
};


export default Cart;
