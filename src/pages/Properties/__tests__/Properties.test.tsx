import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Properties } from "../Properties";

describe("Page Properties", () => {
  it("renders the Properties page", () => {
    render(
      <MemoryRouter>
        <Properties />
      </MemoryRouter>,
    );

    const rootElement = screen.getByTestId("pageProperties");
    expect(rootElement).toBeInTheDocument();
  });
});
