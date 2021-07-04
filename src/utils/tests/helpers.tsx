import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";

import React from "react";
import { theme } from "../../themes";

export const renderWithTheme = (children: React.ReactNode):
RenderResult => render(
  <ThemeProvider theme={theme}>{children}</ThemeProvider>,
);
