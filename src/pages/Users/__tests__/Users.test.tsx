import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Users } from "../Users";

describe("Page Users", () => {
  it("renders the Users page", () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>,
    );

    const rootElement = screen.getByTestId("pageUsers");
    expect(rootElement).toBeInTheDocument();
  });
});
