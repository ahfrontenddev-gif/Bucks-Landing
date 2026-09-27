import ItemCart from "../components/ItemCart";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Images from "../components/Images";

import { TbDna2Off, TbPlantOff, TbWheatOff } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const dataCarts = [
  {
    title: "بدون شربت ذرت",
    description:
      "شیرینی خوب است، اما شیرینیِ مصنوعی و آزمایشگاهی نه. برای همین، شربت ذرت با فروکتوز بالا را همان‌جا در قفسه پایین — که جایش همان‌جاست — باقی گذاشتیم.",
    icon: (
      <TbPlantOff className="w-24 h-24 max-lg:w-[10rem] max-lg:h-[10rem]" />
    ),
  },
  {
    title: "بدون روغن‌های دانه‌ای",
    description:
      "بدون مواد نگهدارنده. بدون هیچ‌گونه افزودنی مصنوعی و بی‌مورد. بدون ترکیبات ناشناخته‌ای که پشت کلماتِ غیرقابل‌تلفظ پنهان شده‌اند.",
    icon: <TbDna2Off className="w-24 h-24 max-lg:w-[10rem] max-lg:h-[10rem]" />,
  },
  {
    title: "بدون مواد افزودنی",
    description:
      "بدون مواد نگهدارنده. بدون هیچ‌گونه افزودنی مصنوعی و بی‌مورد. بدون ترکیبات ناشناخته‌ای که پشت کلماتِ غیرقابل‌تلفظ پنهان شده‌اند.",
    icon: <TbDna2Off className="w-24 h-24 max-lg:w-[10rem] max-lg:h-[10rem]" />,
  },
  {
    title: "بدون گلوتن",
    description:
      "بدون گلوتن. بدون ترفندهای غلیظ‌کننده. بدون دردسر. فقط سسی که با رژیم غذایی‌تان سازگار است و روی کباب‌پز، حسابی غوغا می‌کند.",
    icon: (
      <TbWheatOff className="w-24 h-24 max-lg:w-[10rem] max-lg:h-[10rem]" />
    ),
  },
];

const BoxCarts = () => {
  useGSAP(() => {
    const carts = gsap.utils.toArray(".cart");
    carts.forEach((cart, num) => {
      if (num === 0) return;

      const left = num % 2;

      gsap.set(cart, {
        x: left ? 400 : -400,
        y: num * 300 + 500,
        rotate: left ? -15 : 15,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".carts",
        start: "top top",
        end: "+=1800",
        scrub: 2,
        pin: true,
        snap: 1 / (carts.length - 1),
      },
    });

    carts.forEach((cart, num) => {
      if (num === 0) return;

      tl.to(cart, {
        x: 0,
        y: 0,
        rotate: 0,
      });
    });

    // تصاویر
    const images = gsap.utils.toArray(".cart-image");

    images.forEach((image) => {
      gsap.set(image, {
        x: "30vw",
        y: "100vh",
      });

      gsap.to(image, {
        x: 0,
        y: 0,
        ease: "none",

        scrollTrigger: {
          trigger: ".carts",
          start: "top 0%",
          end: "top top",
          scrub: 2,
        },
      });
    });
  }, []);

  return (
    <section className="h-[2750px] relative w-full">
      <div className="carts absolute w-full min-h-dvh flex items-center justify-center">
        {dataCarts.map((cart, id) => (
          <ItemCart key={id} num={id} cart={cart} />
        ))}

        <Images />
      </div>
    </section>
  );
};

export default BoxCarts;
