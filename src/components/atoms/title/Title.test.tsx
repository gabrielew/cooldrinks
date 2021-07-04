import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../utils/tests/helpers";
import Title from ".";

describe("<Title />", () => {
  it("should render a white title label", () => {
    renderWithTheme(<Title title="White title label" color="white" />);
    expect(screen.getByRole("heading", { name: /White title label/i })).toHaveStyle({
      color: "#ffffff",
    });
  });
  it("should render a black title label", () => {
    renderWithTheme(<Title title="White title label" color="black" />);
    expect(screen.getByRole("heading", { name: /White title label/i })).toHaveStyle({
      color: "#000000",
    });
  });
});
