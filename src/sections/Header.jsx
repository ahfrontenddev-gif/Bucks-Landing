import { motion } from "motion/react";

const text = "سس باربیکیو که سس های دیگر را ناامن می کند";

const Header = () => {
  const words = text.split(" ");

  return (
    <header className="w-full font-[Soraya]">
      <div>
        <div className="w-full pt-[4rem] pb-[8rem] flex justify-center max-sm:pb-[0] max-sm:pt-[8rem]">
          <motion.p
            className="text-[8rem] w-[70%] text-center text-[#F5E4C7] font-[Estedad] max-lg:text-[5.5rem] max-sm:w-[85%] max-sm:text-[4rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-4"
                variants={{
                  hidden: {
                    y: 100,
                    opacity: 0,
                  },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: index * 0.05,
                      ease: "backOut",
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;
