import { useEffect } from "react";
import Store from "../sections/Store";
import { useLocation, useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo";
import { motion } from "motion/react";
import slides from "../data/product"

const Product = () => {
  const { pathname } = useLocation();
  const { productId } = useParams();
  const info = slides[productId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <main className="w-full flex p-8 gap-8 max-lg:flex-col">
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, ease: "backOut", duration: 0.3 }}
          className="rounded-2xl overflow-hidden flex-1"
        >
          <img
            className="h-full object-cover rounded-2xl overflow-hidden"
            src={info.bgImage}
            alt=""
          />
        </motion.div>
        <ProductInfo info={info} />
      </main>
      <Store />
      <div className="max-sm:h-[150px]"></div>
    </>
  );
};

export default Product;
