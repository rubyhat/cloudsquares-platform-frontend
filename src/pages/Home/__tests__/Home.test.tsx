import { render, screen } from "@testing-library/react";
import { Home } from "../Home";
import { TestProviders } from "../../../providers";

describe("Page Home", () => {
  it("renders the Home page", () => {
    render(
      <TestProviders>
        <Home />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageHome");
    expect(rootElement).toBeInTheDocument();
  });
});
