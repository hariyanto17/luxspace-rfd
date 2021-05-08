import BreadCrumb from "components/BreadCrumb";
import Clients from "parts/Clients";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";

const Details = () => {
  return (
    <>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Details;
