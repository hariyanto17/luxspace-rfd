import ShippingDetails from "./ShippingDetails";
import ShoppingCart from "./ShoppingCart";

const Shopping = () => {
  return (
    <section class="md:py-16">
      <div class="container mx-auto px-4">
        <div class="flex -mx-4 flex-wrap">
          <ShoppingCart />
          <ShippingDetails />
        </div>
      </div>
    </section>
  );
};

export default Shopping;
