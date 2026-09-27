import { useMotionValue, useSpring, motion } from "motion/react";

const ImageItem = ({ src, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const moveX = (mouseX - rect.width / 2) * 0.1;
    const moveY = (mouseY - rect.height / 2) * 0.1;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <img className="w-full" src={src} alt="" />
    </motion.div>
  );
};

export default ImageItem;
