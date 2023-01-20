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
import { getDetails } from "../../store/actions";

const Details = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDetails());
  }, []);

  const addHandler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  };

  // <img alt={product.name} src={`https://source.unsplash.com/random?${product.name}`} />
  return (
    <>
          <Card 
            sx={{ maxWidth: 345 }}
            data-testid={`product-${index}`}
            key={`product-${index}`}
            variant="outlined">
              <Typography>{product.name}</Typography>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={`https://source.unsplash.com/random?${product.name}`}
            />
            <CardContent>
              <Typography>`In Stock: ${product.inStock}`</Typography>
              <Typography>{product.name}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="text" onClick={() => addHandler(product)}>
                BUY
              </Button>

            </CardActions>
          </Card>
        ))}
    </>
  );
};

export default Details;
