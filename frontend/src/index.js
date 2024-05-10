import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import Login from "./LoginPage/Login";
import LoginForm from "./LoginPage/LoginForm";
import Product1 from "./Products/Product1";
import Product3 from "./Products/Product3";
import Product2 from "./Products/Product2";
import Product4 from "./Products/Product4";
import Product5 from "./Products/Product5";
import Product6 from "./Products/Product6";
import Cartpage from "./Cartpage/CartPage";
import VisaPage from "./VisaPage/Visa";
import Ondemandl from "./Demand/Demand";
import Aboutus from "./aboutuspage/Aboutus";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";
import Polices1 from "./Polices/Polices1";
import Polices2 from "./Polices/Polices2";
import"./VisaPage/index1.css"
import AllProducts from "./AllProducts";


function AppRouter() {
  const logged = useSelector(state => {
    console.log(state.user);
    return state.user.logged
  });
  return (<div>
    {
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/header" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/polices1" element={<Polices1 />} />
          <Route path="/polices2" element={<Polices2 />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          <Route path="/product4" element={<Product4 />} />
          <Route path="/product5" element={<Product5 />} />
          <Route path="/product5" element={<Product5 />} />
          <Route path="/product6" element={<Product6 />} />
          <Route path="/cartpage" element={logged ? <Cartpage /> : <LoginForm />} />
          <Route path="/Demand" element={logged ? <Ondemandl /> : <LoginForm />} />
          <Route path="/visa" element={logged ? <VisaPage /> : <LoginForm />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/allproducts" element={<AllProducts />} />
          

        </Routes>
      </BrowserRouter>
    }
  </div>);
}
createRoot(document.getElementById("root")).render(
  <CartProvider>
    <Provider store={store}> <AppRouter /></Provider>
    <ScrollToTop smooth />
    </CartProvider>

);
