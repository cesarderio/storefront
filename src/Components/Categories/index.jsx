import { ButtonGroup, Link, Button } from "@mui/material";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { selectCategory } from "../../store/active-category";

// import store from "../../store";
// import { incrementCount, decrementCount } from "../../store/cart";

const Categories = (props) => {
  // const { incrementCount, decrementCount, products } = props;

  const { categories, selectCategory } = props;

  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="text button group">
        {categories.map((category, index) => (
          <Button key={`categories-index`} onClick={() => selectCategory(category.name)}>{category.displayName}</Button>
        ))}
      </ButtonGroup>
    </>
  );
};

const mapStateToPotato = ({ products }) => {
  return {
    categories: products.categories,
    // activeCategory: store.activeCategory,
    // category: store.category,
    // products: store.products,
    // cart: store.cart,
  };
};

const mapDispatchToPotato = {
  selectCategory,
  // incrementCount,
  // decrementCount,
};

export default connect(mapStateToPotato, mapDispatchToPotato)(Categories);
