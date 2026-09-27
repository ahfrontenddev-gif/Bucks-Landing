import { FaArrowLeftLong } from "react-icons/fa6";

const Email = () => {
  return (
    <div className="email order-4 col-span-2 flex h-full flex-1 flex-col justify-between lg:order-3 lg:col-span-1 max-lg:pt-[4rem] max-lg:pb-[4rem]">
      <div className="text w-full">
        <h6 className="text-[3rem] text-[#f5e4c7] -translate-y-5 font-[craft] max-lg:text-[4.5rem] max-sm:text-[3rem]">
          عضویت در کلاب ما
        </h6>
        <p className="text-[1.3rem] text-[#908573] mt-5 max-lg:mt-5 max-lg:text-[1.9rem] max-sm:text-[1.5rem]">
          سس های موجود غدای خشومره و حرومممم زاده
        </p>
      </div>
      <div className="button w-full relative rounded-xl overflow-hidden max-lg:mt-24">
        <input
          placeholder="ایمیل شما ..."
          className="w-full h-full pr-8 text-[1.5rem] text-[#908573] rounded-xl border-2 border-dotted border-[#908573] min-h-28 max-lg:min-h-36 max-lg:text-[1.75rem]"
        />

        <span className="w-24 h-24 overflow-hidden flex items-center justify-center rounded-full border-2 border-dotted border-[##908573] text-[#f5e4c7] absolute top-1/2 -translate-y-1/2 left-8">
          <FaArrowLeftLong className="absolute h-12 w-12" />
          <FaArrowLeftLong className="absolute h-12 w-12 translate-x-20 opacity-0" />
        </span>
      </div>
    </div>
  );
};

export default Email;
