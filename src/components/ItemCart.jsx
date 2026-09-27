const ItemCart = ({ cart, num }) => {
  let mtop = num * 164;

  return (
    <div
      style={{ marginTop: `${mtop}px` }}
      className="cart z-30 absolute flex flex-col w-[45rem] h-[45rem] font-[Soraya] max-lg:w-[80%] max-lg:aspect-[1/.8] max-lg:h-auto max-sm:w-[90%] max-[500px]:aspect-[1/.6]"
    >
      <div className="w-full h-[80px] bg-[snow] rounded-3xl relative flex items-center justify-center">
        <h5 className="text-[2.7rem] font-[Estedad]">{cart.title}</h5>

        <span className="absolute top-1/2 -translate-y-1/2 right-[90%] w-6 h-6 rounded-full bg-black" />

        <span className="absolute top-1/2 -translate-y-1/2 left-[90%] w-6 h-6 rounded-full bg-black" />
      </div>

      <div className="bottom bg-[#100b06] w-full flex-1 flex flex-col items-center justify-center gap-20 text-[#f5e4c7] border border-[#f5e4c7] rounded-3xl max-lg:justify-start max-lg:p-20 max-lg:gap-[8vh] max-sm:gap-[3vh] max-sm:p-[3rem]">
        <span className="rounded-full p-7 border-2 border-[snow] max-sm:scale-90">
          {cart.icon}
        </span>

        <p className="w-[90%] text-[1.7rem] leading-[2.5] max-sm:w-[100%]">
          {cart.description}
        </p>
      </div>
    </div>
  );
};

export default ItemCart;
