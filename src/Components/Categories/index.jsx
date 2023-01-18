import { ButtonGroup, Link, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../store/actions";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

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
