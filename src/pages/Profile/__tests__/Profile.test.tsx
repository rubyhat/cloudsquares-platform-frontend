import { render, screen } from "@testing-library/react";
import { Profile } from "../Profile";
import { TestProviders } from "../../../providers";

describe("Page Profile", () => {
  it("renders the Profile page", () => {
    render(
      <TestProviders>
        <Profile />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageProfile");
    expect(rootElement).toBeInTheDocument();
  });
});
