import BreadCrumb from "components/BreadCrumb";
import Main from "parts/Congratulation/Main";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";

const Congratulation = () => {
  return (
    <>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shoping Cart" },
        ]}
      />
      <Main />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Congratulation;
