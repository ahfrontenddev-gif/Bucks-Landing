import React from "react";

const Logo = () => {
  return (
    <div className="logo order-1 col-span-1 h-full rounded-2xl border-2 border-dotted border-[#908573] max-lg:w-full lg:order-1 min-lg:max-h-[20rem] max-lg:p-20">
      <img
        src="/image/logo.png"
        className="h-full aspect-square m-auto max-lg:object-cover"
        alt=""
      />
    </div>
  );
};

export default Logo;
