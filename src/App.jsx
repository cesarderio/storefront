import "./App.css";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import SimpleCart from "./Components/SimpleCart";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreFront from "./Components/StoreFront";
import Checkout from "./Components/Checkout";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreFront />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {/* <Categories />
        <Products />
        <SimpleCart /> */}
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
