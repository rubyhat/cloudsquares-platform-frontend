import { render, act } from "@testing-library/react";

import { AppModule } from "..";

describe("Module AppModule", () => {
  it("renders the AppModule component", async () => {
    await act(async () => {
      render(<AppModule />);
    });
  });
});
