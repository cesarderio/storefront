import { ButtonGroup, Link, Button } from "@mui/material";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, categories, reset } from "../../store/actions";

const Categories = (props) => {
  const dispatch = useDispatch();
  const { categories, selectCategory } = useSelector((state) => state);

  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="text button group">
        {categories.map((category, index) => (
          <Button
            key={`categories-${index}`}
            onClick={() => dispatch(selectCategory(category.name))}>
            {category.displayName}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default Categories;
