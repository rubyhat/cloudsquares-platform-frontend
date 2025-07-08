import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { PropertyCreate } from "../PropertyCreate";

describe("Page PropertyCreate", () => {
  it("renders the PropertyCreate page", () => {
    render(
      <MemoryRouter>
        <PropertyCreate />
      </MemoryRouter>,
    );

    const rootElement = screen.getByTestId("pagePropertyCreate");
    expect(rootElement).toBeInTheDocument();
  });
});
