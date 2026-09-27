import PurchasesProduct from "../components/PurchasesProduct";
import PurchasesCart from "../components/PurchasesCart";
import { CartProvider } from "../context/Cart";

const Purchase = () => {
  return (
    <CartProvider>
      <section className="min-h-dvh w-dvw pr-[2rem] pl-[2rem] font-[Estedad]">
        <div className="h-full w-full p-[1rem] rounded-2xl bg-[#262119]">
          <div className="h-full flex items-center gap-[3rem] w-full p-[5rem] border-2 border-[#262119] border-dotted rounded-2xl max-lg:flex-col max-lg:gap-[10rem] max-sm:p-[3rem]">
            <PurchasesProduct />
            <PurchasesCart />
          </div>
        </div>
      </section>
    </CartProvider>
  );
};

export default Purchase;
