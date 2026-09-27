import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import StoreCart from "../components/StoreCart/StoreCart";
import slides from "../data/product";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Store = () => {
  useGSAP(() => {
    const storeCarts = gsap.utils.toArray(".store-cart");
    storeCarts.forEach((cart, id) => {
      gsap.fromTo(
        cart,
        {
          y: id * 100 + 80,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: ".stores-box",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1.5,
          },
        },
      );
    });
  }, []);

  return (
    <div className="stores-box w-full min-h-[100vh] max-lg:min-h-[250vh]">
      <div className="absolute w-full h-full flex gap-4 pl-4 pr-4 max-lg:flex-wrap">
        {slides.map((cart, id) => {
          return <StoreCart key={id} num={id} cart={cart} />;
        })}
      </div>
    </div>
  );
};

export default Store;
