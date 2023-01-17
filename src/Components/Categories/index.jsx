import { Link } from "@mui/material";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../store";
import { incrementCount, decrementCount } from "../../store/cart";

const Categories = (props) => {

  const {
    incrementCount,
    decrementCount,
    products,
  } = props;

  return (
    <>
      <h2>Browse our Categories</h2>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/food" element={<Food />}/>
        <Route path="/electronics" element={<Electronics />}/>
        <Route path="/games" element={<Games />} />
        <Route path="/weapons" element={<Weapons />} />
      </Routes>
    
    </BrowserRouter> */}
      {/* <Link to='/' default>Home</Link> */}
      <Link to="/food">Food</Link>
      <Link to="/electronics">Electronics</Link>
      <Link to="/games">Games</Link>
      <Link to="/weapons">Weapons</Link>
    </>
  );
};

const mapStateToPotato = (store) => {
  return {
    activeCategory: store.activeCategory,
    category: store.category,
    products: store.products,
    cart: store.cart,
  };
};

const mapDispatchToPotato = {
  incrementCount,
  decrementCount,
};

export default connect(mapStateToPotato, mapDispatchToPotato)(Categories);
