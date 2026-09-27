import { IoIosArrowRoundForward } from "react-icons/io";
import ButtonAnimation from "./ButtonAnimation";

const ButtonSlider = ({ prevSlide, nextSlide }) => {
  return (
    <>
      <div
        onClick={prevSlide}
        className="overflow-hidden p-[3rem] max-sm:p-[2rem] z-[49] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-1/12 border border-[#F5E4C7] bg-[#F5E4C7] rounded-full hover:bg-[#100B06] hover:scale-110 transition max-lg:right-[4%]"
      >
        <ButtonAnimation
          bg="#f5e4c7"
          padding="false"
          borderColor="#f5e4c7"
          positionText="y"
          style={{ borderRadius: "100%" }}
          icon={<IoIosArrowRoundForward className="w-14 h-14" />}
        />
      </div>
      <div
        onClick={nextSlide}
        className="overflow-hidden rotate-180 p-[3rem] max-sm:p-[2rem] z-[49] absolute flex items-center justify-center top-1/2 -translate-y-1/2 left-1/12 border border-[#F5E4C7] bg-[#F5E4C7] rounded-full hover:bg-[#100B06] hover:scale-110 transition max-lg:left-[4%]"
      >
        <ButtonAnimation
          bg="#f5e4c7"
          padding="false"
          borderColor="#f5e4c7"
          positionText="y"
          style={{ borderRadius: "100%"}}
          icon={<IoIosArrowRoundForward className="w-14 h-14" />}
        />
      </div>
    </>
  );
};
export default ButtonSlider;
