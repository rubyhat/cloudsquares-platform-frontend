import { render, screen } from "@testing-library/react";
import { Customers } from "../Customers";

describe("Page Customers", () => {
  it("renders the Customers page", () => {
    render(<Customers />);

    const rootElement = screen.getByTestId("pageCustomers");
    expect(rootElement).toBeInTheDocument();
  });
});
