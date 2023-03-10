import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, adjustInventory } from "../../store/actions";
import { getProducts, getDetails } from "../../store/actions";

// Displays a list of products associated with the selected category.
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  const { activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const renderList = products.filter((product) => product.category === activeCategory);

  const addHandler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  };
  const detailsHandler = (product) => {
    dispatch(getDetails(product));
  }

  // <img alt={product.name} src={`https://source.unsplash.com/random?${product.name}`} />
  return (
    <>
      {activeCategory &&
        renderList.map((product, index) => (
          <Card 
            sx={{ maxWidth: 345 }}
            data-testid={`product-${index}`}
            key={`product-${index}`}
            variant="outlined">
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={`https://source.unsplash.com/random?${product.name}`}
            />
            <CardContent>
              <Typography>{product.name}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="text" onClick={() => addHandler(product)}>
                ADD TO CART
              </Button>
              <Button
                variant="text"
                onClick={() => detailsHandler(product)}
              >
                VIEW DETAILS
              </Button>
              {/* <Button variant="text" onClick={(handler) => dispatch(addItem(product))}>
              ADD ITEM
            </Button> */}
            </CardActions>
          </Card>
        ))}
    </>
  );
};

export default Products;
