import { Button, Card } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, adjustInventory } from "../../store/actions";
import { getProducts } from "../../store/actions";

// Displays a list of products associated with the selected category.
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  const { activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const renderList = products.filter(product => product.category === activeCategory);

  const handler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  };

  return (
    <>
      {activeCategory &&
        renderList.map((product, index) => (
          <Card
            data-testid={`product-${index}`}
            key={`product-${index}`}
            variant="outlined">
            {product.name}
            <Button variant="text" onClick={() => handler(product)}>
              ADD ITEM
            </Button>
            {/* <Button variant="text" onClick={(handler) => dispatch(addItem(product))}>
              ADD ITEM
            </Button> */}
          </Card>
        ))}
    </>
  );
};

export default Products;
