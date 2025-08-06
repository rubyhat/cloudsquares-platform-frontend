import { render, screen } from "@testing-library/react";
import { Customers } from "../Customers";
import { TestProviders } from "../../../providers";

describe("Page Customers", () => {
  it("renders the Customers page", () => {
    render(
      <TestProviders>
        <Customers />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageCustomers");
    expect(rootElement).toBeInTheDocument();
  });
});
