import { motion } from "motion/react";
import ProductPurchases from "./product/Purchase";
import Description from "./product/Description";
import ParTextSplit from "./product/ParTextSplit";
import Titile from "./product/Titile";
const ProductInfo = ({ info }) => {
  const { id, name, description, options, price, image2 } = info;

  return (
    <div className="info flex flex-col gap-10 items-center justify-between h-full flex-1 font-[craft] h-full mt-[5rem]">
      <Titile name={name} />
      <ParTextSplit description={description} />
      <div className="boxes w-full flex flex-col flex-wrap gap-6 pt-[5vh]">
        <Description
          options={options}
          image2={image2}
          description={description}
        />
        <ProductPurchases />
      </div>
    </div>
  );
};

export default ProductInfo;
