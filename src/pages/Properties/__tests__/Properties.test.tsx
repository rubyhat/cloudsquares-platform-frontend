import { render, screen } from "@testing-library/react";
import { Properties } from "../Properties";
import { TestProviders } from "../../../providers";

describe("Page Properties", () => {
  it("renders the Properties page", () => {
    render(
      <TestProviders>
        <Properties />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageProperties");
    expect(rootElement).toBeInTheDocument();
  });
});
