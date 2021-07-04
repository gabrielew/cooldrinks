import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../utils/tests/helpers";
import Logo from ".";

describe("<Logo />", () => {
  it("should render logo and have aria label description", () => {
    renderWithTheme(<Logo />);
    expect(screen.getByAltText(/Cooldrinks Logo/i));
  });
});
