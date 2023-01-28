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
// import { addItem, adjustInventory } from "../../store/actions";
import { adjustInventory } from "../../store/products";
import { addItem } from "../../store/cart";
import { getDetails } from "../../store/actions";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  let products = useSelector(state => state.products);
  
  let theProduct = products.find(product => product._id === id)

  console.log({id}, {products})
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(getDetails());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  const addHandler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  };

  // <img alt={product.name} src={`https://source.unsplash.com/random?${product.name}`} />
  return (
    <>
      <h2>Product Details</h2>
      <Card
        sx={{ maxWidth: 600 }}
        data-testid={`product-${theProduct._id}`}
        key={`product-${theProduct._id}`}
        variant="outlined">
        <Typography>{theProduct.name}</Typography>
        <CardMedia
          component="img"
          alt={theProduct.name}
          height="300"
          image={`https://source.unsplash.com/random?${theProduct.name}`}
        />
        <CardContent>
          <Typography>In Stock: {theProduct.inStock}</Typography>
          <Typography>{theProduct.name}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" onClick={() => addHandler(theProduct)}>
            BUY
          </Button>
        </CardActions>
      </Card>
      )
    </>
  );
};

export default Details;
