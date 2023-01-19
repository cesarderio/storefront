import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../store";

describe("App integration", () => {
  it("renders products as expected", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    let electronics = screen.getByTestId("category-0");
    let food = screen.getByTestId("category-1");
    let clothing = screen.getByTestId("category-2");

    expect(electronics).toHaveTextContent("Electronics");
    expect(food).toHaveTextContent("Food");
    expect(clothing).toHaveTextContent("Clothing");

    fireEvent.click(electronics);
    let tv = screen.getByTestId("product-0");
    let radio = screen.getByTestId("product-1");
    expect(tv).toHaveTextContent("TV");
    expect(radio).toHaveTextContent("Radio");

    fireEvent.click(food);
    let apples = screen.getByTestId("product-0");
    let eggs = screen.getByTestId("product-1");
    expect(apples).toHaveTextContent("Apples");
    expect(eggs).toHaveTextContent("Eggs");

    fireEvent.click(clothing);
    let shirt = screen.getByTestId("product-0");
    let socks = screen.getByTestId("product-1");
    expect(shirt).toHaveTextContent("Shirt");
    expect(socks).toHaveTextContent("Socks");
  });
});
