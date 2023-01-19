import { Button, Card } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/actions";
import { getProducts } from "../../store/products";

// Displays a list of products associated with the selected category.
const Products = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.products);
  const { activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {activeCategory &&
        productsList.map((product, index) => (
          <Card
            data-testid={`product-${index}`}
            key={`product-${index}`}
            variant="outlined">
            {product.name}
            <Button variant="text" onClick={() => dispatch(addItem(product))}>
              ADD ITEM
            </Button>
          </Card>
        ))}
    </>
  );
};

export default Products;

// const mapStateToProps = ({ products }) => {
//   return {
//     products: products.products,
//     activeCategory: products.activeCategory,
//   };
// };
