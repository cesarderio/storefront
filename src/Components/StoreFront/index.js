import { Routes, Route, useParams, Link } from "react-router-dom";
import Categories from "../Categories";
import Products from "../Products";
import Details from "../Details";
import SimpleCart from "../SimpleCart";
import Checkout from "../Checkout";

const StoreFront = () => {
  // let { product } = useParams();
  return (
    <>
      <Categories />
      <Products />
      <SimpleCart />
    </>
  );
};
export default StoreFront;
