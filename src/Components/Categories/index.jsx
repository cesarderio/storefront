import { ButtonGroup, Link, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCategory } from "../../store/actions";
// import { getProducts } from "../../store/products";
import { getCats } from "../../store/categories";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);
// const { list } = useSelector((state) => state.category)
  // const { productsList } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCats());
  }, []);

  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="text button group">
        {categories.map((category, index) => (
          <Button
          data-testid={`category-${index}`}
            key={`category-${index}`}
            onClick={() => dispatch(selectCategory(category.name))}>
            {category.displayName}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default Categories;
