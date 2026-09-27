import { useState } from "react";
import LineShowProduct from "../components/LineShowProduct";
import Silder from "../components/Silder";
import { useNavigate } from "react-router-dom";
import slides from "./../data/product";
import ButtonAnimation from "../components/ButtonAnimation";
const ShowProduct = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="show-product font-[Soraya] h-[55rem] relative mt-[6rem]">
      <Silder
        slides={slides}
        current={current}
        onCurrennt={setCurrent}
        direction={direction}
        setDirection={setDirection}
      />
      <LineShowProduct
        slides={slides}
        current={current}
        direction={direction}
      />
      <div className="z-30 absolute top-full left-1/2 -translate-1/2 h-28 w-[28rem] max-sm:h-24 max-sm:w-[20rem]">
        <ButtonAnimation
          onFun={() =>  navigate("/product/1")}
          bg="#f5e4c7"
          padding="false"
          borderColor="#f5e4c7"
          positionText="y"
          text={
            <p className="text-[2.5rem] text-[#100b06] max-sm:text-[1.9rem]">همین الان بخرید</p>
          }
        />
      </div>
    </div>
  );
};

export default ShowProduct;
