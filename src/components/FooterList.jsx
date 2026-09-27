import { motion } from "motion/react";
import { FaArrowLeftLong } from "react-icons/fa6";
const List = [
  { id: 1, label: "خرید" },
  { id: 2, label: "درباره ما" },
  { id: 3, label: "ارتباط" },
];
const variIconLi = {
  initial: {},
  hover: { width: 30, height: 30, scale: 1.1 },
};
const FooterList = () => {
  return (
    <div className="list order-3 col-span-2 h-full lg:order-2 lg:col-span-1">
      <ul className="flex flex-col gap-2 justify-between text-[#f5e4c7] w-full h-full font-[craft] text-[2.7rem]">
        {List.map((li) => {
          return (
            <motion.li
              key={li.id}
              initial="initial"
              whileHover="hover"
              className="border-t-2 border-dotted border-[#908573] flex gap-3 items-center h-full max-lg:pt-3 max-lg:pb-3 pr-5"
            >
              <motion.span variants={variIconLi} className="w-0 h-0">
                <FaArrowLeftLong className="w-full h-full origin-center text-amber-50" />
              </motion.span>
              {li.label}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterList;
