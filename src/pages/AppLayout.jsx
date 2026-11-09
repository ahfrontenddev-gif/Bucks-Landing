import Header from "../sections/Header";
import ShowProduct from "../sections/ShowProduct";
import TextOne from "../sections/TextOne";
import TextTwo from "../sections/TextTwo";
import BoxCarts from "../sections/BoxCarts";
import Store from "../sections/Store";
import Purchase from "../sections/Purchase";

function AppLayout() {
  return (
    <main className="min-h-dvh min-w-dvw">
      <Header />
      <ShowProduct />
      <TextTwo />
      <Store />
      <TextOne />
      <Purchase />
      <BoxCarts />
    </main>
  );
}

export default AppLayout;
