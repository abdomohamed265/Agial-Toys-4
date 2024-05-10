import { CartProvider } from "react-use-cart";
import Navbar from "./homepage/Navbar";
import { Page2 } from "./Products/Product2";
import { Page1 } from "./Products/Product1";
import { Page3 } from "./Products/Product3";
import { Page4 } from "./Products/Product4";
import { Page5 } from "./Products/Product5";
import { Page6 } from "./Products/Product6";
import Footer from "./homepage/Footer";
function AllProducts() {
  return (
    <CartProvider>
    <Navbar/>
     <Page1/>
     <Page2/>
     <Page3/>
     <Page4/>
     <Page5/>
     <Page6/>
      <Footer/>
    </CartProvider>
  );
}
export default AllProducts;
