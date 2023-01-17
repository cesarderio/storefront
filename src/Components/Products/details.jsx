
import { Card } from "@mui/material";
import { connect } from "react-redux";
import store from "../../store";

// Displays a list of products associated with the selected category.
const Products = (props) => {

  const {
    products,
  } = props;

  return(
    <>
    {products.map(product => (
      <Card>{product}</Card>
    ))}
    </>
  )
}
 export default Products;
