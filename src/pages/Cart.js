import BreadCrumb from "components/BreadCrumb";
import Shopping from "parts/Cart/Shopping";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";

const Cart = () => {
  return (
    <>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shoping Cart" },
        ]}
      />

      <Shopping />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Cart;
