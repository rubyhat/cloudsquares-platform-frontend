import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { PropertyUpdate } from "../PropertyUpdate";

describe("Page PropertyUpdate", () => {
  it("renders the PropertyCreate page", () => {
    render(
      <MemoryRouter>
        <PropertyUpdate />
      </MemoryRouter>,
    );

    const rootElement = screen.getByTestId("pagePropertyUpdate");
    expect(rootElement).toBeInTheDocument();
  });
});
