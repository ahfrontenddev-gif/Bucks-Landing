import { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { AnimatePresence } from "motion/react";
import ShowMenu from "./ShowMenu";
import ButtonAnimation from "./ButtonAnimation";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="h-24 w-28 max-sm:h-20 max-sm:w-20">
        <ButtonAnimation
          onFun={() => setShowMenu(true)}
          bg="#100b06"
          borderColor="#f5e4c7"
          positionIcon
          icon={<TbMenu className="w-10 h-10 text-[#f5e4c7]" />}
        />
      </div>
      <AnimatePresence>
        {showMenu && <ShowMenu setShowMenu={setShowMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Menu;
