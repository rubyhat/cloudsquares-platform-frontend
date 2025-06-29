import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Header } from "../components/Header";

describe("Component Header", () => {
  it("renders the Header component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const rootElement = screen.getByTestId("header");
    expect(rootElement).toBeInTheDocument();
  });

  it("renders the Header component without throwing", () => {
    expect(() =>
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      ),
    ).not.toThrow();
  });
});
