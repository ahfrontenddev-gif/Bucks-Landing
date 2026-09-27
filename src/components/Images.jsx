import ImageItem from "./ImageItem";
const Images = () => {
  return (
    <div className="carts-image">
      <ImageItem
        src="/model/pineapple.webp"
        className="absolute w-[15%] top-[10%] right-[10%] max-lg:scale-125 blur-xs max-md:scale-150"
      />

      <ImageItem
        src="/model/cherry.webp"
        className="absolute w-[8%] top-[10%] left-[20%] max-lg:scale-125 max-md:scale-150"
      />

      <ImageItem
        src="/model/onion.webp"
        className="absolute w-[18%] top-[50%] left-[5%] max-lg:scale-125 blur-sm max-md:scale-150"
      />

      <ImageItem
        src="/model/tomato.webp"
        className="absolute w-[10%] bottom-[10%] right-[25%] max-lg:scale-125 max-md:scale-150"
      />
    </div>
  );
};

export default Images;
