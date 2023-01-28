import "./App.css";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import SimpleCart from "./Components/SimpleCart";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreFront from "./Components/StoreFront";
import Checkout from "./Components/Checkout";
import Details from "./Components/Details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StoreFront />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
