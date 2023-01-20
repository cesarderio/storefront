import { ButtonGroup, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories, selectCategory } from "../../store/actions";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="text button group">
        {categories.map((category, index) => (
          <Button
          data-testid={`category-${index}`}
            key={`category-${index}`}
            onClick={() => dispatch(selectCategory(category.name))}>
            {category.name}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default Categories;
