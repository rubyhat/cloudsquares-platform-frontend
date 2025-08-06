import { render, screen } from "@testing-library/react";
import { PropertyDetails } from "../PropertyDetails";
import { TestProviders } from "../../../providers";

describe("Page PropertyDetails", () => {
  it("renders the PropertyDetails page", () => {
    render(
      <TestProviders>
        <PropertyDetails />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pagePropertyDetails");
    expect(rootElement).toBeInTheDocument();
  });
});
