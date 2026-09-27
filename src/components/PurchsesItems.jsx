import { useContext } from "react";
import { TiPlus } from "react-icons/ti";
import { CartContext } from "../context/Cart";
import { motion } from "motion/react";
const slides = [
  {
    id: 1,
    src: "/product/image-cherry.avif",
    bg: "#DA1F27",
    tag: "گیلاس",
  },
  {
    id: 2,
    src: "/product/image-pineapple.avif",
    bg: "#BE8D3F",
    tag: "اناناس",
  },
  {
    id: 3,
    src: "/product/image-peach.avif",
    bg: "#EF8F4A",
    tag: "هلو",
  },
];

const PurchsesItems = () => {
  const { funAdd } = useContext(CartContext);
  return (
    <div className="items w-full flex gap-[3rem] max-lg:justify-center">
      {slides.map((item, index) => {
        return (
          <div
            key={index}
            className="item w-[20%] flex flex-col gap-2 items-center max-lg:w-[30%]"
          >
            <span style={{ color: item.bg }} className="text-[2.3rem]">
              {item.tag}
            </span>
            <div
              style={{ backgroundColor: item.bg }}
              className="relative rounded-2xl p-[2rem] pt-[0rem]"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={item.src}
                alt={item.tag}
              />
              <button
                onClick={() => funAdd(item.src)}
                className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[50%] aspect-square rounded-full bg-[#f5e4c7] flex items-center justify-center"
              >
                <TiPlus className="w-8 h-8" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PurchsesItems;
