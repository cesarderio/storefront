
import { Card } from "@mui/material";
import { connect } from "react-redux";

// Displays a list of products associated with the selected category.
const Products = ({ products, activeCategory }) => {
  // const {
  //   products,
  // } = props;

  return(
    <>
    {activeCategory && products.map((product, index) => (
      <Card key={`product-${index}`} variant='outlined' >{product.name}</Card>
    ))}
    </>
  )
};

const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
    activeCategory: products.activeCategory,
  };
};

export default connect(mapStateToProps)(Products);
