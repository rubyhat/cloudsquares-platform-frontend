import { render, screen } from "@testing-library/react";
import { Users } from "../Users";
import { TestProviders } from "../../../providers";

describe("Page Users", () => {
  it("renders the Users page", () => {
    render(
      <TestProviders>
        <Users />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageUsers");
    expect(rootElement).toBeInTheDocument();
  });
});
