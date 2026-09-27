import Menu from "../components/Menu";
import Cart from "../components/Cart";
import ButtonAnimation from "../components/ButtonAnimation";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.15, ease: "backOut" }}
      className="fiexd top-0 left-0 w-full flex justify-between items-center pt-5 pl-5 pr-5 max-lg:gap-[7vw] font-[Soraya]"
    >
      <div className="flex gap-3 items-center max-lg:flex-1">
        <Menu />
        <Cart />
        <div className="h-24 w-[18rem] max-lg:flex-1 max-sm:h-20">
          <ButtonAnimation
            onFun={() => navigate("/product/2")}
            bg="#f5e4c7"
            padding="false"
            borderColor="#f5e4c7"
            positionText="y"
            text={<p className="text-[2.1rem] text-[#100b06] max-sm:text-[1.8rem]">سس بگیرید</p>}
          />
        </div>
      </div>
      <div className="">
        <img src="/image/logo.png" className="h-28 max-sm:scale-110 max-sm:h-20 aspect-square" alt="" />
      </div>
    </motion.nav>
  );
};

export default Nav;
