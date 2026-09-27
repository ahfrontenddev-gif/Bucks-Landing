import { motion } from "motion/react";
const variText = {
  initial: {},
  hover: { scale: 0.7 },
};

const StoreCartText = ({ name }) => {
  return (
    <motion.div variants={variText} transition={{duration:.4 ,ease:"backOut"}} className="text origin-top text-[3.7rem] text-[#F5E4C7] w-[85%] mr-auto ml-auto text-center font-[Estedad]">
      <h5 className="max-lg:w-[75%] m-auto max-w-[34rem]">{name}</h5>
    </motion.div>
  );
};

export default StoreCartText;
