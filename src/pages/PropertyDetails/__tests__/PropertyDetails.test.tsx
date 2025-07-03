import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { PropertyDetails } from "../PropertyDetails";

describe("Page PropertyDetails", () => {
  it("renders the PropertyDetails page", () => {
    render(
      <MemoryRouter>
        <PropertyDetails />
      </MemoryRouter>,
    );

    const rootElement = screen.getByTestId("pagePropertyDetails");
    expect(rootElement).toBeInTheDocument();
  });
});
