import { motion } from "motion/react";
// <ButtonAnimation
//   key={2}
//   bgHover="#f5e4c7"
//   positionText="y"
//   wEl="true"
//   borderColor="#f5e4c7"
//   icon={
//     <motion.span
//       variants={variIcon}
//       className="w-full h-full flex justify-center items-center "
//     >
//       <FaInstagram className="w-12 h-12 max-lg:w-16 max-lg:h-16" />
//     </motion.span>
//   }
// />
const buttonVariants = {
  initial: ({ bg }) => ({
    backgroundColor: bg,
  }),

  hover: ({ bgHover }) => ({
    backgroundColor: bgHover || undefined,
  }),
};

const iconOneVariants = {
  initial: (dir) => ({
    ...(dir === "y" ? { y: 0 } : { x: 0 }),
    opacity: 1,
    scale: 1,
  }),

  hover: (dir) => ({
    ...(dir === "y" ? { y: -50 } : { x: 50 }),
    opacity: 0,
    scale: 0.5,
  }),
};

const iconTwoVariants = {
  initial: (dir) => ({
    ...(dir === "y" ? { y: 50 } : { x: -50 }),
    opacity: 0,
    scale: 0.5,
  }),

  hover: (dir) => ({
    ...(dir === "y" ? { y: 0 } : { x: 0 }),
    opacity: 1,
    scale: 1,
  }),
};

const ButtonAnimation = ({
  icon,
  onFun,
  text,
  padding,
  bg,
  positionIcon,
  positionText,
  borderColor,
  style,
  wEl,
  bgHover,
}) => {
  return (
    <motion.button
      style={{
        ...style,
        borderColor: borderColor,
      }}
      onClick={onFun}
      variants={buttonVariants}
      custom={{
        bg,
        bgHover,
      }}
      initial="initial"
      whileHover="hover"
      className={`w-full h-full transition overflow-hidden rounded-2xl flex items-center justify-center gap-4 p-[${padding}] border-2`}
    >
      {icon && (
        <Animate
          direction={positionIcon}
          varone={iconOneVariants}
          vartwo={iconTwoVariants}
        >
          {icon}
        </Animate>
      )}

      {text && (
        <Animate
          direction={positionText}
          varone={iconOneVariants}
          vartwo={iconTwoVariants}
          wEl={wEl}
        >
          {text}
        </Animate>
      )}
    </motion.button>
  );
};

export default ButtonAnimation;

const Animate = ({ children, direction, varone, vartwo, wEl }) => {
  return (
    <div
      className={`${wEl && "w-full"} icon relative flex items-center justify-center`}
    >
      <motion.div
        className={`${wEl && "w-full"}`}
        variants={varone}
        custom={direction}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className={`${wEl && "w-full"} absolute`}
        variants={vartwo}
        custom={direction}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
