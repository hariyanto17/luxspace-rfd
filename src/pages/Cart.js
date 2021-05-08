import BreadCrumb from "components/BreadCrumb";
import ShippingDetails from "parts/Cart/ShippingDetails";
import ShoppingCart from "parts/Cart/ShoppingCart";
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

      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </>
  );
};

export default Cart;
