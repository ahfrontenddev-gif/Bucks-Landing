import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonAnimation from "../components/ButtonAnimation";
import Images from "../components/Images";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="w-dvw h-dvh flex flex-col items-center justify-center gap-[4rem] text-[#f5e4c7]">
      <p className="text-[2.4rem]">
        متاسفیم، اما صفحه‌ای که به
        <br />
        دنبال آن هستید وجود ندارد.
      </p>
      <h6 className="text-[15rem] scale-200">404</h6>
      <div className="w-[30rem] h-[7rem] bg-[#BE8D3F] rounded-2xl transition hover:scale-110 hover:bg-[#100b06]">
        <ButtonAnimation
          onFun={() => navigate("/")}
          positionText="y"
          borderColor="#BE8D3F"
          text={
            <p className="text-[2.5rem] text-[#f5e4c7] "> برگشت به صفحه اصلی</p>
          }
        />
      </div>
      <Images />
    </main>
  );
};

export default PageNotFound;
