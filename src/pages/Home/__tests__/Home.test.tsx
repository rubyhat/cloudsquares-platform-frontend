import { render, screen } from "@testing-library/react";
import { Home } from "../Home";

describe("Page Home", () => {
  it("renders the Home page", () => {
    render(<Home />);

    const rootElement = screen.getByTestId("pageHome");
    expect(rootElement).toBeInTheDocument();
  });
});
