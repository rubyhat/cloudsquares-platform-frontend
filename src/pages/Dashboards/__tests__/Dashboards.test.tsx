import { render, screen } from "@testing-library/react";
import { Dashboards } from "../Dashboards";
import { TestProviders } from "../../../providers";

describe("Page Dashboards", () => {
  it("renders the Dashboards page", () => {
    render(
      <TestProviders>
        <Dashboards />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageDashboards");
    expect(rootElement).toBeInTheDocument();
  });
});
