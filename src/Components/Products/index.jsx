
import { Button, Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/actions";

// Displays a list of products associated with the selected category.
const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.category)

  return(
    <>
    {activeCategory && products.map((product, index) => (
      <Card key={`product-${index}`} variant='outlined' >
        {product.name}
        <Button variant="text" onClick={() => dispatch(addItem(product))}>ADD ITEM</Button>
        </Card>
    ))}
    </>
  )
};

export default Products;








// const mapStateToProps = ({ products }) => {
//   return {
//     products: products.products,
//     activeCategory: products.activeCategory,
//   };
// };

