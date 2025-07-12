import { render, screen } from "@testing-library/react";
import { Dashboards } from "../Dashboards";

describe("Page Dashboards", () => {
  it("renders the Dashboards page", () => {
    render(<Dashboards />);

    const rootElement = screen.getByTestId("pageDashboards");
    expect(rootElement).toBeInTheDocument();
  });
});
