import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../utils/tests/helpers";
import Icon from ".";

describe("<Icon />", () => {
  it("should render with back icon button", () => {
    renderWithTheme(<Icon name="back" />);
    expect(screen.getByAltText(/back icon/i));
  });

  it("should render with search icon button", () => {
    renderWithTheme(<Icon name="search" />);
    expect(screen.getByAltText(/search icon/i));
  });
});
